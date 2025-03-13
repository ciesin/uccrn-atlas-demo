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
    const expectedPassword = import.meta.env.VITE_APP_PASSWORD;
  
    if (!expectedPassword) {
        console.error('Password not configured');
        document.getElementById("error-message").textContent = "Authentication error";
        return;
    }

    try {
        // Client-side password check
        if (password === expectedPassword) {
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
        document.getElementById("error-message").textContent = "An error occurred";
    }
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});