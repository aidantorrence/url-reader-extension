import io from "socket.io-client";

const socket = io("http://localhost:4000");

console.log('howdy doody')
chrome.tabs.onUpdated.addListener( async function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
      const tabs = await chrome.tabs.query({active: true, currentWindow: true})
      console.log('yoooo', tabs);
      socket.emit(`url: ${tabs[0].url}` );
      // fetch('http://localhost:8080/')
    // const timeout = setTimeout( async () => {
    // console.log('helo')
    // //     console.log('hello?')
    // //   console.log(await chrome.tabs.query({active: true, currentWindow: true}))
    // }, 1000 )

    // return clearTimeout(timeout);

//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   console.log(tab)
  }
})