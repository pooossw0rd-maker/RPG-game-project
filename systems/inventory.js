const inventory = { // ( itemName : amount )
}
const ITEM_CATEGORIES = { // for dropdown filtering
    equippable: [ "knife", "axe", "gun", "wooden sword", "iron sword", "diamond sword", "grappling hook", "bomb" ],
    usable: [ "bandage", "medkit", "flashlight", "empty bottle", "rope" ]
}
const ITEMS = { // normalized item names (avoid typos)
    FLASHLIGHT: "flashlight",
    MEDKIT: "medkit",
    ROPE: "rope",
    KNIFE: "knife",
    SCRAP: "scrap",
    WOOD: "wood",
    EMPTY_BOTTLE: "empty bottle",
    IRON_NUGGET: "iron nugget",
    GUN: "gun",
    GUNPOWDER: "gunpowder",
    TAR: "tar",
    STEELFIRE: "steelfire",
    BOLT: "bolt",
    GRAPPLING_HOOK: "grappling hook",
    // cave ores
    COAL: "coal",
    IRON: "iron",
    COPPER: "copper",
    SILVER: "silver",
    TIN: "tin",
    GOLD: "gold",
    TUNGSTEN: "tungsten",
    EMERALD: "emerald",
    REDSTONE: "redstone",
    MAGNESIUM: "magnesium",
    COBALT: "cobalt",
    IRIDIUM: "iridium",
    ELECTRUM: "electrum",
    DIAMOND: "diamond",
    METEORITE: "meteorite",
    URANIUM: "uranium",
    MOONSTONE: "moonstone",
    AETHERIUM: "aetherium",
    SOULSTONE: "soulstone",
    BRIMSTONE: "brimstone"
}
// --- ITEM FUNCTIONS ---
function addItem(item, amount) {
    if (!item || typeof item !== "string") return;
    item = item.trim();
    if (!inventory[item]) inventory[item] = 0;
    inventory[item] += amount;
    updateInventoryDisplay();
}
function removeItem(item, amount) {
    if (!inventory[item]) return;
    inventory[item] -= amount;
    if (inventory[item] < 0) inventory[item] = 0;
    updateInventoryDisplay();
}
function updateInventoryDisplay() {
    let listText = "";
    const equipList = [];
    const usableList = [];
    const craftList = [];
    for (let item in inventory) {
        if (inventory[item] <= 0) continue;
        listText += item + " x" + inventory[item] + "\n";
        if (ITEM_CATEGORIES.equippable.indexOf(item) !== -1)
            equipList.push(item);
        if (ITEM_CATEGORIES.usable.indexOf(item) !== -1)
            usableList.push(item);
        craftList.push(item);
    }
    setText("inventoryList", listText);
    // TODO: update data
}