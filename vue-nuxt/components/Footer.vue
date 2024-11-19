<template>
    <div class="foot f11">
        <ul>
            <li>
                <p>About Us</p>
                <a href="https://www.example.com/about/">Contacts</a>
                <a href="https://www.example.com/about/faq/">FAQ</a>
                <a href="https://www.outsideinc.com/terms-of-use/">Terms of Use</a>
                <a href="https://www.outsideinc.com/privacy-policy/">Privacy Policy</a>
                <a href="https://www.example.com/about/whyjoin/">Sign Up!</a>
                <a href="https://www.example.com/about/sitemap/">Sitemap</a>
            </li>
            <li>
                <p>Advertise</p>
                <a href="https://www.example.com/about/advertising/">Advertising</a>
            </li>
            <li>
                <p>Cool Features</p>
                <a href="https://www.example.com/news/example-content-submission-guide.html">Submit a Story</a>
                            <a href="https://www.example.com/product/">Product</a>
                <a href="https://www.example.com/photo/" class="mobile-only">Photos</a>
                <a href="https://www.example.com/video/" class="mobile-only">Videos</a>
                <a href="https://privacy-central.securiti.ai/#/dsr/c557911e-2597-486a-81b0-7bd99991c2e1" target="_blank" id="privacyRequest" class="none">Privacy Request</a>
                <span href="#" class="cmp-revoke-consent clickable">Manage Cookie Preferences</span>
            </li>
            <li>
                <p>RSS</p>
                <a href="https://www.example.com/example_xml_feed.php">example RSS</a>
                <a href="https://twitter.com/example">example Twitter</a>
                <a href="https://www.facebook.com/examplecom">example Facebook</a>
                <a href="https://www.youtube.com/example">example Youtube</a>
                <a href="https://www.instagram.com/example">example Instagram</a>
                <br>
                <a href="https://mailchi.mp/example.com/example-newsletter" target="_blank" data-analytics-event="click" data-analytics-data='{"name": "Element Clicked", "props": { "domain": "example", "name": "newsletter_signup", "source": "footer"}}'>Newsletter Signup</a>
            </li>
        </ul>
        <div class="centertext">
            <!--<a href="https://www.example.com/about/newsletter/" class="pb-button red large" style="display: inline-block">Newsletter Signup</a><br>-->
            <br><br>
            <b>Copyright &copy; 2000 - 2024. example.com All rights reserved.</b>
            <br>
            <b>dv65 0.014383</b>
        </div>
            <div style="background: #000; padding: 20px; text-align: center;">
            <a href="https://www.example.com/mobile/redirect/?type=2&redirect=https://m.example.com/" data-analytics-event="click" data-analytics-data='{"name": "Element Clicked", "props": { "domain": "example", "name": "desktop-mobile-switch", "type": "link"}}'>Mobile Version of Website</a>
        </div>
</div>
</template>
<script>

</script>
<style scoped>
    body.outside-menu-visible {
        overflow: hidden;
    }
    #outside-header2 {
        background-color: #000;
        height: 68px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        position: relative;
        letter-spacing: normal;
        -webkit-font-smoothing: antialiased;
    }
    .left-column {
        grid-column: 1;
        z-index: 1;
    }
    .center-column {
        text-align: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000000;
        padding: 0 5px;
    }
    .right-column {
        grid-column: 3;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #poweredby {
        font-size: 12px;
        color: #fff;
        line-height: 19px;
    }
    #pblogo {
        background-size: 159px 35px;
        width: 159px;
        height: 35px;
    }
    #outside-header-links2 {
        background-color: #000000;
        color: #fff;
        position: absolute;
        z-index: 800;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 390px;
    }
    .btn-menu {
        display: block;
        align-items: center;
        justify-content: center;
        padding: 10px;
        height: 44px;
        width: 44px;
        border: none;
        background-color: transparent;
        color: inherit;
        cursor: pointer;
        transition: 0.3s ease;
    }
    .btn-menu:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
    }
    .btn-menu__bars {
        display: block;
        position: relative;
        width: 24px;
        height: 2px;
        border-radius: 3px;
        background-color: #fff;
        transition: 0.3s;
    }
    .btn-menu__bars:before, .btn-menu__bars:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        transition: 0.3s;
    }
    .btn-menu__bars:before {
        transform: translate(0, -9px);
    }
    .btn-menu__bars:after {
        transform: translate(0, 9px);
    }
    .menu-open .btn-menu .btn-menu__bars {
        background-color: transparent;
    }
    .menu-open .btn-menu .btn-menu__bars:before {
        transform: rotate(45deg);
    }
    .menu-open .btn-menu .btn-menu__bars:after {
        transform: rotate(-45deg);
    }
</style>
