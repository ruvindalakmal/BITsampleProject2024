
const mobileValidator = (mobileElement) => {
    let mobileValue= mobileElement.value;
    const mobileReg = new RegExp("^[0][7][01245678][0-9]{7}$");

    if (mobileReg.test(mobileValue)){
        mobileElement.classList.add("is-valid");
        mobileElement.classList.remove("is-invalid");
    }else {
        mobileElement.classList.remove("is-valid");
        mobileElement.classList.add("is-invalid");
    }
}
const usernameValidator = (usernameElement) => {
    let userNameValue= usernameElement.value;
    const userNameReg = new RegExp("^[A-Z][a-z]{1,20}$");

    if (userNameReg.test(userNameValue)){
        usernameElement.classList.add("is-valid");
        usernameElement.classList.remove("is-invalid");
    }else {
        usernameElement.classList.remove("is-valid");
        usernameElement.classList.add("is-invalid");
    }
}