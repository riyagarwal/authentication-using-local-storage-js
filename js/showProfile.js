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
  