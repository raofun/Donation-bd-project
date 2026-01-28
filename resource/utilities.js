
function updateMainBalance(donationAmount){
    const mainBalance = getTextElementValueByID('main-balance');

    const updatedMainBalance = mainBalance - donationAmount;
    
    document.getElementById('main-balance').innerText = updatedMainBalance;
    
    // Save to localStorage
    localStorage.setItem('mainBalance', updatedMainBalance);

}


// Initialize saved values from localStorage on page load
function initializeSavedData() {
    const savedBalance = localStorage.getItem('mainBalance');
    if (savedBalance !== null) {
        document.getElementById('main-balance').innerText = savedBalance;
    }
    
    const savedNoakhali = localStorage.getItem('noakhaliAmount');
    if (savedNoakhali !== null) {
        const noakhaliElement = document.getElementById('noakhali-amount');
        if (noakhaliElement) {
            noakhaliElement.innerText = savedNoakhali;
        }
    }
    
    const savedFeni = localStorage.getItem('feniAmount');
    if (savedFeni !== null) {
        const feniElement = document.getElementById('feni-amount');
        if (feniElement) {
            feniElement.innerText = savedFeni;
        }
    }
    
    const savedInjured = localStorage.getItem('injuredAmount');
    if (savedInjured !== null) {
        const injuredElement = document.getElementById('injured-amount');
        if (injuredElement) {
            injuredElement.innerText = savedInjured;
        }
    }
}

// Call initialization when page loads
window.addEventListener('DOMContentLoaded', initializeSavedData);


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