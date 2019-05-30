window.onload = function(){
  alert('fuck off')

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };
  const titleNode = document.querySelector('title');

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
    const titlesHTML = document.querySelectorAll('span.bqe')
    const emailTitles = new Set(Array.from(titlesHTML).map(title => title.innerText))
    console.log(emailTitles);
    for(let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        emailTitles.forEach(title => {
          if (titleNode.innerText.includes(title)) {
            console.log('yo');
            const body = document.body.innerText.toLowerCase()
            if (body.includes('unfortunately')) {
              console.log('we did it');
            }
          }
        })
        //console.log(body);
      } else if (mutation.type == 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
      }
    }
  }
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(titleNode, config);
};
