// auth.js (Simplified Gatekeeper Script)

(function() {
    // Check if the master key exists in session storage.
    const isAuthenticated = sessionStorage.getItem('masterKey') === 'true';

    // If the user is NOT authenticated, redirect them to the main login page.
    if (!isAuthenticated) {
        window.location.href = '/index.html';
    }
})();