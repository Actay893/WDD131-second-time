
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "#FFFFFF";
        logo.src = "byui-logo_white.webp";
        } else {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#333333";
        logo.src = "byui-logo_blue.webp";
    }
}           
                    