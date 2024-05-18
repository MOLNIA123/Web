// Simulated database
const users = [];

function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Check if username or email already exists
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        document.getElementById('message').innerText = 'Username or email already exists.';
    } else {
        // Register new user
        users.push({ username, email, password });
        document.getElementById('message').innerText = 'Регистрация пройдена.';
        document.getElementById('registerForm').reset();
    }
}

function login() {
	
	
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById('message').innerText = 'Login successful.';
        
        window.location.href = "index.html";
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
        
        window.location.href = "about US.html";
    }
}