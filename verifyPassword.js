const verifyPassword = () => {
    if(localStorage.getItem('password').length < 8){
        document.getElementById('invalid_pwd').style.display = 'block'
        return false
    }
    else {
        document.getElementById('invalid_pwd').style.display = 'none';
        return true
    }
}