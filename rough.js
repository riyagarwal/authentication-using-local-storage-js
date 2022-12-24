const saveValues = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;
  const data = {
    name: name,
    email: email,
    password: password,
    confirm_password: confirm_password,
  };
  signUp(data);
};

function signUp(data) {
  if (isFilled(data) && verifyPassword(data)) {
    // document.getElementById('success').style.display = 'block'
    
    document.getElementById("signUp").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById('form').reset()
    showProfile(data);
  }

}

const isFilled = (data) => {
  if (!data.name || !data.email || !data.password || !data.confirm_password) {
    document.getElementById("missing_fields").style.display = "block";
    return false;
  } else {
    document.getElementById("missing_fields").style.display = "none";
    return true;
  }
};

const verifyPassword = (data) => {
  if (data.password !== data.confirm_password) {
    document.getElementById("invalid_pwd").style.display = "block";
    return false;
  } else {
    document.getElementById("invalid_pwd").style.display = "none";
    return true;
  }
};

const showProfile =(data) => {
    document.getElementById('showName').textContent = `Full Name: ${data.name}`
    document.getElementById('showEmail').textContent = `Email: ${data.email}`
    document.getElementById('showPassword').textContent = `Password: ${data.password}`
}

const logOut = () => {
    document.getElementById("signUp").style.display = "block";
    document.getElementById("profile").style.display = "none";
}
