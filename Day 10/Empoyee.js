window.addEventListener('load', () => {

    refreshEmployeeTable();
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

    fillDataIntoTable(tableEmployeeBody , employees , propertyList);
}

const getDesignation = (dataOb) => {
    return dataOb.designation_id.name;
}
const getEmployeeStatus = (dataOb) => {
    return dataOb.employeeStatus_id.status;
}

const buttonEmployeeSubmit = () =>{
    refreshEmployeeTable();
}

const buttonEmployeeUpdate = () =>{
    refreshEmployeeTable();
}

const buttonEmployeeDelete = () =>{
    refreshEmployeeTable();
}