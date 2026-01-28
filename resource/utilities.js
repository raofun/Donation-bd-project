
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




function displayHistory() {
            const historyContainer = document.getElementById('historyContainer');
            
            if (donationHistory.length === 0) {
                historyContainer.innerHTML = `
                    <div class="text-center py-20 text-gray-500">
                        <p class="text-xl">No donation history yet</p>
                        <p class="text-sm mt-2">Your donation history will appear here</p>
                    </div>
                `;
                return;
            }
            
            historyContainer.innerHTML = donationHistory.map(item => `
                <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-bold text-black mb-3">
                        ${item.amount} Taka is Donated for ${item.title}
                    </h3>
                    <p class="text-gray-500 text-sm">
                        Date : ${item.date}
                    </p>
                </div>
            `).join('');
        }