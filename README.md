# Smashy Design Front-End dev Assignment, Form Validation Project

The web project demonstrates form validation using HTML, Sass (SCSS), and JavaScript for the Superstar method and HTML, CSS, and JavaScript for the Starter method.

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
Method: Superstar
- HTML
- Sass (SCSS)
- JavaScript
  
Method: Starter
- HTML
- CSS
- JavaScript

## Features

- Form validation for user input fields.
- Error messages for invalid input.
- Responsive design for various screen sizes.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository.
2. Open the folder `Method Superstar HTML SASS JavaScript` or `Method Starter HTML CSS JavaScript`.
3. Open `index_form.html` in your web browser.

## Usage
    
1. Fill out the form fields.
2. Click the "Submit" button.
3. See real-time validation feedback based on your input.

## Js Code

```javascript
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
}:;

```

## Contributing

Contributions are welcome. Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

## Contact Information

For questions or inquiries, please contact R. Praburaja at rpraburaj7@gmail.com.

## Author

- R Praburaja
- [GitHub](https://github.com/prabu72890)
- [LinkedIn](https://www.linkedin.com/in/prabu-raj-07/)

## References

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Sass Giude](https://sass-lang.com/guide/)


 
