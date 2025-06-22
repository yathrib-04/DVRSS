document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate feedback submission
    // WARNING: This is a mock feedback submission for demonstration purposes only.
    // In a real application, you should send this data to a secure backend.
    setTimeout(() => {
      document.getElementById('thankYouMessage').style.display = 'block';
      document.getElementById('feedbackForm').reset();
    }, 500);
  }); 