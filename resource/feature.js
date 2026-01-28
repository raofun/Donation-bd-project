
// Tab switching
const donationTab = document.getElementById('donation-tab-btn');
const donationSection = document.getElementById('donation-section');

donationTab.addEventListener('click', function() {
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');

    //button styles
    donationTab.classList.remove('btn-outline');
    donationTab.classList.add('btn-success', 'bg-lime-400', 'hover:bg-lime-500', 'border-none');

    historyTab.classList.remove('btn-success', 'bg-lime-400', 'hover:bg-lime-500', 'border-none');
    historyTab.classList.add('btn-outline');
});

const historyTab = document.getElementById('history-tab-btn');
const historySection = document.getElementById('history-section');

historyTab.addEventListener('click', function() {
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');

    //button styles
    historyTab.classList.remove('btn-outline');
    historyTab.classList.add('btn-success', 'bg-lime-400', 'hover:bg-lime-500', 'border-none');

    donationTab.classList.remove('btn-success', 'bg-lime-400', 'hover:bg-lime-500', 'border-none');
    donationTab.classList.add('btn-outline');

});

