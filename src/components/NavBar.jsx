
function NavBar () {
    return (
        
<nav class="navbar">
    <div class="brand-title">
    <a href="/">
        <img
        src={DdwLogo}
        alt="DDW Logo"
        margin-left="10"
        height="35"
        loading="lazy"
        />
    </a>
    <p id="brand-name">Don't Die Without...</p>
    </div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
    <div class="navbar-links">
        <ul>
            <li><a href="/">Signup</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/profile">My Bucket</a></li>
            <li><a href="/random-goal">Random Goal</a></li>
            <li><a href="/">Logout</a></li>
            <li><a href="/test-page">Test Page</a></li>
            <li><a href="/fgladfghl">Error Page</a></li>
        </ul>
    </div>
</nav>

    )
}

export default NavBar