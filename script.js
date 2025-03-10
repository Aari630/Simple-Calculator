let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function ClearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Calculation");
        ClearDisplay();
    }
}

// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    // Save user preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
