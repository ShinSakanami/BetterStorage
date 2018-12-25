var lastTabPage = 'filterTab';
var stockpileFiltersFile = null;

App.StonehearthStockpileView = App.StonehearthBaseZonesModeView.extend({
   templateName: 'stonehearthStockpile',
   closeOnEsc: true,

   components: {
      "stonehearth:unit_info": {},
      "stonehearth:stockpile" : {},
      "stonehearth:storage" : {
         "item_tracker" : {
            "tracking_data" : {
               "*" : {
                  "item_qualities": {}
               },
               "stonehearth:loot:gold" : {
                  "items" : {
                     "*" : {
                        "stonehearth:stacks": {}
                     }
                  }
               }
            }
         },
         "filter_list": {}
      },
   },

   init: function() {
      var self = this;
      self._super();
   },

   _loadFilters: function () {
      return this.set('stockpileFiltersUnsorted', this.get('model.stonehearth:storage.filter_list'));
   }.observes('model.stonehearth:storage.filter_list'),

   destroy: function() {
      var self = this;
      self._super();
   },

   willDestroyElement: function() {
      this._inventoryPalette.stonehearthItemPalette('destroy');
      this._inventoryPalette = null;

      this.tabs.off('click');
      this.$().off('click', '.group').off('click', '.filterCategory');

      this.allButton.off('click');

      this.noneButton.off('click');

      this.$('button.ok').off('click');
      this.$('button.warn').off('click');

      this.taxonomyGrid.togglegrid('destroy');
      this.$().find('.tooltipstered').tooltipster('destroy');
      this._super();
   },

   didInsertElement: function() {
      this._super();
      var self = this;
      this.taxonomyGrid = this.$('#taxonomyGrid');
      this.allButton = this.$('#all');
      this.noneButton = this.$('#none');
      
      this.$().draggable({ handle: '.title' });

      this.tabs = this.$('.tab');

      this.tabs.click(function() {
         lastTabPage = $(this).attr('tabPage');
      });

      this.taxonomyGrid.togglegrid();

      self.$().on('click', '.group', function() {
         self._onGroupClick($(this))
      });

      self.$().on('click', '.filterCategory', function() {
         radiant.call('radiant:play_sound', {'track' : 'stonehearth:sounds:ui:action_click'} );
         self._onItemClick($(this));
      });

      this.allButton.click(function() {
         radiant.call('radiant:play_sound', {'track' : 'stonehearth:sounds:ui:action_click'} );
         self._selectAll();
      });

      this.noneButton.click(function() {
         radiant.call('radiant:play_sound', {'track' : 'stonehearth:sounds:ui:action_click'} );
         self._selectNone();
      });

      this.$('button.ok').click(function() {
         radiant.call('radiant:play_sound', {'track' : 'stonehearth:sounds:ui:start_menu:submenu_select'} );
         self.destroy();
      });

      this.$('button.warn').click(function() {
         radiant.call('stonehearth:destroy_entity', self.uri)
         self.destroy();
      });

      self._refreshGrids();
      //inventory tab
      this._inventoryPalette = this.$('#inventoryPalette').stonehearthItemPalette({
         cssClass: 'inventoryItem',
      });

      // Resume on last selected tab
      self._resumeLastTab();
   },

   _updateStockpileFilters: function() {
      var self = this;
      var filters = self.get('stockpileFiltersUnsorted');
      if (filters.stockpile) {
         var sortedFilters = radiant.map_to_array(filters.stockpile);
         sortedFilters.sort(function(a, b){
            var aOrd = a.ordinal ? a.ordinal : 10000;
            var bOrd = b.ordinal ? b.ordinal : 10000;
            return aOrd - bOrd;
         });
         for(var i=0; i < sortedFilters.length; ++i) {
            var group = sortedFilters[i];
            var categories = radiant.map_to_array(group.categories);
            categories.sort(function(a, b){
               var aOrd = a.ordinal ? a.ordinal : 10000;
               var bOrd = b.ordinal ? b.ordinal : 10000;
               return aOrd - bOrd;
            });
            Ember.set(group, 'categories', categories);
         }

         self.set('stockpileFilters', sortedFilters);
         Ember.run.scheduleOnce('afterRender', self, '_updateTooltips');
      }
   }.observes('stockpileFiltersUnsorted'),

   _updateTooltips: function() {
      var self = this;
      var images = self.$('.categoryImage');
      if (images) {
         images.each(function() {
            var element = $( this );
            var display_name = element.attr('display_name');
            var translated = i18n.t(display_name);
            element.attr('title', translated);
            element.tooltipster();
         });
      }
      self._refreshGrids();
   },

   _updateStockedItems : function() {
      var self = this;
      Ember.run.scheduleOnce('afterRender', this, function() {
         if (!self._inventoryPalette) {
            // When moving a crate, this function will fire, but no UI will be present.  For now, be lazy
            // and just ignore this case.
            return;
         }
         var tracker = self.get('model.stonehearth:storage.item_tracker');
         var inventoryItems = {}
         // Extract quality entries.
         radiant.each(tracker.tracking_data, function (uri, uri_entry) {
            radiant.each(uri_entry.item_qualities, function (item_quality_key, item) {
               var key = uri + App.constants.item_quality.KEY_SEPARATOR + item_quality_key;
               inventoryItems[key] = radiant.shallow_copy(uri_entry);
               inventoryItems[key].count = item.count;
               inventoryItems[key].item_quality = item_quality_key;
            });
         });
         self._inventoryPalette.stonehearthItemPalette('updateItems', inventoryItems);

         var backpackCapacity = self.get('model.stonehearth:storage.capacity');

         if (backpackCapacity) {
            self.set('used_spaces', self.get('model.stonehearth:storage.num_items'));
            self.set('capacity', backpackCapacity);
         }
      });
   }.observes('model.stonehearth:storage.item_tracker'),

   _updateRemainingCounter : function() {
      var self = this;
      Ember.run.scheduleOnce('afterRender', this, function() {
         var backpackCapacity = self.get('model.stonehearth:storage.capacity');

         if (backpackCapacity) {
            self.set('remaining_spaces', backpackCapacity - self.get('model.stonehearth:storage.num_items'));
            self.set('capacity', backpackCapacity);
         }
      });
   }.observes('model.stonehearth:storage.num_items'),

   _updateTabs: function() {
      var self = this;

      var filterTabElement = self.$('div[tabPage=filterTab]');
      if (!filterTabElement) {  // Too early or too late.
         return;
      }

      var stockpileId = self.get('model.player_id');
      var isOwner = stockpileId && App.stonehearthClient.getPlayerId() == stockpileId;
      if (!isOwner) {
         // Hide filter tab if client doesn't own this object
         filterTabElement.hide();
         var filterTabPage = self.$('#filterTab');
         filterTabPage.hide();

         var contentsTabElement = self.$('div[tabPage=contentsTab]');
         contentsTabElement.addClass('active');
         var contentsTabPage = self.$('#contentsTab');
         contentsTabPage.show();
      } else {
         // Show filter tab 
         filterTabElement.show();

         self._resumeLastTab();
      }
   }.observes('model.stonehearth:unit_info'),

   _resumeLastTab: function() {
      this.$('div[tabPage]').removeClass('active');
      this.$('.tabPage').hide();

      var tab = this.$('div[tabPage=' + lastTabPage + ']');
      tab.addClass('active');

      var tabPage = this.$('#' + lastTabPage);
      tabPage.show();
   },

   _selectAll : function() {
      this.$('.filterCategory').addClass('on');
      // Set the filter to Nil. This makes it really ALL again.
      radiant.call('stonehearth:set_stockpile_filter', this.uri);
   },

   _selectNone : function() {
      this.$('.filterCategory').removeClass('on');
      this._setStockpileFilter();
   },

   _refreshGrids : function() {
      var self = this;
      if (!self.$('.filterCategory')) {
         return;
      }

      self.$('button.warn').css('display', self.get('model.stonehearth:stockpile') ? 'inline-block' : 'none');

      var stockpileFilter = self.get('model.stonehearth:storage.filter');

      self.$('.filterCategory').removeClass('on');

      if (stockpileFilter) {
         self.$('.filterCategory').each(function(i, element) {
            var button = $(element)
            var buttonFilter = button.attr('filter')

            if (!buttonFilter) {
               console.log('button ' + button.attr('id') + " has no filter!")
            } else {
               radiant.each(stockpileFilter, function(i, filter) {
                  if (buttonFilter == filter) {
                     button.addClass('on');
                  }
               });
            }
         });

         self._updateGroups();
      } else {
         self.allButton.prop('checked', true)
         self.noneButton.prop('checked', false);
         self.$('.group').prop('checked', true)
         self.$('.filterCategory').addClass('on');
      }

      if (this.get('model.stonehearth:storage.is_single_filter')) {
         var selectedFilter = self.$('#taxonomyGrid .filterCategory.on .categoryImage');
         var name, icon;
         if (selectedFilter.length) {
            name = selectedFilter.attr('title');
            icon = selectedFilter.attr('src');
         } else {
            name = i18n.t('stonehearth:ui.game.zones_mode.stockpile.filters.none');
            icon = '/stonehearth/ui/common/images/transparent.png';
         }
         self.$('.selectedFilter .label').text(name);
         self.$('.selectedFilter .icon')
            .attr('src', icon)
            .attr('title', name)
            .tooltipster();
         self.set('selected_filter_label', name);
      }
   }.observes('model.stonehearth:storage.filter'),

   _onGroupClick: function (element) {
      radiant.call('radiant:play_sound', {'track' : 'stonehearth:sounds:ui:action_click'} );
      var checked = element.prop('checked');

      $('.filterCategory', element.closest('.row')).each(function (i, categoryChild) {
         $(categoryChild).toggleClass('on', checked);
      });

      this._setStockpileFilter();
   },

   _onItemClick : function(element) {
      element.toggleClass('on');
      if (element.hasClass('on') && this.get('model.stonehearth:storage.is_single_filter')) {
         this.$('.filterCategory').each(function () {
            if (element[0] != this) {
               $(this).removeClass('on');
            }
         });
      }

      this._setStockpileFilter();
   },

   _setStockpileFilter : function() {
      var values = [];
      $('#taxonomyGrid').find('.on').each(function(i, element) {
         var value = $(element).attr('filter');
         if (value) {
            values.push(value);
         }
      });

      radiant.call('stonehearth:set_stockpile_filter', this.uri, values)
         .done(function(response) {
         });
   },

   // As of jQuery 1.6, we should be using .prop() instead of .attr() to get and set the checked property of checkboxes:
   // http://api.jquery.com/prop
   // http://stackoverflow.com/questions/5874652/prop-vs-attr/5876747#5876747
   _updateGroups : function() {
      var self = this;

      var allGroupsOn = true;
      var noGroupsOn = true;

      self.$('.group').each(function (i, group) {
         var groupOn = true;
         $('.filterCategory', group.closest('.row')).each(function(i, sibling) {
            var category = $(sibling);
            if (category.hasClass('on')) {
               noGroupsOn = false;
            } else {
               groupOn = false;
               allGroupsOn = false;
            }
         });

         $(group).prop('checked', groupOn);
      });

      self.allButton.prop('checked', allGroupsOn);
      self.noneButton.prop('checked', noGroupsOn);
   }
});
