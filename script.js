document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');
    const passwordDisplay = document.getElementById('password');

    generateButton.addEventListener('click', generatePassword);
    copyButton.addEventListener('click', copyPassword);

    function generatePassword() {
        const length = parseInt(document.getElementById('length').value);
        const uppercase = document.getElementById('uppercase').checked;
        const lowercase = document.getElementById('lowercase').checked;
        const numbers = document.getElementById('numbers').checked;
        const symbols = document.getElementById('symbols').checked;

        let charset = '';
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) charset += '0123456789';
        if (symbols) charset += '!@#$%^&*()-_+=~`[]{}|;:,.<>?';

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        passwordDisplay.textContent = password;
    }

    function copyPassword() {
        const password = passwordDisplay.textContent;
        const textarea = document.createElement('textarea');
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Password copied to clipboard');
    }
});
