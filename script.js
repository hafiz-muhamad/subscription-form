document.querySelector(".subscribe").addEventListener("click", function() {
    let email = document.querySelector("#email");
    let invalid = document.querySelector(".invalid");
    let success = document.querySelector(".success");
    let alert = document.querySelector(".email-input");

    if(email.validity.valid == false) {
        invalid.checked = true;
    }
    else {
        invalid.checked = false;
        success.checked = true;

        alert.innerHTML = `${email.value}<br>`;
    }
})

document.querySelector(".dismiss").addEventListener("click", function() {
    let success = document.querySelector(".success");
    let email = document.querySelector("#email");

    success.checked = false;
    email.value = ""
})