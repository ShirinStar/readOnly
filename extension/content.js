window.onload = function(){
  alert('fuck off')

  const titleNode = document.querySelector('title');
  console.log(titleNode);
  // Options for the observer (which mutations to observe)
  cost config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  cost callback = function(mutationsList, observer) {
      for(let mutation of mutationsList) {
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
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(titleNode, config);
};
