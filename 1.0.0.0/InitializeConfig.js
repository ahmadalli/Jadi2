//basic functions

function ValidURL(str) {
    if (str == "") {
        return false;

    }
    return true;
}

//be aware that when you use this method it just saves the data and the object's function and metadata will be lost
function SaveToLocalStorage(name, item) {
    localStorage.setItem(name, JSON.stringify(item));
}

function LoadFromLocalStorage(name) {
    try {
        return JSON.parse(localStorage[name]);
    }
    catch (err) { }
    return;
}

//Sites(Array) dependet functions

function InitializeSites() {
    var Sites = LoadFromLocalStorage("Sites");

    if (!(Sites instanceof Array)) {
        Sites = Array();
    }

    return Sites;
}

function GetSiteIndex(InSite) {
    for (var i = 0; i < Sites.length; i++) {
        if (Sites[i].In == InSite) {
            return i;
        }
    }
    return -1;
}

function GetOutSite(InSite) {
    var index = GetSiteIndex(InSite);
    if (index == -1) {
        return "";
    }
    return Sites[index].Out;
}

function AddToSites(In, Out) {

    if (!ValidURL(In) || !ValidURL(Out)) {
        return;
    }

    var Sites = LoadFromLocalStorage("Sites");

    if (!(Sites instanceof Array)) {
        Sites = Array();
    }

    var OutSite = GetOutSite(In);

    if (OutSite == Out) {
    }

    if (OutSite != Out) {
        if (OutSite == "") {
            Sites.push({ In: In, Out: Out });
        }
        else {
            var index = GetSiteIndex(In);
            Sites[i] = { In: In, Out: Out };
        }
    }

    SaveToLocalStorage("Sites", Sites);
}

function RemoveFromSites(In, Out) {
    if (!ValidURL(In) || !ValidURL(Out)) {
        for (var i = 0; i < Sites.length; i++) {
            if (Sites[i].In == In || Sites[i].Out == Out) {
                Sites.splice(i, 1);
            }
        }
    }

    if (ValidURL(In) || ValidURL(Out)) {
        for (var i = 0; i < Sites.length; i++) {
            if (Sites[i].In == In && Sites[i].Out == Out) {
                Sites.splice(i, 1);
            }
        }
    }
    SaveToLocalStorage("Sites", Sites);
}

// chrome.webRequest.onHeadersReceived.addListener(function(details) {
// if (details.tabId == -1)
// return; // Not related to any tab
// chrome.tabs.sendMessage(details.tabId, {
// statusLine: details.statusLine
// });
// }, {
// urls: ['*://*/*']
// }, ['responseHeaders']);

////beta testing
var Sites = InitializeSites();


AddToSites("jadi.net", "jadi2.undo.it");
AddToSites("freekeyboard.net", "jadi2.undo.it");
////end of beta testing