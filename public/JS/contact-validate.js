function validateForm() {
    var isValid = true;
    var isValidName = true;
    var isValidEmail = true;
    var isValidMessage = true;

    var txtName = document.forms['contact-form']['name'];
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
    var txtEmail = document.forms['contact-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = ' ';
    }

    var txtMessage = document.forms['contact-form']['message'];
    var msgMessage= txtMessage.nextElementSibling;
    if (txtMessage.value == null || txtMessage.value.length ==0) {
        msgMessage.classList.remove('msg-success');
        msgMessage.classList.add('msg-error');
        msgMessage.innerHTML = 'Message is required!';
        isValidMessage = false;
    } else {
        msgMessage.classList.remove('msg-error');
        msgMessage.classList.add('msg-success');
        msgMessage.innerHTML = ' ';
    }
    isValid = isValidName && isValidMessage && isValidEmail;
    return isValid;
}
var btnSubmit = document.forms['contact-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if(validateForm()){
        alert('Send Message Success');
        doMessage();
        document.getElementsByClassName('contact-form').innerHTML='';
    }else{
        return false;
    }
}
function doMessage() {
    var name = document.forms['contact-form']['name'].value;
    var email = document.forms['contact-form']['email'].value;
    var message = document.forms['contact-form']['message'].value;

    htmlContent += name;
    htmlContent += email;
    htmlContent += message;

    document.getElementById('contact-validate').innerHTML += htmlContent;
}
