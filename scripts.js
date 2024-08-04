function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('joinForm').style.display = 'none';
}

function showJoin() {
    document.getElementById('joinForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Signed in as Super Admin');
        window.location.href = 'super_admin.html';
    } else {
        alert('Invalid credentials');
    }
}

function requestToJoin() {
    const name = document.getElementById('joinName').value;
    const username = document.getElementById('joinUsername').value;
    const password = document.getElementById('joinPassword').value;
    const email = document.getElementById('joinEmail').value;
    const phone = document.getElementById('joinPhone').value;

    if (!name || !username || !password || !email || !phone) {
        alert('All fields are required');
        return;
    }

    alert('Request to join sent successfully');
}
