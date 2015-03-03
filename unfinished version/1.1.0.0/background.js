function interceptRequest(request) {
    console.log('onBeforeRequest ', request.url);
    if (request && request.url && request.url === 'http://jadi.net' || request.url == 'http://freekeyboard.net') {
        return { redirectUrl: 'http://jadi2.undo.it' }
    }
}
chrome.experimental.webRequest.onBeforeRequest.addListener(interceptRequest, null, ['blocking']);