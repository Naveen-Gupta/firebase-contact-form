 // Initialize Firebase
 var config = {
    apiKey: "my app key",
    authDomain: "my app domain",
    databaseURL: "***********************",
    projectId: "simple-registration-form",
    storageBucket: "****************************",
    messagingSenderId: "**************************"
  };
  firebase.initializeApp(config);

  var usersRef = firebase.database().ref('users');

// form submit event
document.getElementById('contactForm').addEventListener('submit', submitContactForm);

//grab all form values
function submitContactForm(evt){
    evt.preventDefault();
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');
    saveUser(name, company, email, phone, message);    
}//end submitContactForm

//return value by providing id of element
function getInputVal(id){
    return document.getElementById(id).value;
}//end getInputVal

function saveUser(name, company, email, phone, message){
    let newUserRef = usersRef.push();
    newUserRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message  
    });
}//end saveUser