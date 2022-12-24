const passwordMatch = () => {
  console.log('inside password Match');
    if (
      localStorage.getItem("password") !== localStorage.getItem("confirm_password")
    ) {
      document.getElementById("invalid_pwd").style.display = "block";
      return false;
    } else {
      document.getElementById("invalid_pwd").style.display = "none";
      return true;
    }
  };
