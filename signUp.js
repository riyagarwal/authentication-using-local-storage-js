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
  if (isFilled() && verifyPassword()) {
    // document.getElementById('success').style.display = 'block'

    document.getElementById("signUp").style.display = "none";
    document.getElementById("profile").style.display = "block";
    localStorage.setItem("accessToken", getAccessToken());
    document.getElementById("form").reset();
    showProfile();
  } else {
    localStorage.clear();
  }
}

// Function to check whether all fields are filled or not
// const isFilled = () => {
//   if (
//     !localStorage.getItem("name") ||
//     !localStorage.getItem("email") ||
//     !localStorage.getItem("password") ||
//     !localStorage.getItem("confirm_password")
//   ) {
//     document.getElementById("missing_fields").style.display = "block";
//     return false;
//   } else {
//     document.getElementById("missing_fields").style.display = "none";
//     return true;
//   }
// };

// function to verify password
// const verifyPassword = () => {
//   if (
//     localStorage.getItem("password") !==
//     localStorage.getItem("confirm_password")
//   ) {
//     document.getElementById("invalid_pwd").style.display = "block";
//     return false;
//   } else {
//     document.getElementById("invalid_pwd").style.display = "none";
//     return true;
//   }
// };

// function to generate access token
const getAccessToken = () => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const showProfile = () => {
  document.getElementById(
    "showName"
  ).textContent = `Full Name: ${localStorage.getItem("name")}`;
  document.getElementById(
    "showEmail"
  ).textContent = `Email: ${localStorage.getItem("email")}`;
  document.getElementById(
    "showPassword"
  ).textContent = `Password: ${localStorage.getItem("password")}`;
};

const logOut = () => {
  localStorage.clear();
  document.getElementById("signUp").style.display = "block";
  document.getElementById("profile").style.display = "none";
};
