const HeaderTemplate = /* html */ `
<header>
    <a href="/" title="Dotnetdudes logo">
        <span class="logo-image"></span>
        <span class="logo-text">
            <div class="d">D</div>
            <div class="o">o</div>
            <div class="t">t</div>
            <div class="n">n</div>
            <div class="e">e</div>
            <div class="t1">t</div>
            <div class="d1">d</div>
            <div class="u">u</div>
            <div class="d2">d</div>
            <div class="e1">e</div>
            <div class="s">s</div>
        </span>
    </a>
    <span id="page-tools">
        <!-- Hamburger icon -->
        <input class="side-menu" type="checkbox" id="side-menu" />
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <!-- Menu -->
        <nav class="nav">
            <ul class="menu">
                <li><a href="mobile.html">Apps</a></li>
                <li><a href="starters.html">Starter Kits</a></li>
                <li><a href="blogs.html">Blog</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li id="signInButtonContainer">
                    <a href="#" id="signInButton">Sign In</a>
                </li>
                <li id="myAccountButtonContainer" class="signOutButtonContainer">
                    <a href="#" id="myAccountButton">My Account</a>
                </li>
                <li id="signOutButtonContainer" class="signOutButtonContainer">
                    <a href="#" id="signOutButton">Sign Out</a>
                </li>
            </ul>
        </nav>
    </span>
</header>
`;

export default HeaderTemplate;