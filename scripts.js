const users = [];

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

    if (username === 'niskad2024' && password === 'Manal$5693') {
        alert('Signed in as Super Admin');
        window.location.href = 'super_admin.html';
    } else {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Signed in as User');
        } else {
            alert('Invalid credentials');
        }
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

    users.push({ name, username, password, email, phone, role: 'pending' });
    alert('Request to join sent successfully');
}

function fetchRequests() {
    const requestsDiv = document.getElementById('requests');

    users.filter(user => user.role === 'pending').forEach(request => {
        const requestDiv = document.createElement('div');
        requestDiv.innerHTML = `
            <p>Name: ${request.name}</p>
            <p>Email: ${request.email}</p>
            <p>Phone: ${request.phone}</p>
            <button onclick="approveRequest('${request.username}')">Approve</button>
            <button onclick="rejectRequest('${request.username}')">Reject</button>
        `;
        requestsDiv.appendChild(requestDiv);
    });
}

function approveRequest(username) {
    const user = users.find(user => user.username === username);
    if (user) {
        user.role = 'user';
        alert(`Approved request for ${user.name}`);
        fetchRequests();
    }
}

function rejectRequest(username) {
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        alert(`Rejected request for ${username}`);
        fetchRequests();
    }
}

function goBack() {
    window.location.href = 'index.html';
}