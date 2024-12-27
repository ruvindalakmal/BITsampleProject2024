const fillDataIntoTable = (tableBodyId , dataList , propertyList) =>{
    tableBodyId.innerHTML = '';

    dataList.forEach((dataOb , index) => {
        let tr = document.createElement('tr');

        let tdId = document.createElement("td");
        tdId.innerText = parseInt(index) + 1;
        tr.appendChild(tdId);

        for (const property of propertyList) {
            let td = document.createElement('td');

            if(property.dataType === 'string'){
                td.innerText = dataOb[property.propertyName];
            }else if(property.dataType === 'function'){
                td.innerHTML = property.propertyName(dataOb);
            }
            tr.appendChild(td);
        }

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

        tableBodyId.appendChild(tr);
    });
}
