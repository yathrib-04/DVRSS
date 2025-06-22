document.addEventListener('DOMContentLoaded', function () {
    const anonymousCheckbox = document.getElementById('anonymous');
    const fullNameInput = document.getElementById('full_name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const incidentForm = document.getElementById('incident-form');

    anonymousCheckbox.addEventListener('change', function () {
        const isChecked = this.checked;
        fullNameInput.disabled = isChecked;
        phoneInput.disabled = isChecked;
        emailInput.disabled = isChecked;

        if (isChecked) {
            fullNameInput.value = '';
            phoneInput.value = '';
            emailInput.value = '';
        }
    });

    incidentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // In a real application, you would send this data to a secure backend.
        // This is just a simulation.
        alert('Thank you for your report. We will review it shortly.');
        incidentForm.reset();
        anonymousCheckbox.dispatchEvent(new Event('change'));
    })
}); 