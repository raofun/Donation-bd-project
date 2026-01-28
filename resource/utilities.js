
function updateMainBalance(donationAmount){
    const mainBalance = getTextElementValueByID('main-balance');

    const updatedMainBalance = mainBalance - donationAmount;
    
    document.getElementById('main-balance').innerText = updatedMainBalance;

}



function getInputFieldValueByID(id){
    const inputValue = parseFloat(document.getElementById(id).value);

    return inputValue;
}

function getTextElementValueByID(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    
    return textValue;
}
