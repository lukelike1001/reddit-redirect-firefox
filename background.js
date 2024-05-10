browser.webNavigation.onBeforeNavigate.addListener(async (details) => {

    // Access the current URL, along with its pathname
    const { url } = details;
    const pathname = new URL(url).pathname;
    // console.log("Currently at: ", url);
    
    // Only redirect if the URL starts with "https://www.reddit.com" and isn't an SSO request
    if (url.startsWith("https://www.reddit.com") && !pathname.includes("account/sso/")) {
        // console.log("Confirmed redirect!\n");

        setTimeout(() => {
            // Modify the URL to redirect to "https://new.reddit.com/"
            const redirectUrl = url.replace("https://www.reddit.com/", "https://new.reddit.com/");
            
            // Redirect the navigation
            chrome.tabs.update(details.tabId, { url: redirectUrl });
        }, 10); // Delay in milliseconds (1000 ms = 1 second)
    }
});