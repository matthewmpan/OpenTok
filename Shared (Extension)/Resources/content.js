if (window.location.href.includes('tiktok.com')) {
    let url = new URL(window.location.href);
    if (url.search) {
        // Only redirect if there are query parameters
        url.search = '';  // Remove query parameters
        window.location.replace(url.toString());
    }
}