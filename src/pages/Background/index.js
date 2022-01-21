chrome.tabs.onActivated.addListener( function(activeInfo){
    chrome.tabs.get(activeInfo.tabId, function(tab){
        y = tab.url;
        console.log("you are here: "+y);
        fetch('http://localhost:8080/storeUrl', { body: JSON.stringify({url: y}), method: 'POST', headers: { 'Content-Type': 'application/json' } })
    });
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.active && change.url) {
        console.log("you are here: "+change.url); 
        fetch('http://localhost:8080/storeUrl', { body: JSON.stringify({url: change.url}), method: 'POST', headers: { 'Content-Type': 'application/json' } })          
    }
});
