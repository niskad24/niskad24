// Firebase configuration
const firebaseConfig = {
    "type": "service_account",
    "project_id": "chatapp-cbef8",
    "private_key_id": "8ccb631fb135468d4be2221e7dd8787fee61ac36",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDICb6CkYmkdEL6\nHAQXc5I/6bSgrvllJXABlg5C/HonYic/doTeckIjO61ZGcz92GUghfm2c45ITivX\nkx25lK0583AozEYSY3RAb0s+7cVEHCEUSRLXl4ppKitN1xpgyObywAPbpQZ4cD95\nhGoUrgO1Qtj/lo2DBYGz6ljZgoj9yV+0290gMevjhs6rixaXH5IKtX4IZHjsfOId\nQsCR2TM14SJBqi4ay/4KkahPX2n9mPsYbXoZ2HTlq83QVjpEvMg5fzO4USsFwoat\n9V4iLRiu9FNWusRBlhbpNBxndkNwx7IW1HvSQdnFP0wWCaG3H31KvYn08s59KZk2\nqBEraVatAgMBAAECggEAAI/YuYsBtJ+dHC8vq/4d8uVxB1YRf+3oRDZhKVPmvFlW\nfIfgQvjXRGhGAcZZ2/1vbtsUEUr3xZnj3BPzr/ot0wNQ/ykomBc9+cpyHMbl780i\nCh3t+q3W5ESdX5GLAuz2qawP0NzxpuAr3Tc2nKlYUq/jhJjhH5ToLeU/X1gCGadc\nvZXTXFkysR9MnmlIKN7ehe7TmDId4mtMftMS436TuDjoH3HdrzVva7rNIP4LOO0f\nVzUpKEeV58mzYJQgiDg4EMB60Ol7XT3ufgBUJ0BNG7S8g/+Y5WPmQOUHqgwVdwbE\ncsQTllHzDVHpOLWifie0j4ouQEIVJZ3qk3go2/PchwKBgQD/WCMPXRPN0kWJ/v8K\ns5ZuGt8gxe3/+L6dmRI4B1kGVPvsBdkRE6fXVMfHm7+ueRIIvce0MB9ZydzXtHKk\nVcWVhcpZrHupDDII2kCapwpUiAR6hUNz7ESnUPKkVoZVlVMcCwkwx2K9JI9srLJ8\nmA12a8gBR6DLdKi+wpbRtTVAPwKBgQDIjT+9DLGQSa8sPWf8fBbW0O3zneHZcA95\nx2GQ+/VLdaChFXDoGH343+aiY3nQA8ZXhaKNNHp5CfMB3LrMIFtlmNkfYEEsNzUQ\n2MrZyqp23ab+vbS46ItEm4wmukT+bbrcuB0K7SljbbY60o/AcdIOvT3DT1lQUPGw\nNMQLqoXuEwKBgGyQNJfbowfnVtmNKTKLmHHHywZMIRyrzZ+D7VMVDKy8hT+cXOX9\nzWaoDSi4945eu2QsDDR4IVwzj0nG1tc4AIHKGHZ39zuwi7Vn1f/q9WFrUzwkXMF0\nutvIduGYSBUrH+LUblvm6fwxBynVYy3GGDM5MBgbNCpMt1Ijuav/t1xRAoGASL4K\n/2xKP3aqhhZj0E3GDvbLSFDc6Xxe8KHj/q2VBGDO+X6IbHbtwkacJgyE03F7EKXV\nFviQ77QvI17HlmCqJgixwFKucPY5Vjn8IdED0YeGGeH/Wg5m7WSqCiYH/m0YmRRi\n3GK3X2wc6+sR3xCpy1TSwTPXxm0FrQ8GiOC6IWcCgYB5dV61U5cLNV6pONNVesnQ\n4veM1ZXRghXFM//xWaR5VyAeHwi6yBfAtlnYTJ/C7Bq9vWDSI7T+XV2Q+EYG4Dqv\nkGytfWaOaMDM1raP2xhej/2FJjwyNWtJJmjAUiwDjCGN5xNQJBg32k0ZsQdpwn5f\nEmjnD/WPZsXRnehJdy3ojw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-b6w0m@chatapp-cbef8.iam.gserviceaccount.com",
    "client_id": "110248046427065507613",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b6w0m%40chatapp-cbef8.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  ;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

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

    db.collection('users').where('username', '==', username).where('password', '==', password)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                alert('Invalid credentials');
                return;
            }
            snapshot.forEach(doc => {
                const user = doc.data();
                if (user.role === 'superadmin') {
                    alert('Signed in as Super Admin');
                    window.location.href = 'super_admin.html';
                } else {
                    alert('Signed in as User');
                }
            });
        })
        .catch(error => {
            console.error("Error logging in: ", error);
        });
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

    db.collection('users').add({
        name,
        username,
        password,
        email,
        phone,
        role: 'pending'
    })
    .then(() => {
        alert('Request to join sent successfully');
    })
    .catch(error => {
        console.error("Error requesting to join: ", error);
    });
}

function fetchRequests() {
    db.collection('users').where('role', '==', 'pending')
        .get()
        .then(snapshot => {
            const requestsDiv = document.getElementById('requests');
            requestsDiv.innerHTML = ''; // Clear previous requests
            snapshot.forEach(doc => {
                const request = doc.data();
                const requestDiv = document.createElement('div');
                requestDiv.innerHTML = `
                    <p>Name: ${request.name}</p>
                    <p>Email: ${request.email}</p>
                    <p>Phone: ${request.phone}</p>
                    <button onclick="approveRequest('${doc.id}')">Approve</button>
                    <button onclick="rejectRequest('${doc.id}')">Reject</button>
                `;
                requestsDiv.appendChild(requestDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching requests: ", error);
        });
}

function approveRequest(id) {
    db.collection('users').doc(id).update({
        role: 'user'
    })
    .then(() => {
        fetchRequests();
    })
    .catch(error => {
        console.error("Error approving request: ", error);
    });
}

function rejectRequest(id) {
    db.collection('users').doc(id).delete()
    .then(() => {
        fetchRequests();
    })
    .catch(error => {
        console.error("Error rejecting request: ", error);
    });
}

function goBack() {
    window.location.href = 'index.html';
}
