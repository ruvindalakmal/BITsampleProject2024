
window.addEventListener('load', ()=>{
    fillDataIntoSelect(selectDesignation , "Please Select Designation", designations , 'name');
    fillDataIntoSelect(selectEmployeeStatus , "Please Select Employee Status", employeeStatus , 'status');


});

let designations = [{id:1 , name:"Manager"} , {id:2 , name:"AS - Manager"} , {id:3 , name:"Cashier"} ];
let employeeStatus = [{id : 1 , status: 'Working'} , {id : 2 , status: 'Resign'} , {id : 3 , status: 'Removed'}];



const fillDataIntoSelect = (parentId , message , dataList , displayProperty) => {
    parentId.innerHTML = "";

    let option = document.createElement('option');
    option.value = "";
    option.innerText = message;
    option.selected = 'selected';
    option.disabled = 'disabled';

    parentId.appendChild(option);

    dataList.forEach(dataOb => {
        let option = document.createElement('option');
        option.value = JSON.stringify(dataOb);
        option.innerText = dataOb[displayProperty];

        parentId.appendChild(option);
    });
}

let employees = [
    {id : 1 , empNo : '24001' , name : 'Ruvinda Lakmal' , mobileNumber : '0763284859' , nic : '200034304252' , gender : 'Male' ,dob : '2000-12-08' , civilStatus : 'Single' , designation_id : {id : 1 ,name : 'Manager'} , employeeStatus_id : {id : 1 ,status : 'Working'}},
    {id : 1 , empNo : '24002' , name : 'Roshan Lakmal' , mobileNumber : '0768578675' , nic : '922951187v' , gender : 'Male' ,dob : '1992-10-21' , civilStatus : 'Married' , designation_id : {id : 1 ,name : 'AS - Manager'} , employeeStatus_id : {id : 1 ,status : 'Resign'}}
];

tableEmployeeBody.innerHTML = '';

employees.forEach((dataOb , index) => {
    let tr = document.createElement('tr');

    let tdId = document.createElement("td");
    tdId.innerText = parseInt(index) + 1;
    tr.appendChild(tdId);

    let tdEmpNo = document.createElement("td");
    tdEmpNo.innerText = dataOb.empNo;
    tr.appendChild(tdEmpNo);

    let tdName = document.createElement("td");
    tdName.innerText = dataOb.name;
    tr.appendChild(tdName);

    let tdMobileNumber = document.createElement("td");
    tdMobileNumber.innerText = dataOb.mobileNumber;
    tr.appendChild(tdMobileNumber);

    let tdNic = document.createElement("td");
    tdNic.innerText = dataOb.nic;
    tr.appendChild(tdNic);

    let tdGender = document.createElement("td");
    tdGender.innerText = dataOb.gender;
    tr.appendChild(tdGender);

    let tdDob = document.createElement("td");
    tdDob.innerText = dataOb.dob;
    tr.appendChild(tdDob);

    let tdCivilStatus = document.createElement("td");
    tdCivilStatus.innerText = dataOb.civilStatus;
    tr.appendChild(tdCivilStatus);

    let tdDesignation = document.createElement("td");
    tdDesignation.innerText = dataOb.designation_id.name;
    tr.appendChild(tdDesignation);

    let tdEmployeeStatus = document.createElement("td");
    tdEmployeeStatus.innerText = dataOb.employeeStatus_id.status;
    tr.appendChild(tdEmployeeStatus);

    let tdButtons = document.createElement("td");

    let buttonEdit = document.createElement("button");
    buttonEdit.innerText = "Edit";
    buttonEdit.className = "btn btn-outline-secondary btn-sm me-1";
    tdButtons.appendChild(buttonEdit);

    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    buttonDelete.className = "btn btn-outline-danger btn-sm me-1";
    tdButtons.appendChild(buttonDelete);

    let buttonPrint = document.createElement("button");
    buttonPrint.innerText = "Print";
    buttonPrint.className = "btn btn-outline-success btn-sm me-1";
    tdButtons.appendChild(buttonPrint);

    tr.appendChild(tdButtons);

    tableEmployeeBody.appendChild(tr);
});

// let optionMSG = document.createElement('option');
// optionMSG.value = "";
// optionMSG.innerText = "Please Select Designation";
// optionMSG.selected = "selected";
// optionMSG.disabled = "disabled";
//
// selectDesignation.appendChild(optionMSG);
//
// designations.forEach(designation => {
//     let optionMSG = document.createElement('option');
//     optionMSG.value = JSON.stringify(designation);
//     optionMSG.innerText = designation.name;
//
//     selectDesignation.appendChild(optionMSG);
//});


// let optionStatus = document.createElement('option');
// optionStatus.value = "";
// optionStatus.innerText = "Please Select Employee Status";
// optionStatus.selected = "selected";
// optionStatus.disabled = "disabled";
//
// selectEmployeeStatus.appendChild(optionStatus);
//
// employeeStatus.forEach(employee => {
//     let optionStatus = document.createElement('option');
//     optionStatus.value = JSON.stringify(employee);
//     optionStatus.innerText = employee.status;
//
//     selectEmployeeStatus.appendChild(optionStatus);
// });


