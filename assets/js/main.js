function ajaxpost() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let popup = document.getElementById('popup');

    console.log(email);
    popup.style.display = "block";

    form.reset();
    return false;
}

function closepopup() {
    let close = document.getElementById('close');

    popup.style.display = "none";
}