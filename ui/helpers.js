const UI_TEXT_STATE = {} // globally stores element value origin


// ---- CODE.ORG FUNCTION REPLICAS ----
function setText(id, text) {
    // Get the element by its ID
    const element = document.getElementById(id);

    // Set the text content using .innerText
    if (element) {
        element.innerText = text;
    }
}

function getText(elementId) {
    return document.getElementById(elementId).innerText
}

// ---- UI helpers ----

function helpers(id, text) {
    setText(id, text);
}

// Lets us set a temporary helpers for an element for a specified time
function tempText(id, message, duration = 2000) {
    const el = document.getElementById(id);
    if (!el) return;

    if (!UI_TEXT_STATE[id]) {
        UI_TEXT_STATE[id] = {
            base: el.innerText,
            timer: null
        };
    }

    const entry = UI_TEXT_STATE[id];
    clearTimeout(entry.timer);

    el.innerText = message;

    entry.timer = setTimeout(() => {
        el.innerText = entry.base;
        entry.timer = null;
    }, duration);
}
