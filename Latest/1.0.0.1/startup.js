var Sites = InitializeSites();
var OutSite = GetOutSite(window.location.hostname);
if (OutSite != "") {
    window.location.hostname = OutSite;
}