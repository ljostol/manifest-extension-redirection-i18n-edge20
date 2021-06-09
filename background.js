chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: 'Lien URL ou Nom du fichier.html' });
});