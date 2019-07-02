function validateForm() {
    var isValid = true;
    var isValidName = true;
    var isValidPhone = true;

    var txtName = document.forms['signup-form']['fullname'];
    var msgName = txtName.nextElementSibling;
    if (txtName.value == null || txtName.value.length == 0) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Name is required!';
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = ' ';
    }
    var txtPhone = document.forms['signup-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is required!';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = ' ';
    }
    isValid = isValidName && isValidPhone;
    return isValid;
}
var btnSubmit = document.forms['signup-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if(validateForm()){
        alert('Sign Up Success');
        doSignup();
        document.getElementsByClassName('signup-form').innerHTML='';
    }else{
        return false;
    }
}
function doSignup() {
    var name = document.forms['signup-form']['fullname'].value;
    var phone = document.forms['signup-form']['phone'].value;

    htmlContent += name;
    htmlContent += phone;


    document.getElementById('signup-form').innerHTML += htmlContent;
}
