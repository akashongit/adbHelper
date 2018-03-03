// function logUrl(requestDetails)
// {
//
//   return {cancel : false}
// }

// function logURL(requestDetails) {
//   var fsending = browser.tabs.sendMessage( tab.id, {msg : false} );
// }

// browser.webRequest.onBeforeRequest.addListener(
//   logUrl,
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );

browser.runtime.onMessage.addListener(logUrl);


// function reboot(message)
// {
//   if (message.changed)
//   {
//
//     console.log(" url context returned!!!");
//
//   }
//
//
// }


function logUrl (requestDetails){
title_call = new XMLHttpRequest();
apiurl = "http://127.0.0.1:8080/logUrl?&url="+requestDetails.url+"&context="+context;
console.log("Ajax call to "+apiurl);
// svm_call.onreadystatechange = function() {
//   if (svm_call.readyState === 4) {
//     let context = JSON.parse(svm_call.response)
//     console.log("respone from server "+svm_call.response); //Outputs a DOMString by default
//     console.log("the context is "+context['context']);  }
// };

title_call.open('GET', url, false);

title_call.send({"url":requestDetails.url});
}
