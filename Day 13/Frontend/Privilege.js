window.addEventListener("load" , () => {
    refreshPrivilegeTable();
    refreshForm();
});

const refreshPrivilegeTable = () => {
     privileges = [
        {id : 1 , privi_select : true , privi_insert : true , privi_update : true , privi_delete : true , role_id : {id:1 , name : 'Manager'} , module_id : {id:1 , name: 'Employee'}},
        {id : 2 , privi_select : false , privi_insert : false , privi_update : false , privi_delete : false , role_id : {id:2 , name : 'Cashier'} , module_id : {id:1 , name: 'Employee'}},
        {id : 3 , privi_select : true , privi_insert : true , privi_update : false , privi_delete : false , role_id : {id:2 , name : 'Cashier'} , module_id : {id:2 , name: 'Invoice'}}
    ];

    let columns = [
        {propertyName : getRole ,   dataType : 'function'},
        {propertyName : getModule , dataType : 'function'},
        {propertyName : getSelect , dataType : 'function'},
        {propertyName : getInsert , dataType : 'function'},
        {propertyName : getUpdate , dataType : 'function'},
        {propertyName : getDelete , dataType : 'function'}
    ];
    fillDataIntoTable(tableBodyPrivilege , privileges , columns , editPrivilege ,deletePrivilege, printPrivilege , true);
}

const checkFormErrors = () => {
    let errors = "";

    if (privilege.role_id == null){
        errors += "Please Select a Role";
    }

    if (privilege.module_id == null){
        errors += "Please Select a Module";
    }

    return errors;
}

const buttonPrivilegeSubmit = () => {
    let errors = checkFormErrors();
    if(errors == ""){
        let userConfirm = window.confirm("Are you sure to submit privilege Details \n" + "Role :" + privilege.role_id.name + "\n" + "Module :" + privilege.module_id.name);
        if (userConfirm) {
            let postResponse = "OK";
            if (postResponse == "OK"){
                window.alert("Saved Successfully");
                refreshForm();
                refreshPrivilegeTable();
            }else {
                window.alert("Failed to submit, has following Errors \n" + postResponse);
            }
        }
    }else {
        window.alert("Form has following errors \n" + errors);
    }
}

const checkFormUpdates = () => {
    let updates = "";

    if (privilege !== null && oldPrivilege !== null){
        if (privilege.role_id.name != oldPrivilege.role_id.name){
            updates += "Role is Changed \n";
        }
        if (privilege.module_id.name != oldPrivilege.module_id.name){
            updates += "Module is Changed \n";
        }
        if (privilege.privi_select != oldPrivilege.privi_select){
            updates += "Select Privilege is Changed \n";
        }
        if (privilege.privi_insert != oldPrivilege.privi_insert){
            updates += "Insert Privilege is Changed \n";
        }
        if (privilege.privi_update != oldPrivilege.privi_update){
            updates += "Update Privilege is Changed \n";
        }
        if (privilege.privi_delete != oldPrivilege.privi_delete){
            updates += "Delete Privilege is Changed \n";
        }

    }

    return updates;
}

const buttonPrivilegeUpdate = () => {
    let errors = checkFormErrors();
    if(errors == ""){
        let updates = checkFormUpdates();
        if(updates == ""){
            window.alert("Nothing to updated");
        }
        else {
            let userConfirm = window.confirm("Are you sure to update privileges?  \n");
            if (userConfirm){
                let putResponse = "OK";
                if (putResponse == "OK"){
                    window.alert("Update Successfully");
                    refreshForm();
                    refreshPrivilegeTable();
                }else {
                    window.alert("Failed to Submit \n" + putResponse);
                }
            }
        }
    }else {
        window.alert("Form has following Errors \n" + errors);
    }
}

    const getRole = (dataOb) => {
        return dataOb.role_id.name;
    }
    const getModule = (dataOb) => {
        return dataOb.module_id.name;
    }
    const getSelect = (dataOb) => {
        if(dataOb.privi_select){
            return "Granted";
        }else {
            return "Not-Granted";
        }
    }
    const getInsert = (dataOb) => {
        if(dataOb.privi_insert){
            return "Granted";
        }else {
            return "Not-Granted";
        }
    }
    const getUpdate = (dataOb) => {
        if(dataOb.privi_update){
            return "Granted";
        }else {
            return "Not-Granted";
        }
    }
    const getDelete = (dataOb) => {
        if(dataOb.privi_delete){
            return "Granted";
        }else {
            return "Not-Granted";
        }
    }

    const editPrivilege = (dataOb , rowIndex) => {

        privilege = JSON.parse(JSON.stringify(dataOb));
        oldPrivilege = JSON.parse(JSON.stringify(dataOb));

        selectRole.value = JSON.stringify(dataOb.role_id);
        selectModule.value = JSON.stringify(dataOb.module_id);

        if(privilege.privi_select){
            chkboxSelect.checked = true;
            labelSelect.innerText = "Select Privilege Granted";
        }else{
            chkboxSelect.checked = false;
            labelSelect.innerText = "Select Privilege Not Granted";
        }
        if(privilege.privi_insert){
            chkboxInsert.checked = true;
            labelInsert.innerText = "Insert Privilege Granted";
        }else{
            chkboxInsert.checked = false;
            labelInsert.innerText = "Insert Privilege Not Granted";
        }
        if(privilege.privi_update){
            chkboxUpdate.checked = true;
            labelUpdate.innerText = "Insert Privilege Granted";
        }else{
            chkboxUpdate.checked = false;
            labelUpdate.innerText = "Insert Privilege Not Granted";
        }
        if(privilege.privi_delete){
            chkboxDelete.checked = true;
            labelDelete.innerText = "Insert Privilege Granted";
        }else{
            chkboxDelete.checked = false;
            labelDelete.innerText = "Insert Privilege Not Granted";
        }
    }
    const deletePrivilege = (dataOb , rowIndex) => {

    let userConfirm = window.confirm("Are You Sure to Delete following Privilege \n" + "Role :" + dataOb.role_id.name);

    if(userConfirm){
        let serviceResponse = "OK";
        if (serviceResponse === "OK"){
            window.alert("Delete Successfully");
            refreshPrivilegeTable();
        }else {
            window.alert("Failed Delete , has following Error \n" + serviceResponse);
        }
        refreshPrivilegeTable();
    }
}
    const printPrivilege = (dataOb , rowIndex) => {
        tdRole.innerText = dataOb.role_id.name;
        tdModule.innerText = dataOb.module_id.name;
        tdSelect.innerText = dataOb.privi_select;
        tdInsert.innerText = dataOb.privi_insert;
        tdUpdate.innerText = dataOb.privi_update;
        tdDelete.innerText = dataOb.privi_delete;

        $("#printPrivilegeModal").modal('show');

    }
    const printButtonRow = () => {
        let newWindow = window.open();

        let printView = "<head><title>BIT Project 2024 : D-12 Practical</title>\<link rel='stylesheet' href='../resources/bootstrap-5.0.2-dist/css/bootstrap.css'></head>" + "<body>" + tablePrivilegeModal.outerHTML + "</body>";
        newWindow.document.write(printView);

        setTimeout(() => {
            newWindow.stop();
            newWindow.print();
            newWindow.close();
        } , 500);
    }
    const refreshForm = () => {
        privilege = new Object();

        formPrivilege.reset();

        setDefault([selectRole,selectModule,chkboxSelect,chkboxInsert,chkboxUpdate,chkboxDelete]);

        roles = [{id: 1, name: "Manager"}, {id: 2, name: "Cashier"}];
        modules = [{id: 1 , name : "Employee"} , {id : 2 , name: "Invoice"}];

        fillDataIntoSelect(selectRole, "Please Select Role", roles, 'name');
        fillDataIntoSelect(selectModule, "Please Select Module", modules, 'name');

        privilege.privi_select = false;
        privilege.privi_insert = false;
        privilege.privi_update = false;
        privilege.privi_delete = false;

    }


