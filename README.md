# Better Storage
**A mod for Stonehearth which add more item filters to the storages.**

AKA Better Stockpiles

By Shinji Sakanami http://shinsaka.com

Stonehearth is a game by Radiant Entertainment http://stonehearth.net/

## Description

The storages in StoneHearth are great, but maybe you need more filtering capabilities? Want to separate flowers from fibers? Wheat grains from food? Meat from animal feed?

Better Storage is here for you! Adding more filters to stockpiles, crates and chests for better resource management.

Compatible with many popular mods like Candledark, Frostfeast, Stonehearth Cafe, Brewery Mod, and more!

Current available storage filters:

* **Resources:** Wood, Stone, Clay, Ore
* **Plants:** Fibers, Herbs, Saplings, Sprouts & Seeds
* **Animal Parts:** Pelts, Skins, Feathers, Wool, Bones
* **Construction:** Doors & Windows, Furniture, Fences & Gates, Decorations, Light Sources, Traps & Turrets, Food & Drink Sources
* **Refined Craftables:** Thread, Cloth, Leather, Components
* **Equipment:** Talismans & Workbenches, Melee Weapons, Ranged Weapons, Light Armor, Heavy Armor, Outfits
* **Consumables:** Healing Items, Tonics, Medicine
* **Food & Drink:** Raw Fruits & Vegetables, Raw Meat, Cooked Veggie Foods, Cooked Meat Foods, Drinks, Rotten Foods
* **Ingredients:** Raw Ingredients, Refined Ingredients, Wheat
* **Animal Feed:** Kibble, Poyo Feed, Rabbit Feed, Sheep Feed, Pig Feed, Yak Feed
* **Wealth:** Gold Chests, Trophies, Quest Items

Discuss about this mod on http://discourse.stonehearth.net/t/mod-better-stockpiles/21449

Feedback, suggestions and bug reports are welcome!

## Installation

* Remove any previous files from Better Storage (betterstorage.smod) or Better Stockpiles (better_stockpiles.smod and *_bs.smod).
* Download the latest stable version of BS from the Releases page.
* Copy the "betterstorage.smod" file to ".../Stonehearth/mods" directory.
* Launch Stonehearth and check if "betterstorage" is activated in Mods tab of the settings panel.
* Start a new game, or load an existing town. Note in this case, you will need to verify all your stockpiles, crates and chests to check the new filters.
* Enjoy!

Alternate install: Click on the green "Clone or download" button, then on "Download ZIP". Extract "BetterStorage-master/betterstorage" folder from the ZIP file to ".../Stonehearth/mods" directory. Warning, this version of BS could be unstable.

## Compatibility

Better Storage includes compatibility with the following mods:

* Candledark 2016: http://www.stonehearth.net/eek-candledark-is-upon-us-again
* Frostfeast 2016: http://www.stonehearth.net/frostfeast-2016-moar-frost-moar-feast
* Stonehearth Cafe 1.92: https://discourse.stonehearth.net/t/mod-stonehearth-cafe-cooking-and-farming-expansion-1-92/10159
* Brewery Mod A22.5: https://discourse.stonehearth.net/t/alpha22-5-brewerymod/21790
* Settlement Decor 1.30: https://discourse.stonehearth.net/t/mod-settlement-decor-mod-download-available/4841
* Wizards Class Pack Mod 0.3.5: https://discourse.stonehearth.net/t/wizards-class-pack-mod-a21-wip/29410

If a mod uses vanilla filtering tags for its items, it will be mostly compatible with BS.

If a mod modifies the "stockpile_filters.json" file, it could be not compatible with BS.

If a mod overrides the "stockpile_filters.json" file, or uses non vanilla filtering tags, it will NOT be compatible with BS.

If you want me to ensure compatibility with a mod, please send me a message on Stonehearth Discourse, with a link to the latest version of the mod.

Recommended mods, all compatibles with Better Storage:

* Pawel's Mod Corner: https://discourse.stonehearth.net/t/a22-pawels-mod-corner-finetems-plant-lore-archmod/26504
* MaraRose's Container Mod: https://discourse.stonehearth.net/t/mararoses-container-mod/28554
* Chabonit's Mod: https://discourse.stonehearth.net/t/a21-chabonit-s-mod-wealth-and-leadership-r15-04/29744
* EndPieces: https://discourse.stonehearth.net/t/mod-all-versions-endpieces-1-09-a20-update/10375
* Finery Mod: https://discourse.stonehearth.net/t/finery-mod-v4-7-nov-22/31511
* Home Sweet Home: https://discourse.stonehearth.net/t/home-sweet-home-version-2-2-house-with-garden/30993
* Signery Mod: https://discourse.stonehearth.net/t/signery-mod-v3-1-nov-3/31462
* Slabs with Terrain Colors: https://discourse.stonehearth.net/t/mod-slabs-with-terrain-colors-a20/14957
* Town Monitor: https://discourse.stonehearth.net/t/town-monitor-v1-1-mod/32561
* Smart Crafter: https://discourse.stonehearth.net/t/mod-smart-crafter/10213

## Changelog

**Version 1.0**

For Stonehearth Alpha 22.5 Release 763

* Added French localisation.
* Merged all compatibility patches into the main SMOD.
* Added compatibility with Wizards Class Pack Mod.
* Reduced storage window height, so it won't collide with Town Monitor mod and A23 unit frame.
* Renamed "Sprouts" filter to "Sprouts & Seeds".
* Renamed "Gears" filter to "Components".
* Renamed "Raw Foods (Vege)" to "Raw Fruits & Vegetables".
* Renamed "Raw Foods (Meat)" to "Raw Meat".
* Renamed "Cooked Foods (Vege)" to "Cooked Veggie Foods".
* Renamed "Cooked Foods (Meat)" to "Cooked Meat Foods".
* Removed "Ore" category and restored "Ore" filter in "Resources" category.
* Removed "Metal Bars" category and restored "Metal Bars" filter in "Refined Craftables" category.
* Removed "Eggs", "Crops" and "Honey" filters and added "Raw Ingredients" filter in "Ingredients" category.
* Added "Quest Items" filter under "Wealth" category, merging the "Quest Items" filter from Stonehearth Cafe and the "Offerings" filter from Frostfeast.
* Moved Eggs to "Raw Ingredients" filter.
* Moved Dusty Tome, Broken Flute and Moutain Flute to "Quest Items" filter.
* Rayyas Children: Fixed Upgraded Worker Outfit not properly stored.
* Frostfeast: Moved offerings to "Quest Items" filter.
* Frostfeast: Fixed mod's cooked food, decorations and light sources not properly stored.
* Frostfeast: Fixed Berry Bush not properly stored.
* Frostfeast: Moved hats to "Outfits" filter.
* Candledark: Fixed mod's cooked food and decorations not properly stored.
* Candledark: Moved costumes to "Outfits" filter.
* Stonehearth Cafe: Moved Rice, Potato and Honey to "Raw Ingredients" filter.
* Stonehearth Cafe: Moved back Bee Queen to "Quest Items" filter.
* Brewery Mod: Fixed mod's drinks not properly stored.
* Brewery Mod: Moved seeds to "Sprouts & Seeds" filter.
* Brewery Mod: Moved Sugarcane Bundle to "Raw Ingredients" filter.
* Settlement Decor: Fixed mod's light sources not properly stored.
* Wizards Class Pack Mod: Fixed mod's decorations not properly stored.
* Wizards Class Pack Mod: Moved Ink, Leather Cover, Vellum, Writ of Power and Essences to "Components" filter.

**Version 0.22.0**

For StoneHearth Alpha 22 Release 729

* Added "Sprouts" filter under "Plants" category.
* Moved Berry Bush, Brightbell, Cactus, Foxlily, Frostsnap, Pear Cactus, Silkweed and Sunflower plants to "Sprouts". Brightbell, Cactus and Frostsnap flowers are still in "Herbs" filter.

Updated compatibility patch for Brewery Mod Alpha 18:

* Moved Allium, Blueberry, Mushroom, Rose and Strawberry plants to "Sprouts".

Updated compatibility patch for Settlement Decor 1.18:

* Removed "Plant Parts" filter.
* Moved Ember, Foxfire, Litso Grass and Sunflower plants to "Sprouts".
* Moved plants pods, pollens, slimes and stems to "Herbs".

**Version 0.21.1**

For StoneHearth Alpha 21 Release 707

* Renamed "Tools" filter to "Talismans & Workbenches".

Updated compatibility patch for Stonehearth Cafe 1.9:

* Updated to the latest mod revision.
* Moved Rickety Well to "Food & Drink Sources" filter.

Updated compatibility patch for Settlement Decor 1.18:

* Updated to the latest mod revision.

**Version 0.21.0**

For Stonehearth Alpha 21 Release 703

* New filter icons.
* Slightly larger stockpile UI.
* Added "Kibble" filter to "Animal Feed" category.
* Moved Kibble to "Kibble" filter (obviously).
* Renamed "Refined Goods" category to "Refined Craftables".
* Renamed "Cooking Ingredients" filter to "Refined Ingredients".
* Renamed "Fruits & Vegetables" filter to "Raw Foods (Vege)".
* Renamed "Meat" filter to "Raw Foods (Meat)".
* Divided "Cooked Foods" filter into "Cooked Foods (Vege)" and "Cooked Foods (Meat)".
* Divided "Defenses" filter into "Fences & Gates" and "Traps & Turrets".
* Divided "Decorations" filter into "Decorations" and "Light Sources".
* Fix: Moved Wheat Pile to "Wheat" filter.

Added compatibility patch for Settlement Decor 1.14:

* Added "Plant Parts" filter to "Plants" category.
* Moved plant pods, slimes, pollens and stems to "Plant Parts" filter.
* Moved lanterns to "Light Sources" filter.

Updated compatibility patch for Stonehearth Cafe 1.7:

* Updated to the latest mod revision.
* Added "Food & Drink Sources" filter to "Construction" category.
* Moved Well and Apiary to "Food & Drink Sources" filter.
* Added "Crops" filter to "Ingredients" category.
* Moved Potato and Rice Harvests to "Crops" filter.
* Removed "Quest Items" filter, and moved the Queen Bee to "Trophies" filter.
* Sorted prepared foods into "Cooked Foods (Vege)" and "Cooked Foods (Meat)".

Updated compatibility patch for Brewery Mod Alpha 18:

* Updated to the latest mod revision.
* Removed "Sugarcane" filter, and moved Sugarcane Bale to "Crops" filter.
* Fix: Moved flowers to "Herbs" filter.

**Version 0.20.0**

For Stonehearth Alpha 20 Release 695

* Fixed broken strings.

**Version 0.19.0**

For Stonehearth Alpha 19 Release 687

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
* Moved Ginger to "Cooking Ingredients" filter.
* Moved Winter Outfits to "Outfits" filter.

**Version 0.18.4**

For Stonehearth Alpha 18 Release 663

* Added "Worker Outfits" filter to "Equipment" category. Upgraded Worker Outfit and Winter Worker Outfit are now correctly stored by Hearthlings.

Updated compatibility patch for Stonehearth Cafe 1.7:

* Corrected bug with Fancy Cook Outfit and Fisherman's Rod.
* Fancy Cook Outfit is now stored under "Worker Outfits" filter.

**Version 0.18.3**

For Stonehearth Alpha 18 Release 663

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

For Stonehearth Alpha 18 Release 663

* Enlarged stockpile UI window, so every filters are visible without scrolling!

Added compatibility patch for Stonehearth Cafe 1.7:

* Added "Potatoes", "Rice" and "Honey" filters to "Ingredients" category.
* Added "Pig Feed" and "Yak Feed" filters to "Animal Feed" category.
* Added "stockpile_decoration" tag to Well, Scarecrow and Wind Sail entities.
* Added "stockpile_equipment" tag to Fisherman Rod and Fancy Cook Outfit entities.
* Removed "drink_container" tag from Berries Basket and Prickly Pear Basket entities.

**Version 0.18.1**

For Stonehearth Alpha 18 Release 656

* Modified stockpile UI with a larger window (thanks Tuhalu).
* Added "Rotten Foods" filter to "Food & Drink" category.
* Added "stockpile_rotten_food" tag to Rotten Basket, Rotten Egg and Rotten Jerky entities.
* Merged "Flour" and "Corn Meal" filters into "Grain Flour" filter.

**Version 0.18.0**

For Stonehearth Alpha 18 Release 652

* Use of the new "remove" mixintype.
* "Ore", "Metal Bars", "Consumables" and "Animal Feed" filters are now detailed categories.
* Renamed "Goods" category to "Refined Goods".
* Moved "Ingredients" category after "Food & Drink".
* Added "tonic" tag to Tonic potions, to use with the new "Tonics" filter.

**Version 0.17.2**

For Stonehearth Alpha 17 Release 584

* Added "Gears" filter to "Goods" category (thanks Brendan).

**Version 0.17.1**

For Stonehearth Alpha 17 Release 3013

* Removes the Fur Rug mixinto.

**Version 0.17.0**

For Stonehearth Alpha 17 Release 3008

* Use of the new "override" mixintype. The ghost filters are now exorcised.
* Compatibility with the new stockpile filters.
* Added "Bones" filter to "Animal Parts" category.
* "Fruits & Vegetable Baskets" filter renamed to "Raw Food" and mover under "Food & Drink" category.
* "Exotic Gear" filter removed.
* "Light & Torches" filter removed.

**Version 0.16.4**

For Stonehearth Alpha 16 Release 2972

* stockpile_filters.json is now a mixinto instead of an override. This should assure better compatibility with other mods.
* Redesigned filters so they use vanilla item tags as much as possible, to assure better compatibility with other mods. Now, only the fur rug need a mixinto.
* "Cloth" and "thread" are now two separated filters.
* Cooking ingredients are now spitted under their own category "Ingredients" into 6 filters : "fruits & vegetables", "meat", "egg", "wheat", "flour" and "corn meal". "Prepared food" and "animal feed" are still under "Food & Drinks".
* New icons.

**Version 0.16.3**

For Stonehearth Alpha 16 Release 2972.

* Added "wool" filter to "Animal Parts" category.
* Moved "Wool Bundle" to "wool" filter.

**Version 0.16.2/0.15.2**

For Stonehearth Alpha 16 Release 2940 and Alpha 15 Release 549.

* Moved "Goblin Honor Tokens" to "gems and trophies".
* Renamed "flowers" to "herbs" (to be consistent with craft recipes).
* Renamed "goods produced from bits of animals" to "leather".
* Divided "Plants & Animal Parts" into two separated categories.
* "Plants" category with "fibers", "herbs" and "saplings" filters.
* "Animal Parts" category with "fur pelts", "skins" and "feathers" filters.

**Version 0.16.1/0.15.1**

For Stonehearth Alpha 16 Release 2924 and Alpha 15 Release 549.

* "Leather Bolt" moved to "Refined Animal Parts".
* "Fur Rug" moved to "Decorations".
* "Jerkies" moved to "Meat & Eggs".

**Version 0.16.0**

Initial version for Stonehearth Alpha 16 Release 2924.