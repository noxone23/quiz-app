//darkmode
//Checkbox der Profilseite
const toggleCheckbox = document.querySelector('[data-js="dark-mode-toggle"]');

//es wird nach Theme Local geschaut ansonsten Standard Modus light
const savedTheme = localStorage.getItem('theme') || 'light';

//durch Atribut data weiß CSS was es Laden muß
document.documentElement.setAttribute('data-theme', savedTheme);

//hier wird der schalter aktiviert
if (toggleCheckbox) {
if (savedTheme === 'dark') {
    toggleCheckbox.checked = true;
}

//dadurch wird der Code ausgeführtz
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        //an Darkmode wird aktiviert true
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        //aus light wird aktiviert false
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
}
//darkmode