function selectCard(method) {
    // Reset the styles
    document.getElementById('smsInput').classList.add('d-none');
    document.getElementById('emailInput').classList.add('d-none');
    document.getElementById('btnSubmit').classList.add('disabled');

    // Show the selected input field
    if (method === 'sms') {
        document.getElementById('smsInput').classList.remove('d-none');
    } else if (method === 'email') {
        document.getElementById('emailInput').classList.remove('d-none');
    }

    // Enable the submit button
    document.getElementById('btnSubmit').classList.remove('disabled');

    // Set the selected reset method
    document.getElementsByName('edtResetMethod')[0].value = method;
}