// Toggle the mobile navigation menu when the hamburger icon is clicked
document.getElementById('hamburger-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('open');
});

// Example: Show alert when "Learn More" button is clicked
document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('More details coming soon!');
});
