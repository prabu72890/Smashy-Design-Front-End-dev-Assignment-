const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector ('#lastName');
const emailAddress = document.querySelector ('#emailAddress');
const address = document.querySelector ('#address');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailAddressVal = emailAddress.value.trim();
    const addressVal = address.value.trim();

    if(firstNameVal===''){
        setError(firstName,'Please enter your first name')
    }
    else{
        setSuccess(firstName)
    }

    if(lastNameVal===''){
        setError(lastName,'Please enter your last name')
    }
    else{
        setSuccess(lastName)
    }

    if(emailAddressVal===''){
        setError(emailAddress,'Please enter your email')
    }
    else if(!validateEmail(emailAddressVal)){
    setError(emailAddress,'Invalid email address')
    }
    else{
        setSuccess(emailAddress)
    }

    if(addressVal===''){
        setError(address,'Please enter Address')
    }
    else{
        setSuccess(address)
    }
}

// 

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}


function setSuccess(element,){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText ='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    
}

/// Email validations------------
const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

