
document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){

    const donationAmount = getInputFieldValueByID('noakhali-donation');

    if(isNaN(donationAmount) || donationAmount <= 0){
        alert('Please enter a valid donation amount.');
        return;
    }

    if(donationAmount > getTextElementValueByID('main-balance')){
        alert('Insufficient balance for this donation.');
        return;
    }

    const currentDonation = getTextElementValueByID('noakhali-amount');

    const totalDonation = donationAmount + currentDonation;
    
    document.getElementById('noakhali-amount').innerText = totalDonation;
    updateMainBalance(donationAmount);


    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML +=`
                <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-bold text-black mb-3">
                        ${donationAmount} Taka is Donated for Noakhali Flood Relief
                    </h3>
                </div> `;
    
    document.getElementById('successModal').showModal();
    

});

document.getElementById('btn-donate-feni').addEventListener('click', function(event){

    const donationAmount = getInputFieldValueByID('feni-donation');

    if(isNaN(donationAmount) || donationAmount <= 0){
        alert('Please enter a valid donation amount.');
        return;
    }

    if(donationAmount > getTextElementValueByID('main-balance')){
        alert('Insufficient balance for this donation.');
        return;
    }

    const currentDonation = getTextElementValueByID('feni-amount');
    
    const totalDonation = donationAmount + currentDonation;
    document.getElementById('feni-amount').innerText = totalDonation;
    updateMainBalance(donationAmount);


    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML +=`
                <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-bold text-black mb-3">
                        ${donationAmount} Taka is Donated for Feni Flood Relief
                    </h3>
                </div> `;
    
    document.getElementById('successModal').showModal();
});

document.getElementById('btn-donate-injured').addEventListener('click', function(event){
    const donationAmount = getInputFieldValueByID('injured-donation');
    
    if(isNaN(donationAmount) || donationAmount <= 0){
        alert('Please enter a valid donation amount.');
        return;
    }

    if(donationAmount > getTextElementValueByID('main-balance')){
        alert('Insufficient balance for this donation.');
        return;
    }
    const currentDonation = getTextElementValueByID('injured-amount');
    
    const totalDonation = donationAmount + currentDonation;
    document.getElementById('injured-amount').innerText = totalDonation;
    updateMainBalance(donationAmount);


    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML +=`
                <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-bold text-black mb-3">
                        ${donationAmount} Taka is Donated for Injured in Quota Movement
                    </h3>
                </div> `;
    
    document.getElementById('successModal').showModal();
});


// Page Switching
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
});
