document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        document.getElementById('formResponse').innerHTML = 
            '<p style="color:red;">Please fill in all fields.</p>';
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    document.getElementById('formResponse').innerHTML = 
        '<p style="color:green;">Thank you, ' + name + '! Your message has been sent.</p>';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // In a real implementation, you might use:
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, message })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     document.getElementById('formResponse').innerHTML = 
    //         '<p style="color:green;">' + data.message + '</p>';
    // })
    // .catch(error => {
    //     document.getElementById('formResponse').innerHTML = 
    //         '<p style="color:red;">Error: ' + error.message + '</p>';
    // });
});