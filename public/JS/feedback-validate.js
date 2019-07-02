function validateForm() {
    var isValid = true;
    var isValidName = true;
    var isValidEmail = true;
    var isValidPhone = true;
    var isValidMessage = true;

    var txtName = document.forms['feedback-form']['name'];
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
    var txtEmail = document.forms['feedback-form']['email'];
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
    var txtPhone = document.forms['feedback-form']['phone'];
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

    var txtMessage = document.forms['feedback-form']['message'];
    var msgMessage= txtMessage.nextElementSibling;
    if (txtMessage.value == null || txtMessage.value.length ==0) {
        msgMessage.classList.remove('msg-success');
        msgMessage.classList.add('msg-error');
        msgMessage.innerHTML = 'Comment is required!';
        isValidMessage = false;
    } else {
        msgMessage.classList.remove('msg-error');
        msgMessage.classList.add('msg-success');
        msgMessage.innerHTML = ' ';
    }
    isValid = isValidName && isValidMessage && isValidEmail && isValidPhone ;
    return isValid;
}
var btnSubmit = document.forms['feedback-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if(validateForm()){
        alert('Send Feedback Success');
        doMessage();
        document.getElementsByClassName('feedback-form').innerHTML='';
    }else{
        return false;
    }
}
function doMessage() {
    var name = document.forms['feedback-form']['name'].value;
    var email = document.forms['feedback-form']['email'].value;
    var message = document.forms['feedback-form']['message'].value;
    var phone = document.forms['feedback-form']['phone'].value;

    htmlContent += name;
    htmlContent += email;
    htmlContent += message;
    htmlContent += phone;

    document.getElementById('feedback-validate').innerHTML += htmlContent;
}
