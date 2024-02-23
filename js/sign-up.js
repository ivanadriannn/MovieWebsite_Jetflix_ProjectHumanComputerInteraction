const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const member = document.querySelector('.signup');
const footer = document.querySelector('.area-footer');

category.onclick = () =>{
    navbar.classList.toggle('muncul');
    member.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}

function validate(){
    const form = document.forms['signupform'];
    const name = form['fullname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    const password2 = form['password2'].value;
    const agree = form['agreement'].checked;
    const gender = form['gender'].value;
    const genre = document.getElementById("genre").value;
    const birthdate = form['birthdate'].value;

    let message = ''
    var x = 0;
    var y = 0;
    var z = 0;

    // Name
    if(name.length < 8){
        message = "Name must be minimum 8 characters"
        document.getElementById('errorName').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorName').innerHTML = message
    }

    // Email
    if(!email){
        message = "You must enter email"
        document.getElementById('errorEmail').innerHTML = message
        x = x + 1;
    }
    else{
        for(var i=0; i<email.length; i=i+1){
            if(email[i]=='@' && i != 0 && i != (email.length-1)){
                y = y + 1;
            }
        }
        if(y == 1 && (email[email.length-5]!='@' && email[email.length-4]=='.' && email[email.length-3]=='c' && email[email.length-2]=='o' && email[email.length-1]=='m')){
            message = ""
            document.getElementById('errorEmail').innerHTML = message
        }
        else{
            message = "Email must use @ dan .com"
            document.getElementById('errorEmail').innerHTML = message
            x = x + 1;
        }
    }

    // Password
    if(!password){
        message = "You must enter a password";
        document.getElementById('errorPassword').innerHTML = message;
        x = x + 1;
    }else if(!isAlphanumeric(password)){ 
        message = "Password must be alphanumeric";
        document.getElementById('errorPassword').innerHTML = message;
        x = x + 1;
    } 
    else{
        message = "";
        document.getElementById('errorPassword').innerHTML = message;
    }

    // Confirm Password
    if(!password2){
        message = "Please confirm your password";
        document.getElementById('errorConfirm').innerHTML = message;
        x = x + 1;
    } 
    else if(password !== password2){
        message = "Passwords do not match";
        document.getElementById('errorConfirm').innerHTML = message;
        x = x + 1;
    }
    else{
        message = "";
        document.getElementById('errorConfirm').innerHTML = message;
    }

    // Gender
    if(gender != 'male' && gender!='female'){
        message = "Please choose your gender!"
        document.getElementById('errorGender').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorGender').innerHTML = message
    }

    // Genre
    if(genre == ''){
        message = "You must enter your favourite genre"
        document.getElementById('errorGenre').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorGenre').innerHTML = message
    }

    if(!agree){
        message = "You must agree to our terms and conditions"
        document.getElementById('errorAgree').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorAgree').innerHTML = message
    }

    if(x >= 1){
        x = 0;
        return false;
    }

    // Date of Birth
    if(!birthdate){
        message = "Please enter your date of birth";
        document.getElementById('errorBirthdate').innerHTML = message;
        x = x + 1;
    }

    if(x > 0){
        return false;
    }
}

function isAlphanumeric(pw){
    var hasAlpha = false;
    var hasNum = false;
    for(let i = 0; i < pw.length; i++){
      if(!isNaN(pw[i])){
        hasNum = true;
      }
      else{
        hasAlpha = true;
      }
      if(hasAlpha && hasNum){
        return true;
      }
    }
    return false;
  }
  






