
document.addEventListener("DOMContentLoaded", context);

function context(requestDetails){
  newFilter = prompt("Enter Context :");
  console.log("New filter added!!  "+newFilter);
  var sending = browser.runtime.sendMessage( {changed : true, context:context} );
}
