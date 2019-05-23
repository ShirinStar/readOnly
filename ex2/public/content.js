window.onload = function(){
  alert('fuck off')

  let titleNode = document.querySelector('title');
  console.log(titleNode);
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
      for(let mutation of mutationsList) {
          if (mutation.type == 'childList') {
              console.log(titleNode);
              if (titleNode.includes('inbox')) {

              }
          }
          else if (mutation.type == 'attributes') {
              console.log('The ' + mutation.attributeName + ' attribute was modified.');
          }
      }
  };

  //const soup = new JSSoup(document);
  //console.log(soup);

  const observer = new MutationObserver(callback);

  observer.observe(titleNode, config);
};
