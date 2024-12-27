window.addEventListener('load', () => {

    employee = new Object();

    refreshEmployeeTable();
    let designations = [{id:1 , name:"Manager"} , {id:2 , name:"AS - Manager"} , {id:3 , name:"Cashier"} ];
    let employeeStatus = [{id : 1 , status: 'Working'} , {id : 2 , status: 'Resign'} , {id : 3 , status: 'Removed'}];

    fillDataIntoSelect(selectDesignation , "Please Select Designation", designations , 'name');
    fillDataIntoSelect(selectEmployeeStatus , "Please Select Employee Status", employeeStatus , 'status');

    textFullName.value = "";
    textCallingName.value = "";
    textNIC.value = "";
    dateOfBirth.value = "";
    textEmail.value = "";
    selectCivilStatus.value = "";
    textMobieNumber.value = "";
    textLandNumber.value = "";

});

// Refresh Table
const refreshEmployeeTable = () => {
    let employees = [
        {
            id: 1,
            empNo: '24001',
            name: 'Ruvinda Lakmal',
            mobileNumber: '0763284859',
            email: 'ruvindapersonal@gmail.com',
            nic: '200034304252',
            gender: 'Male',
            dob: '2000-12-08',
            civilStatus: 'Single',
            designation_id: {id: 1, name: 'Manager'},
            employeeStatus_id: {id: 1, status: 'Working'}
        },
        {
            id: 1,
            empNo: '24002',
            name: 'Roshan Lakmal',
            mobileNumber: '0768578675',
            email: 'roshanLakmal@gmail.com',
            nic: '922951187v',
            gender: 'Male',
            dob: '1992-10-21',
            civilStatus: 'Married',
            designation_id: {id: 1, name: 'AS - Manager'},
            employeeStatus_id: {id: 1, status: 'Resign'}
        }
    ];

    let propertyList = [
                        {propertyName : 'empNo' , dataType : 'string'},
                        {propertyName : 'name' , dataType : 'string'},
                        {propertyName : 'mobileNumber' , dataType : 'string'},
                        {propertyName : 'email' , dataType : 'string'},
                        {propertyName : 'nic' , dataType : 'string'},
                        {propertyName : 'gender' , dataType : 'string'},
                        {propertyName : 'dob' , dataType : 'string'},
                        {propertyName : 'civilStatus' , dataType : 'string'},
                        {propertyName : getDesignation , dataType : 'function'},
                        {propertyName : getEmployeeStatus , dataType : 'function'}
    ];

    fillDataIntoTable(tableEmployeeBody , employees , propertyList , employeeEdit , employeeDelete , employeePrint);
}


const getDesignation = (dataOb) => {
    return dataOb.designation_id.name;
}
const getEmployeeStatus = (dataOb) => {
    return dataOb.employeeStatus_id.status;
}

const employeeEdit = (dataOb , index) => {
    console.log("Edit" , dataOb , index);
    // tableEmployeeBody.children[index].style.backgroundColor = 'orange';
}
const employeeDelete = (dataOb , index) => {
    console.log("Delete" , dataOb , index);
}
const employeePrint = (dataOb , index) => {
    console.log("Print" , dataOb , index);
}

const buttonEmployeeSubmit = () =>{
    console.log(employee);
    refreshEmployeeTable();
}

const buttonEmployeeUpdate = () =>{
    refreshEmployeeTable();
}

const buttonEmployeeDelete = () =>{
    refreshEmployeeTable();
}

const fullNameValidator =  (textFullName , object , property) => {
    const fullNameValue = textFullName.value;
    const fullNameReg = new RegExp("^([A-Z][a-z]{1,20}[\\s])+([A-Z][a-z]{2,20})$");
    const ob = window[object];
    if(fullNameValue !== ""){
        if(fullNameReg.test(fullNameValue)){
            ob[property] = textFullName.value;
            textFullName.classList.add('is-valid');
            textFullName.classList.remove('is-invalid');

            let fullNameParts = fullNameValue.split(" ");
            textCallingName.innerHTML = "";
            let option = document.createElement('option');
            option.innerText = 'Select Calling Name';
            option.selected = 'selected';
            option.disabled = 'disabled';
            textCallingName.appendChild(option);

            // ob[property] = textCallingName.value;
            fullNameParts.forEach(name => {
                let option = document.createElement('option');
                option.value = name;
                option.innerText = name;
                textCallingName.appendChild(option);
            });

        }else {
            textFullName.classList.remove('is-valid');
            textFullName.classList.add('is-invalid');
            ob[property] = null;
        }
    }else {
        textFullName.classList.remove('is-valid');
        textFullName.classList.add('is-invalid');
        ob[property] = null;
    }
}

const callingNameValidator = (callingNameElement , object , property) => {
    const callingNameValue = callingNameElement.value;
    const fullNameValue = textFullName.value;
    let fullNameParts = fullNameValue.split(" ");
    const ob = window[object];

    if(callingNameValue !== "" ){
        let extIndex = fullNameParts.map(fullNamePart => fullNamePart).indexOf(callingNameValue);
        if(extIndex !== -1){
            ob[property] = callingNameValue;
            callingNameElement.classList.add('is-valid');
            callingNameElement.classList.remove('is-invalid');
        }
        else {
            ob[property] = null;
            callingNameElement.classList.remove('is-valid');
            callingNameElement.classList.add('is-invalid');

        }
    }
}

const nicValidator = (nicElement , object , property) => {
   const nicValue = nicElement.value;
   const nicReg = new RegExp("^(([0-9]{9}[VvXx])|([0-9]{12}))$");
   const ob = window[object];

   if (nicValue !== ""){
        if(nicReg.test(nicValue)){
            ob[property] = nicValue;
            nicElement.classList.add('is-valid');
            nicElement.classList.remove('is-invalid');
        }else {
            ob[property] = null;
            nicElement.classList.add('is-invalid');
            nicElement.classList.remove('is-valid');
        }
   }else {
       ob[property] = null;
       nicElement.classList.remove('is-valid');
       nicElement.classList.add('is-invalid');
   }
}

const dateValidator = (dateElement , object , property) => {
    const ob = window[object];
    ob[property] = dateElement.value;
    dateElement.classList.add('is-valid');
}

const emailValidator = (emailElement , object , property) => {
    const emailValue = emailElement.value;
    const emailReg = new RegExp("^[a-zA-Z0-9._%+-]{5,50}@gmail\\.com$");
    const ob = window[object];
    if(emailValue !== ""){
        if(emailReg.test(emailValue)){
            ob[property] = emailValue;
            emailElement.classList.add('is-valid');
            emailElement.classList.remove('is-invalid');
        }else {
            ob[property] = null;
            emailElement.classList.add('is-invalid');
            emailElement.classList.remove('is-valid');
        }
    }else {
        if (emailElement.required){
            employee.email = null;
            emailElement.classList.add('is-invalid');
        }
    }
}

const civilStatusValidator = (civilStatusElement , object , property) => {
    const civilStatusValue = civilStatusElement.value;
    const ob = window[object];
    if(civilStatusValue !== ""){
        ob[property] = civilStatusValue;
        civilStatusElement.classList.add('is-valid');
        civilStatusElement.classList.remove('is-invalid');
    }else {
        ob[property] = null;
        civilStatusElement.classList.add('is-invalid');
        civilStatusElement.classList.remove('is-valid');
    }
}

const mobileNumberValidator = (mobileElement , object , property) => {
    const mobileNumberValue = mobileElement.value;
    const ob = window[object];
    const mobileReg = new RegExp("^[0][7][01245678][0-9]{7}$");

    if(mobileReg.test(mobileNumberValue)){
        ob[property] = mobileNumberValue;
        mobileElement.classList.add('is-valid');
        mobileElement.classList.remove('is-invalid');
    }else {
        ob[property] = null;
        mobileElement.classList.add('is-invalid');
        mobileElement.classList.remove('is-valid');
    }
}

const landNumberValidator = (landElement , object , property) => {
    const landValue = landElement.value;
    const landReg = new RegExp("^[0][12345689][0-9]{8}$");
    const ob = window[object];
    if(landReg.test(landValue)){
        ob[property] = landValue;
        landElement.classList.add('is-valid');
        landElement.classList.remove('is-invalid');
    } else {
        ob[property] = null;
        landElement.classList.add('is-invalid');
        landElement.classList.remove('is-valid');
    }
}

const selectValidator = (selectElement , object , property) => {
    const selectValue = selectElement.value;
    const ob = window[object];
    if(selectValue !== ""){
        ob[property] = JSON.parse(selectValue);
        selectElement.classList.add('is-valid');
        selectElement.classList.remove('is-invalid');
    }else {
        ob[property] = null;
        selectElement.classList.remove('is-valid');
        selectElement.classList.add('is-invalid');
    }
}
