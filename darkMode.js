const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.toggle('dark-mode');
};

function darkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem("theme", "dark");

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        } else {
        localStorage.setItem('theme', 'light');
        }

}

document.getElementById("outputt").innerHTML = location.search;
