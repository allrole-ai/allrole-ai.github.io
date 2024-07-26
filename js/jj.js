let container = document.getElementById('container');

function toggleForm(formType) {
    container.classList.toggle('sign-in', formType === 'sign-in');
    container.classList.toggle('sign-up', formType === 'sign-up');
}

// Pastikan bahwa fungsi validateForm tidak lagi menampilkan alert tetapi memvalidasi form
function validateForm(type) {
    let username = document.querySelector(`.${type} input[placeholder="Nama Lengkap"]`).value;
    let password = document.querySelector(`.${type} input[placeholder="Password"]`).value;
    if (type === 'sign-up') {
        let email = document.querySelector(`.${type} input[placeholder="Email"]`).value;
        let confirmPassword = document.querySelector(`.${type} input[placeholder="Confirm your Password"]`).value;
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
    return true;
}

setTimeout(() => {
    container.classList.add('sign-in');
}, 200);
