window.onload = function(){
  alert('fuck off')

  const emails = document.querySelectorAll('tr');
  console.log(emails);

  function openEmail() {
    console.log('click');
  }

  emails.forEach(email => email.addEventListener('click', openEmail));

};
