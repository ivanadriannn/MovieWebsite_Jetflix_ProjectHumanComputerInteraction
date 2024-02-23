const navbar = document.querySelector('.navbar ul');
const signin = document.querySelector('.signin');
const footer = document.querySelector('.area-footer');


category.onclick = () =>{
    navbar.classList.toggle('muncul');
    signup.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}

function validate(){
  const form = document.forms['signinform'];
  const email = form['email'].value;
  const password = form['password'].value;

  let message = ''
  var x = 0;
  var y = 0;
  var z = 0;

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

  if(x > 0){
      return false;
  }
}

function isAlphanumeric(pw){
  var hasAlpha = false;
  var hasNum = false;
  for(let i = 0; i < pw.length; i++){
    if (!isNaN(pw[i])){
      hasNum = true;
    }
    else{
      hasAlpha = true;
    }
    if (hasAlpha && hasNum){
      return true;
    }
  }
  return false;
}
