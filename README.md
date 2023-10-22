# Smashy Design Front-End dev Assignment, Form Validation Project

A simple web project that demonstrates form validation using HTML, Sass (SCSS), and JavaScript.

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [js Code ](#js-code)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact Information](#contact-information)
- [Author](#author)
- [References](#references)

## Demo
This demo link may experience slower loading times due to the large file size.
[Live Demo]([https://your-demo-link-here](https://prabu07.neocities.org/praburaja_7/index_form))

## Screenshots

![image](https://github.com/prabu72890/Smashy-Design-Front-End-dev-Assignment-/assets/58351074/496d1c64-4645-4e63-a4c5-2884711eff2d)

![image](https://github.com/prabu72890/Smashy-Design-Front-End-dev-Assignment-/assets/58351074/7fd9471f-d039-4cb6-afdf-7ac0b2db98f4)


## Technologies Used

- HTML
- Sass (SCSS)
- JavaScript

## Features

- Form validation for user input fields.
- Error messages for invalid input.
- Responsive design for various screen sizes.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository.
2. Open `index_form.html` in your web browser.

## Usage

1. Fill out the form fields.
2. Click the "Submit" button.
3. See real-time validation feedback based on your input.

## Js Code

```javascript
// JavaScript code for form validation
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


## Contributing
Contributions are welcome. Feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License.


## Contact Information
For questions or inquiries, please contact rpraburaj7@gmail.com

## Author
R.Praburaja
GitHub
LinkedIn

## References
MDN Web Docs
W3Schools
