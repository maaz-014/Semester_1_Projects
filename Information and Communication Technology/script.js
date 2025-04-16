function openRegistrationForm() {
  document.getElementById("RegistrationForm").style.display = "block";
}

function closeRegistrationForm() {
  document.getElementById("RegistrationForm").style.display = "none";
}
function openPurchaseForm(){
  document.getElementById("PurchaseForm").style.display = "block";
}
function closePurchaseForm(){
  document.getElementById("PurchaseForm").style.display = "none";
}
function sendRegistrationmail() {
    
  let parms = {
    firstname: document.getElementById("Rfirstname").value,
    lastname: document.getElementById("Rlastname").value,
    email: document.getElementById("Remail").value,
    phone: document.getElementById("Rphoneno").value,
    game: document.getElementById("Rgames").value
};
  
  emailjs.send('GamersArena', 'template_st2nh93', parms)
      .then(function (response) {
          console.log('Email sent successfully!', response.status, response.text);
          
          window.location.href = 'thanks.html';
      })
      .catch(function (error) {
          console.error('Failed to send email:', error);
          alert('There was an error sending the email. Please try again later.');
      });
}
function sendTicketmail() {
    
  let parms = {
      firstname: document.getElementById("Pfirstname").value,
      lastname: document.getElementById("Plastname").value,
      email: document.getElementById("Pemail").value,
      nuid: document.getElementById("Pnuid").value,
      phone: document.getElementById("Pphoneno").value,
  };
  emailjs.send('GamersArena', 'template_ir691xx ', parms)
      .then(function (response) {
          console.log('Email sent successfully!', response.status, response.text);
          
          window.location.href = 'thanks.html';
      })
      .catch(function (error) {
          console.error('Failed to send email:', error);
          alert('There was an error sending the email. Please try again later.');
      });
}
