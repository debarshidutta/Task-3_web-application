document.getElementById('Contact_form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    phone: document.getElementById('phone-number').value,
    message: document.getElementById('message').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    subject: document.getElementById('subject').value,
  };

  try {
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert(result.message);
      document.getElementById('Contact_form').reset();
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (err) {
    console.error('Submission error:', err);
    alert('An unexpected error occurred. Please try again later.');
  }
});
