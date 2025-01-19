function validateField(inputId, validationImgId) {
    const input = document.getElementById(inputId);
    const validationImg = document.getElementById(validationImgId);
    const message = document.createElement('div');
    message.classList.add('validation-message');

    // Remove existing validation messages
    const existingMessage = input.nextElementSibling;
    if (existingMessage && existingMessage.classList.contains('validation-message')) {
        existingMessage.remove();
    }

    if (input.checkValidity()) {
        validationImg.src = '/checkmark.png';
        validationImg.alt = 'Valid';
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        validationImg.src = '/xmark.png';
        validationImg.alt = 'Invalid';
        input.classList.remove('valid');
        input.classList.add('invalid');
        message.textContent = input.validationMessage;
        input.insertAdjacentElement('afterend', message);
    }
}

function validateForm() {
    validateField('firstName', 'firstNameValidation');
    validateField('middleName', 'middleNameValidation');
    validateField('lastName', 'lastNameValidation');
    validateField('dob', 'dobValidation');
    validateField('idNumber', 'idNumberValidation');
    validateField('address', 'addressValidation');

    const form = document.getElementById('idForm');
    if (!form.checkValidity()) {
        alert('Please correct the highlighted errors before submitting.');
        return;
    }

    alert('Form is valid. Generating barcodes...');
    // Call barcode generation logic here.
}
