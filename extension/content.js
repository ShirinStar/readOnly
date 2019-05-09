window.onload = function(){
  alert('fuck off')

  const titleNode = document.querySelector('title');
  console.log(titleNode);
  // Options for the observer (which mutations to observe)
  var config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  var callback = function(mutationsList, observer) {
      for(var mutation of mutationsList) {
          if (mutation.type == 'childList') {
              console.log('A child node has been added or removed.');
              console.log(titleNode);
          }
          else if (mutation.type == 'attributes') {
              console.log('The ' + mutation.attributeName + ' attribute was modified.');
          }
      }
  };

  // Create an observer instance linked to the callback function
  var observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(titleNode, config);

  // Later, you can stop observing

  console.log(firstTry);
};
