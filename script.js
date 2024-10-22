// script.js
function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    if (!day || !month || !year) {
      document.getElementById('result').innerText = 'Please enter a valid date.';
      return;
    }
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    if (age < 0) {
      document.getElementById('result').innerText = 'The birthdate is in the future!';
    } else {
      document.getElementById('result').innerText = `You are ${age} years old.`;
    }
  }
  