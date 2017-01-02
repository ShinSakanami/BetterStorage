# BetterStockpiles
**A mod for Stonehearth which add more item filters to the stockpiles.**

By Shinji Sakanami http://shinsaka.com

Stonehearth is a game by Radiant Entertainment http://stonehearth.net/

## Description

The stockpiles in StoneHearth are great, but maybe you need more filtering capabilities? Want to separate flowers from fibers? Wheat grains from food? Meat from animal feed?

Better Stockpiles is here for you! Adding more filters to stockpiles, crates and chests for better stocks management.

Compatible with Candledark, Frostfeast, Stonehearth Cafe and Brewery Mod!

Current available stockpile filters:

* **Resources:** Wood, Stone, Clay
* **Ore:** Coal, Copper, Tin, Iron, Silver, Gold
* **Plants:** Fibers, Herbs, Saplings
* **Animal Parts:** Pelts, Skins, Feathers, Wool, Bones
* **Construction:** Doors & Windows, Furniture, Defenses, Decorations
* **Refined Goods:** Thread, Cloth, Leather, Gears
* **Metal Bars:** Copper Ingots, Tin Ingots, Bronze Ingots, Iron Ingots, Silver Ingots, Gold Ingots, Steel Ingots
* **Equipment:** Tools, Melee Weapons, Ranged Weapons, Light Armor, Heavy Armor, Outfits
* **Consumables:** Healing Items, Tonics, Medicine (FF)
* **Food & Drink:** Fruits & Vegetables, Meat, Cooked Foods, Drinks (SC), Rotten Foods
* **Ingredients:** Cooking Ingredients, Eggs, Wheat, Honey (SC), Sugarcane (BM)
* **Animal Feed:** Poyo Feed, Rabbit Feed, Sheep Feed, Pig Feed (SC&FF), Yak Feed (SC)
* **Wealth:** Gold Chests, Trophies, Quest Items (SC)

Discuss about this mod on http://discourse.stonehearth.net/t/mod-better-stockpiles/21449

Feedback, suggestions and bug reports are welcome!

## Mirrors

**better_stockpiles.smod**
* Dropbox: https://www.dropbox.com/s/0qvojc4niy1ircu/better_stockpiles.smod?dl=0
* PraiseDB: http://praisedb.x10.bz/mod.php?id=127
* StoneHearth Mods: https://stonehearthmods.co/better-stockpiles/

**cookmod_bs.smod**
* Dropbox: https://www.dropbox.com/s/iondsbpv3952tvi/cookmod_bs.smod?dl=0

**brewerymod_bs.smod**
* Dropbox: https://www.dropbox.com/s/o2co3mj6lbqopo7/brewerymod_bs.smod?dl=0

## Installation

* Download "better_stockpile.smod" file from the Releases page or any of the mirrors above.
* Download the compatiblity patches for the mods you use.
* Copy the .smod files to "/Stonehearth/mods" directory.
* Profit!

## Compatibility

* Patch "candledark_bs.smod" for Candledark 2016 (http://www.stonehearth.net/eek-candledark-is-upon-us-again)
* Patch "frostfeast_bs.smod" for Frostfeast 2016 (http://www.stonehearth.net/frostfeast-2016-moar-frost-moar-feast)
* Patch "cookmod_bs.smod" for Stonehearth Cafe 1.7 (http://discourse.stonehearth.net/t/mod-stonehearth-cafe-cooking-and-farming-expansion-1-7/10159)
* Patch "brewerymod_bs.smod" for Brewery Mod Alpha 18 (http://discourse.stonehearth.net/t/alpha18-brewerymod/21790)

If a mod uses vanilla filtering tags for its items, it will be mostly compatible with BS.

If a mod modifies the stockpile filters file, it could be compatible with BS. Maybe. Depends on the modifications.

If a mod overrides the stockpile filters file, or uses non vanilla filtering tags, it will NOT be compatible with BS.

If you want me to make a compatibility patch for a mod, please send me a PM on Stonehearth Discourse, with a link to the latest version of the mod.

## Changelog

**Version 0.19.0**

For Stonehearth Alpha 19 stable 687

* Reduced files number with more common mixintos.
* Renamed "Worker Outfits" filter to "Outfits".

Updated compatibility patch for Stonehearth Cafe 1.7:

* Updated to the latest mod revision.

Updated compatibility patch for Brewery Mod Alpha 18:

* Updated to the latest mod revision.

Added compatiblity patch for Candledark 2016: 

* Moved Ancient Healing Tonic to "Tonics" filter.

Added compatiblity patch for Frostfeast 2016:

* Added "Pig Feed" filter to "Animal Feed" category.
* Added "Medicine" filter to "Consumables" category.
* Moved Cough Syrup and Vapour Rub to "Medicine" filter.
* Moved "Ginger" to "Cooking Ingredients" filter.
* Moved Winter Outfits to "Outfits" filter.

**Version 0.18.4**

For Stonehearth Alpha 18 stable 663

* Added "Worker Outfits" filter to "Equipment" category. Upgraded Worker Outfit and Winter Worker Outfit are now correctly stored by Hearthlings.

Updated compatibility patch for Stonehearth Cafe 1.7:

* Corrected bug with Fancy Cook Outfit and Fisherman's Rod.
* Fancy Cook Outfit is now stored under "Worker Outfits" filter.

**Version 0.18.3**

For Stonehearth Alpha 18 stable 663

* Moved "Meat" filter to "Food & Drink" category.
* Renamed "Raw Food" filter to "Fruits & Vegetables".
* Renamed "Grain Flour" filter to "Cooking Ingredients", with a new tag.

Updated compatibility patch for Stonehearth Cafe 1.7:

* Removed "Potatoes" and "Rice" filters.
* Moved Potatoes and Rice entities to "Cooking Ingredients" filter with the new tag.

Added compatibility patch for Brewery Mod Alpha 18:

* Added "Sugarcane" filter to "Ingredients" category.
* Moved Cocoa Powder, Yeast and Sugar entities to "Cooking Ingredients" filter with the new tag.
* Added "drink_container" tag to Corn Mead, Golden Mead, Mead, Pumpkin Spice Mead and Strawberry Mead entities.
* Removed "drink_container" tag from Apple Basket, Blueberry Basket, Grapes Basket, Strawberry Basket and Tomato Basket entities.
* Removed "stockpile_prepared_food" tag from Fortified Wine entity.

**Version 0.18.2**

For Stonehearth Alpha 18 stable 663

* Enlarged stockpile UI window, so every filters are visible without scrolling!

Added compatibility patch for Stonehearth Cafe 1.7:

* Added "Potatoes", "Rice" and "Honey" filters to "Ingredients" category.
* Added "Pig Feed" and "Yak Feed" filters to "Animal Feed" category.
* Added "stockpile_decoration" tag to Well, Scarecrow and Wind Sail entities.
* Added "stockpile_equipment" tag to Fisherman Rod and Fancy Cook Outfit entities.
* Removed "drink_container" tag from Berries Basket and Prickly Pear Basket entities.

**Version 0.18.1**

For Stonehearth Alpha 18 stable 656

* Modified stockpile UI with a larger window (thanks Tuhalu).
* Added "Rotten Foods" filter to "Food & Drink" category.
* Added "stockpile_rotten_food" tag to Rotten Basket, Rotten Egg and Rotten Jerky entities.
* Merged "Flour" and "Corn Meal" filters into "Grain Flour" filter.

**Version 0.18.0**

For Stonehearth Alpha 18 stable 652

* Use of the new "remove" mixintype.
* "Ore", "Metal Bars", "Consumables" and "Animal Feed" filters are now detailed categories.
* Renamed "Goods" category to "Refined Goods".
* Moved "Ingredients" category after "Food & Drink".
* Added "tonic" tag to Tonic potions, to use with the new "Tonics" filter.

**Version 0.17.2**

For Stonehearth Alpha 17 stable 584

* Added "Gears" filter to "Goods" category (thanks Brendan).

**Version 0.17.1**

For Stonehearth Alpha 17 develop 3013

* Removes the Fur Rug mixinto.

**Version 0.17.0**

For Stonehearth Alpha 17 develop 3008

* Use of the new "override" mixintype. The ghost filters are now exorcised.
* Compatibility with the new stockpile filters.
* Added "Bones" filter to "Animal Parts" category.
* "Fruits & Vegetable Baskets" filter renamed to "Raw Food" and mover under "Food & Drink" category.
* "Exotic Gear" filter removed.
* "Light & Torches" filter removed.

**Version 0.16.4**

For Stonehearth Alpha 16 stable 2972

* stockpile_filters.json is now a mixinto instead of an override. This should assure better compatibility with other mods.
* Redesigned filters so they use vanilla item tags as much as possible, to assure better compatibility with other mods. Now, only the fur rug need a mixinto.
* "Cloth" and "thread" are now two separated filters.
* Cooking ingredients are now spitted under their own category "Ingredients" into 6 filters : "fruits & vegetables", "meat", "egg", "wheat", "flour" and "corn meal". "Prepared food" and "animal feed" are still under "Food & Drinks".
* New icons.

**Version 0.16.3**

For Stonehearth Alpha 16 stable 2972.

* Added "wool" filter to "Animal Parts" category.
* Moved "Wool Bundle" to "wool" filter.

**Version 0.16.2/0.15.2**

For Stonehearth Alpha 16 develop 2940 and Alpha 15 stable 549.

* Moved "Goblin Honor Tokens" to "gems and trophies".
* Renamed "flowers" to "herbs" (to be consistent with craft recipes).
* Renamed "goods produced from bits of animals" to "leather".
* Divided "Plants & Animal Parts" into two separated categories.
* "Plants" category with "fibers", "herbs" and "saplings" filters.
* "Animal Parts" category with "fur pelts", "skins" and "feathers" filters.

**Version 0.16.1/0.15.1**

For Stonehearth Alpha 16 develop 2924 and Alpha 15 stable 549.

* "Leather Bolt" moved to "Refined Animal Parts".
* "Fur Rug" moved to "Decorations".
* "Jerkies" moved to "Meat & Eggs".

**Version 0.16.0**

Initial version for Stonehearth Alpha 16 develop 2924.

## License

This work is licensed under a **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)** http://creativecommons.org/licenses/by-nc-sa/4.0/
