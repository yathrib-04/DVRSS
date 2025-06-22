document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
  
    // Validate inputs
    if (!name || !email) {
      alert('Full name and email are required.');
      return;
    }
  
    if (password && password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Simulate success
    // WARNING: This is a mock profile update for demonstration purposes only.
    // In a real application, you would send this data to a secure backend to update the user's profile.
    console.log('Profile updated successfully:', { name, email });
    alert('Profile updated successfully!');
  });
  
  // In a real application, you would fetch the user's current data and populate the form.
  // For demonstration, we'll pre-fill the form with some data.
  document.addEventListener('DOMContentLoaded', (event) => {
      document.getElementById('name').value = "Jane Doe";
      document.getElementById('email').value = "test@example.com";
  }); 