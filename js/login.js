let container = document.getElementById('container');

function toggleForm(formType) {
    container.classList.toggle('sign-in', formType === 'sign-in');
    container.classList.toggle('sign-up', formType === 'sign-up');
}

function validateForm(type) {
    let username = document.querySelector(`.${type} input[placeholder="Username"]`).value;
    let password = document.querySelector(`.${type} input[placeholder="Password"]`).value;
    if (type === 'sign-up') {
        let email = document.querySelector(`.${type} input[placeholder="Email"]`).value;
        let confirmPassword = document.querySelector(`.${type} input[placeholder="Confirm password"]`).value;
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill all the fields');
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }
    } else {
        if (!username || !password) {
            alert('Please fill all the fields');
            return false;
        }
    }
    alert(`${type} form submitted`);
    return true;
}

setTimeout(() => {
    container.classList.add('sign-in');
}, 200);
