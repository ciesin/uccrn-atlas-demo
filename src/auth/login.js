// Function to validate password input
function validateInput(password) {
    if (!password) {
        document.getElementById("error-message").textContent = "Password is required.";
        return false;
    }
    return true;
}

// Function to handle login
async function handleLogin(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
  
    if (!validateInput(password)) {
        return;
    }

    try {
        const response = await fetch('/api/verify-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password })
        });

        const data = await response.json();

        if (data.success) {
            const authData = {
                authenticated: true,
                timestamp: new Date().getTime()
            };
            sessionStorage.setItem("authState", JSON.stringify(authData));
            window.location.href = window.location.origin + '/uccrn-atlas-demo/';
        } else {
            document.getElementById("error-message").textContent = "Invalid password";
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("error-message").textContent = "An error occurred during login";
    }
}

// Clear any existing authentication on page load
window.addEventListener('load', () => {
    sessionStorage.removeItem("authState");
});

// Event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', handleLogin);