function interceptRequest(request) {
    var newUrl = request.url;
    newUrl = request.url.replace("://jadi.net", "://jadi2.undo.it").replace("://freekeyboard.net", "://jadi2.undo.it");
    return { redirectUrl: newUrl }
}
chrome.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['<all_urls>'] }, ['blocking']);