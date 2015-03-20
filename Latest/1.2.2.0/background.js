function interceptRequest(request) {
    var newUrl = request.url;
    newUrl = request.url.replace("http://jadi.net", "https://jadi.net")
        .replace("http://freekeyboard.net", "https://jadi.net")
        .replace("https://freekeyboard.net", "https://jadi.net");
    if (newUrl != request.url)
        return { redirectUrl: newUrl }
}
chrome.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['http://jadi.net/*', '*://freekeyboard.net/*'] }, ['blocking']);