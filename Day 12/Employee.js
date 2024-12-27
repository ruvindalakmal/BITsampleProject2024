window.addEventListener('load', () => {

    refreshEmployeeTable();
    refreshForm();

});

// Refresh Table
const refreshEmployeeTable = () => {
    let employees = [
        {
            id: 1,
            empNo: '24001',
            fullName: 'Ruvinda Lakmal',
            callingName : 'Ruvinda',
            mobileNumber: '0763284859',
            landNumber : '0377896541',
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
            fullName: 'Roshan Lakmal',
            callingName : 'Roshan',
            mobileNumber: '0768578675',
            landNumber: '0371234678',
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
                        {propertyName : 'fullName' , dataType : 'string'},
                        // {propertyName : 'callingName' , dataType : 'string'},
                        {propertyName : 'mobileNumber' , dataType : 'string'},
                        // {propertyName : 'landNumber' , dataType : 'string'},
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

    textFullName.value = dataOb.fullName;
    selectCallingName.value = dataOb.callingName;
    const fullNameValue = textFullName.value;
    let fullNameParts = fullNameValue.split(" ");
    fullNameParts.forEach(name => {
        let option = document.createElement('option');
        // option.value = name;
        option.innerText = name;
        selectCallingName.appendChild(option);
    });

    textNIC.value = dataOb.nic;
    if(dataOb.gender == 'Male'){
        selectGenderMale.checked = true;
    }else {
        selectGenderFemale.checked = true;
    }
    dateOfBirth.value = dataOb.dob;
    textEmail.value = dataOb.email;
    selectCivilStatus.value = dataOb.civilStatus;
    textMobileNumber.value = dataOb.mobileNumber;
    if (dataOb.landNumber == undefined){
        textLandNumber.value = "";
    }else {
        textLandNumber.value = dataOb.landNumber;
    }
    selectDesignation.value = JSON.stringify(dataOb.designation_id);
    selectEmployeeStatus.value = JSON.stringify(dataOb.employeeStatus_id);

    employee = JSON.parse(JSON.stringify(dataOb));
    oldEmployee =  JSON.parse(JSON.stringify(dataOb));

    $("#modalEmployeeForm").modal('show');

}

const employeeDelete = (dataOb , rowIndex) => {
    console.log("Delete" , dataOb , rowIndex);
    let userConfirm = window.confirm("Are you sure to Delete this Employee?  \n" + "Employee Name : " + dataOb.fullName);
    if (userConfirm) {
        let deleteResponse = "OK";
        if (deleteResponse == "OK") {
            window.alert("Successfully Deleted!");
            refreshEmployeeTable();
            refreshForm();
        } else {
            window.alert("Failed to Delete this Employee! \n" + deleteResponse);
        }
        refreshEmployeeTable();
    }
}

const employeePrint = (dataOb , index) => {
    console.log("Print" , dataOb , index);

    tdFullName.innerText = dataOb.fullName;
    tdCallingName.innerText = dataOb.callingName;
    tdNic.innerText = dataOb.nic;
    tdGender.innerText = dataOb.gender;
    tdDob.innerText = dataOb.dob;
    tdEmail.innerText = dataOb.email;
    tdCivilStatus.innerText = dataOb.civilStatus;
    tdMobileNumber.innerText = dataOb.mobileNumber;
    tdLandNumber.innerText = dataOb.landNumber;
    tdDesignation.innerText = dataOb.designation_id.name;
    tdEmployeeStatus.innerText = dataOb.employeeStatus_id.status;

    $("#printModal").modal('show');

}

const buttonPrintRow = () => {
    let newWindow = window.open();

    let printView = "<head><title>BIT Project 2024 : D-12 Practical</title>\<link rel='stylesheet' href='../resources/bootstrap-5.0.2-dist/css/bootstrap.css'></head>" + "<body>" + tableEmployeePrint.outerHTML + "</body>";
    newWindow.document.write(printView);

    setTimeout(() => {
       newWindow.stop();
       newWindow.print();
       newWindow.close();
    } , 500);

}

const checkFormErrors = () => {
    let errors = "";

    if(employee.fullName == ""){
        errors += "Please Enter Valid Full Name ...! \n";
    }
    if(employee.callingName == ""){
        errors += "Please Select Valid Calling Name ...! \n";
    }
    if(employee.nic == ""){
        errors += "Please Enter Valid NIC ...! \n";
    }
    if(employee.gender == ""){
        errors += 'Please Enter Valid Gender ...! \n';
    }
    if(employee.dob == ""){
        errors += 'Please Select Valid Date of Birth ...! \n';
    }
    if(employee.email == ""){
        errors += 'Please Enter Valid Email Address ...! \n';
    }
    if(employee.civilStatus == ""){
        errors += 'Please Select Valid Civil Status ...! \n';
    }
    if(employee.mobileNumber == ""){
        errors += 'Please Enter Valid Mobile Number ...! \n';
    }
    if(employee.landNumber == ""){
        errors += 'Please Enter Valid Land Number ...! \n';
    }
    if(employee.designation_id == ""){
        errors += 'Please Enter Valid Designation ...! \n';
    }
    if(employee.employeeStatus_id == ""){
        errors += 'Please Select Employee Status ...! \n';
    }
    return errors;
}

const buttonEmployeeSubmit = () =>{
    console.log(employee);
    let errors = checkFormErrors();
    if(errors == ""){
        let userConfirm = window.confirm("Are you sure to Add this Employee?  \n" + "Employee Name : " + employee.fullName);
        if(userConfirm){
            let postResponse = "OK";
            if(postResponse == "OK"){
                window.alert("Successfully Added!");
                refreshEmployeeTable();
                refreshForm();
                $("#modalEmployeeForm").modal('hide');
            }else {
                window.alert("Failed to submit this Employee! \n" + postResponse);
            }
        }
    }else {
        window.alert("Form has Following Errors ... \n" + errors);
    }

    refreshEmployeeTable();
}

const checkFormUpdates = () =>{

    let updates = "";

    if (employee != null && oldEmployee != null){
        if (employee.fullName != oldEmployee.fullName){
            updates += "Full name has been updated! \n";
        }
        if (employee.callingName != oldEmployee.callingName){
            updates += "Calling name has been updated! \n";
        }
        if (employee.nic != oldEmployee.nic){
            updates += "NIC has been updated! \n";
        }
        if (employee.gender != oldEmployee.gender){
            updates += "Gender has been updated! \n";
        }
        if (employee.dob != oldEmployee.dob){
            updates += "Date of Birth has been updated! \n";
        }
        if (employee.email != oldEmployee.email){
            updates += "Email has been updated! \n";
        }
        if (employee.civilStatus != oldEmployee.civilStatus){
            updates += "Civil Status has been updated! \n";
        }
        if (employee.mobileNumber != oldEmployee.mobileNumber){
            updates += "Mobile Number has been updated! \n";
        }
        if (employee.landNumber != oldEmployee.landNumber){
            updates += "Land Number has been updated! \n";
        }
        if (employee.designation_id.name != oldEmployee.designation_id.name){
            updates += "Designation has been updated! \n";
        }
        if (employee.employeeStatus_id.status != oldEmployee.employeeStatus_id.status){
            updates += "Empoyee Status has been updated! \n";
        }
    }

    return updates;
}

const buttonEmployeeUpdate = () =>{
    let errors = checkFormErrors();
    if(errors == ""){
        let updates = checkFormUpdates();
        if(updates == ""){
            window.alert("Nothing To Updated!   \n");
        }else{
            let userConfirm = window.confirm("Are you sure to update following Updates \n" + updates);
            if (userConfirm){
                let putResponse = "OK";
                if(putResponse === "OK"){
                    window.alert("Successfully Updated!");
                    refreshEmployeeTable();
                    refreshForm();
                    $("#modalEmployeeForm").modal('hide');
                }else {
                    window.alert("Failed to update this Employee! \n" + putResponse);
                }
            }
        }
    }else {
        window.alert("You Have this Following Errors ... \n" + errors);
    }
}

// const buttonEmployeeDelete = (dataOb , rowIndex) => {}

    const fullNameValidator = (textFullName, object, property) => {
        const fullNameValue = textFullName.value;
        const fullNameReg = new RegExp("^([A-Z][a-z]{1,20}[\\s])+([A-Z][a-z]{2,20})$");
        const ob = window[object];
        if (fullNameValue !== "") {
            if (fullNameReg.test(fullNameValue)) {
                ob[property] = textFullName.value;
                textFullName.classList.add('is-valid');
                textFullName.classList.remove('is-invalid');

                let fullNameParts = fullNameValue.split(" ");
                selectCallingName.innerHTML = "";
                let option = document.createElement('option');
                option.innerText = 'Select Calling Name';
                option.selected = 'selected';
                option.disabled = 'disabled';
                selectCallingName.appendChild(option);

                 ob[property] = selectCallingName.value;
                fullNameParts.forEach(name => {
                    let option = document.createElement('option');
                    // option.value = name;
                    option.innerText = name;
                    selectCallingName.appendChild(option);
                });

            } else {
                textFullName.classList.remove('is-valid');
                textFullName.classList.add('is-invalid');
                ob[property] = null;
            }
        } else {
            textFullName.classList.remove('is-valid');
            textFullName.classList.add('is-invalid');
            ob[property] = null;
        }
    }

    const callingNameValidator = (callingNameElement, object, property) => {
        const callingNameValue = callingNameElement.value;
        const fullNameValue = textFullName.value;
        let fullNameParts = fullNameValue.split(" ");
        const ob = window[object];

        if (callingNameValue !== "") {
            let extIndex = fullNameParts.map(fullNamePart => fullNamePart).indexOf(callingNameValue);
            if (extIndex !== -1) {
                ob[property] = callingNameValue;
                callingNameElement.classList.add('is-valid');
                callingNameElement.classList.remove('is-invalid');
            } else {
                ob[property] = null;
                callingNameElement.classList.remove('is-valid');
                callingNameElement.classList.add('is-invalid');

            }
        }
    }

    const nicValidator = (nicElement, object, property) => {
        const nicValue = nicElement.value;
        const nicReg = new RegExp("^(([0-9]{9}[VvXx])|([0-9]{12}))$");
        const ob = window[object];

        if (nicValue !== "") {
            if (nicReg.test(nicValue)) {
                ob[property] = nicValue;
                nicElement.classList.add('is-valid');
                nicElement.classList.remove('is-invalid');
            } else {
                ob[property] = null;
                nicElement.classList.add('is-invalid');
                nicElement.classList.remove('is-valid');
            }
        } else {
            ob[property] = null;
            nicElement.classList.remove('is-valid');
            nicElement.classList.add('is-invalid');
        }
    }

    const dateValidator = (dateElement, object, property) => {
        const ob = window[object];
        ob[property] = dateElement.value;
        dateElement.classList.add('is-valid');
    }

    const emailValidator = (emailElement, object, property) => {
        const emailValue = emailElement.value;
        const emailReg = new RegExp("^[a-zA-Z0-9._%+-]{5,50}@gmail\\.com$");
        const ob = window[object];
        if (emailValue !== "") {
            if (emailReg.test(emailValue)) {
                ob[property] = emailValue;
                emailElement.classList.add('is-valid');
                emailElement.classList.remove('is-invalid');
            } else {
                ob[property] = null;
                emailElement.classList.add('is-invalid');
                emailElement.classList.remove('is-valid');
            }
        } else {
            if (emailElement.required) {
                employee.email = null;
                emailElement.classList.add('is-invalid');
            }
        }
    }

    const civilStatusValidator = (civilStatusElement, object, property) => {
        const civilStatusValue = civilStatusElement.value;
        const ob = window[object];
        if (civilStatusValue !== "") {
            ob[property] = civilStatusValue;
            civilStatusElement.classList.add('is-valid');
            civilStatusElement.classList.remove('is-invalid');
        } else {
            ob[property] = null;
            civilStatusElement.classList.add('is-invalid');
            civilStatusElement.classList.remove('is-valid');
        }
    }

    const mobileNumberValidator = (mobileElement, object, property) => {
        const mobileNumberValue = mobileElement.value;
        const ob = window[object];
        const mobileReg = new RegExp("^[0][7][01245678][0-9]{7}$");

        if (mobileReg.test(mobileNumberValue)) {
            ob[property] = mobileNumberValue;
            mobileElement.classList.add('is-valid');
            mobileElement.classList.remove('is-invalid');
        } else {
            ob[property] = null;
            mobileElement.classList.add('is-invalid');
            mobileElement.classList.remove('is-valid');
        }
    }

    const landNumberValidator = (landElement, object, property) => {
        const landValue = landElement.value;
        const landReg = new RegExp("^[0][12345689][0-9]{8}$");
        const ob = window[object];
        if (landReg.test(landValue)) {
            ob[property] = landValue;
            landElement.classList.add('is-valid');
            landElement.classList.remove('is-invalid');
        } else {
            ob[property] = null;
            landElement.classList.add('is-invalid');
            landElement.classList.remove('is-valid');
        }
    }

    const selectValidator = (selectElement, object, property) => {
        const selectValue = selectElement.value;
        const ob = window[object];
        if (selectValue !== "") {
            ob[property] = JSON.parse(selectValue);
            selectElement.classList.add('is-valid');
            selectElement.classList.remove('is-invalid');
        } else {
            ob[property] = null;
            selectElement.classList.remove('is-valid');
            selectElement.classList.add('is-invalid');
        }
    }

    const refreshForm = () => {
        employee = new Object();

        formEmployee.reset();

        setDefault([textFullName,selectCallingName,textNIC,selectGenderMale,selectGenderFemale,dateOfBirth,textEmail,selectCivilStatus,textMobileNumber,textLandNumber,selectDesignation,selectEmployeeStatus]);

        let designations = [{id: 1, name: "Manager"}, {id: 2, name: "AS - Manager"}, {id: 3, name: "Cashier"}];
        let employeeStatus = [{id: 1, status: 'Working'}, {id: 2, status: 'Resign'}, {id: 3, status: 'Removed'}];

        fillDataIntoSelect(selectDesignation, "Please Select Designation", designations, 'name');
        fillDataIntoSelect(selectEmployeeStatus, "Please Select Employee Status", employeeStatus, 'status');

    }

