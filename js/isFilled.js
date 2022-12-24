const isFilled = () => {
    if (
      !localStorage.getItem("name") ||
      !localStorage.getItem("email") ||
      !localStorage.getItem("password") ||
      !localStorage.getItem("confirm_password")
    ) {
      document.getElementById("missing_fields").style.display = "block";
      return false;
    } else {
      document.getElementById("missing_fields").style.display = "none";
      return true;
    }
  };