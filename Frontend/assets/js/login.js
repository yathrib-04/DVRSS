// Add event listener to the login form 
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Basic validation
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  // Simulate login (mock backend response)
  // WARNING: This is a mock login for demonstration purposes only.
  // In a real application, you should use a secure backend for authentication.
  if (email === "test@example.com" && password === "ValidPassword123!") {
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html'; // Redirect to the dashboard
  } else {
    alert('Invalid email or password. Please try again.');
  }
}); 