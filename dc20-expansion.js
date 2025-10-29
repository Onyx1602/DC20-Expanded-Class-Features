Hooks.once("ready", async function() {
  // Hide system class items from compendium browser as we will use module class items
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.fbl9we8zEbucq0he")    // Barbarian
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.LV0Rmm3CEwRX0CXl")    // Bard
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.U41sY3LrsyhRK8bE")    // Champion
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.365N8X3nhvtlcWpU")    // Cleric
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.G85A64kn7Eh5lIZX")    // Commander
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.Q8XcLnUGTFBryr87")    // Druid
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.mxfTVK4de2Ruk6vX")    // Hunter
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.OklyPt0FxZrlP7lu")    // Monk
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.mt1lzsxIUvv9aSMG")    // Psion
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.o6ndqXBfjm8vME7Y")    // Rogue
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.7puPl3lkNyXcYl5l")    // Sorcerer
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.DNRt3oMu9l71r6fk")    // Spellblade
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.klilK36MYgG3JI1O")    // Warlock
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.classes.Item.eyQYEiXjZxHCrpDc")    // Wizard
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.tF5VHgWyfKM2YAle")    // Elemental Fury Barbarian
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.SCEi71Ilpopzp5kq")    // Spirit Guardian Barbarian
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.7lnRJ7n9jKmsCvHc")    // Eloquence Bard
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.5ICjo5tHDc17dzBV")    // Jester Bard
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.2OvKW0gNbfSugtUi")    // Hero Champion
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.Qf8dmCiLl2vc0UnN")    // Sentinel Champion
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.JChFO9AfEFX1oWvs")    // Inquisitor Cleric
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.qrNU0J2N0bcFEFkc")    // Priest Cleric
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.Ta7ggPJBTyVvuxoQ")    // Crusader Commander
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.EofRdVT02MlPAxLg")    // Warlord Commander
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.tlqRt8MdD10ImiAP")    // Phoenix Druid
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.TciT5h1hNeGBUjLV")    // Rampant Growth Druid
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.9aZpqmDH2vlwNlND")    // Monster Slayer Hunter
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.2wqHYr5Cm8GEnZL4")    // Trapper Hunter
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.kPz7PpVJVJDHt0Pd")    // Astral Self Monk
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.ouJLZV5Ns8HjoUhN")    // Shifting Tide Monk
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.Va2VeSLUSvJKTryQ")    // Oracle Psion
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.DkR78b99cmFwDLpP")    // Psi-Knight Psion
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.Tri6c38dfurm7YmX")    // Long Death Rogue
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.tLqrk1KxRWCQWpPf")    // Swashbuckler Rogue
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.mSxTUNiJdMbueq8m")    // Angelic Sorcerer
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.dpW6D6jZKyWpAkcG")    // Draconic Sorcerer
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.L8Pqr2vR5RJCJnYF")    // Paladin Spellblade
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.R2hxAZPmQ2MaUVP7")    // Rune Knight Spellblade
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.MsZQqGII0bRcN80B")    // Eldritch Warlock
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.EbeO3LRDAm2SHNcf")    // Fey Warlock
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.kGNbCKz7JYuEgGgg")    // Portal Mage Wizard
  game.dc20rpg.compendiumBrowser.hideItems.add("Compendium.dc20-core-rulebook.subclasses.Item.Almtp6aepoP89IPz")    // Witch Wizard
})