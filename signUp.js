const saveValues = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("confirm_password", confirm_password);
  signUp();
};

function signUp() {
  if (isFilled() && verifyPassword() && passwordMatch()) {
    // document.getElementById('success').style.display = 'block'
    console.log('run successfully');
    document.getElementById("signUp").style.display = "none";
    document.getElementById("profile").style.display = "block";
    localStorage.setItem("accessToken", getAccessToken());
    document.getElementById("form").reset();
    showProfile();
  } else {
    localStorage.clear();
  }
}

