document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get field values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const feedback = document.getElementById('feedback').value.trim();

  // Validation patterns
  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate inputs
  if (!namePattern.test(firstName)) {
    alert('First name must contain only letters.');
    return;
  }
  if (!namePattern.test(lastName)) {
    alert('Last name must contain only letters.');
    return;
  }
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (feedback.length > 200) {
    alert('Feedback must not exceed 200 characters.');
    return;
  }

  // Hide form and show thank-you message
  document.getElementById('feedbackForm').style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';
});