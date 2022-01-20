

console.log('howdy doody')
chrome.tabs.onUpdated.addListener( async function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
      const tabs = await chrome.tabs.query({active: true, currentWindow: true})
      console.log(tabs);
      fetch('https://localhost:8080/checkBackground')
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