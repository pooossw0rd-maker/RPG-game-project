// --- INVENTORY EVENTS ---

const inventoryBtn = document.getElementById("inventoryBtn");

inventoryBtn.addEventListener("click", setInventoryScreen)

function setInventoryScreen () {
    setScreen("inventory-screen")
}
