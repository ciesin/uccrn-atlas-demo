function checkAuth() {
    const authStateStr = sessionStorage.getItem("authState");
    const currentPath = window.location.pathname;
    const baseUrl = window.location.origin;
    const isLoginPage = currentPath.includes("login.html");
    
    // If not authenticated and not on login page, redirect to login
    if (!authStateStr && !isLoginPage) {
        console.log("User not authenticated, redirecting to login");
        window.location.href = `${baseUrl}/uccrn-atlas-demo/src/auth/login.html`;
        return false;
    }
    
    // If authenticated and on login page, redirect to main app
    if (authStateStr && isLoginPage) {
        window.location.href = `${baseUrl}/uccrn-atlas-demo/`;
        return true;
    }

    return true;
}

// Execute immediately
checkAuth();