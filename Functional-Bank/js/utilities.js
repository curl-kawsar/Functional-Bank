function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


function getElementValueById(elementid) {
    const textElement = document.getElementById(elementid);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
}

function setTextElementById(elementid, newValue) {

    const textElement = document.getElementById(elementid);
    textElement.innerText = newValue;

}