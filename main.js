document.addEventListener("DOMContentLoaded", init);

const classes = {
    doctor: {
        hp: 12,
        atk: 2,
        cash: 5,
        items: {
            medkit: 1,
            bandage: 2
        }
    },
    warrior: {
        hp: 10,
        atk: 4,
        cash: 2,
        items: {
            woodenSword: 1
        }
    },
    engineer: {
        hp: 10,
        atk: 2,
        cash: 100,
        items: {
            steelfire: 2,
            wrench: 1,
            bolt: 10
        }
    },
    scout: {
        hp: 10,
        atk: 2,
        cash: 100,
        items: {
            flashlight: 1,
            bottles: 5,
            rope: 3
        }
    }
};


function init() {
    bindUI();
}

function bindUI() {
    const startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", startGame);
}

function startGame() {
    console.log("Start clicked");

    const nameInput = document.getElementById("name-input");
    const classSelect = document.getElementById("class-select");

    if (!nameInput || !classSelect) {
        console.error("Missing input elements");
        return;
    }

    const name = nameInput.value.trim();
    const selectedClass = classSelect.value;

    if (!name) {
        alert("Please enter a name!");
        return;
    }

    if (!classes[selectedClass]) {
        console.error("Invalid class:", selectedClass);
        return;
    }

    createPlayer(name, selectedClass);
    updateStatsUI();
    setScreen("game-screen");
}
