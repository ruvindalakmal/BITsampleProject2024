buttonClick.style.backgroundColor="red";

buttonClickTwo.onclick = function () {
    window.alert("You clicked the button Two!");
}
buttonClickThree.addEventListener("click", () =>{
    window.alert("You clicked the button Three!");
});

inputText.addEventListener("input", () =>{
    let textValue = inputText.value;
    let fullNameParts = textValue.split(" ");
    console.log(fullNameParts);

    selectCallingName.innerText = "";
    let optionMSG = document.createElement('option');
    optionMSG.selected = "selected";
    optionMSG.disabled = "disabled";
    optionMSG.innerText = "Select Calling Name";
    selectCallingName.appendChild(optionMSG);
    fullNameParts.forEach(namePart => {
        let optionMSG= document.createElement('option');
        optionMSG.innerText = namePart;
        selectCallingName.appendChild(optionMSG);
    });
});

