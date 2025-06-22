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
  if (email === "admin@example.com" && password === "AdminPassword123!") {
    alert('Admin login successful! Redirecting to admin dashboard...');
    localStorage.setItem('userRole', 'admin');
    window.location.href = 'Admin/frontend/index.html'; // Redirect to the admin landing page
  } else if (email === "test@example.com" && password === "ValidPassword123!") {
    alert('Login successful! Redirecting to dashboard...');
    localStorage.setItem('userRole', 'user');
    window.location.href = 'dashboard.html'; // Redirect to the dashboard
  } else {
    alert('Invalid email or password. Please try again.');
  }
}); 

document.getElementById('toggle-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    this.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    this.textContent = 'Show';
  }
}); 