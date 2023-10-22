const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector ('#lastName');
const emailAddress = document.querySelector ('#emailAddress');
const address = document.querySelector ('#address');

form.addEventListener('submit',(e)=>{
    
    if (!validateInputs()){
        e.preventDefault();
        
    };
})

// Validating every signle input value ---------------------
function validateInputs(){
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailAddressVal = emailAddress.value.trim();
    const addressVal = address.value.trim();
    let success = true;

    if(firstNameVal===''){
        success = false;
        setError(firstName,'Please enter your first name')
    }
    else{
        setSuccess(firstName)
    }

    if(lastNameVal===''){
        success = false;
        setError(lastName,'Please enter your last name')
    }
    else{
        setSuccess(lastName)
    }

    if(emailAddressVal===''){
        success = false;
        setError(emailAddress,'Please enter your email')
    }
    else if(!validateEmail(emailAddressVal)){
        success = false;
    setError(emailAddress,'Invalid email address')
    }
    else{
        setSuccess(emailAddress)
    }

    if(addressVal===''){
        success = false;
        setError(address,'Please enter Address')
    }
    else{
        setSuccess(address)
    }
    return success;
}

// setup of errors and Success filed -------------

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error-note');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}


function setSuccess(element,){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error-note');

    errorElement.innerText ='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    
}

/// Email validations------------------------------------
const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

