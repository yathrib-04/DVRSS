document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Validate inputs
  if (!name || !email || !password || !confirmPassword) {
    alert('All fields are required.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Password strength validation
  const isValidPassword = password.length >= 8 &&
                              /[A-Za-z]/.test(password) &&
                              /\\d/.test(password) &&
                              /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!isValidPassword) {
    alert('Password must be at least 8 characters long and include a letter, a number, and a symbol.');
    return;
  }
  
  // Simulate success
  // WARNING: This is a mock signup for demonstration purposes only.
  // In a real application, you should send this data to a secure backend for user creation.
  console.log('Form submitted successfully:', { name, email, password });
  alert('Sign-Up Successful! Redirecting to Dashboard...');
  window.location.href = 'dashboard.html';
}); 