document.addEventListener('DOMContentLoaded', (event) => {
    // In a real application, you would fetch the user's name from the server
    // and store it in localStorage or a cookie upon login.
    // For demonstration purposes, we'll use a hardcoded name.
    const userName = "Jane Doe"; 
    
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        userNameElement.textContent = userName;
    }
}); 