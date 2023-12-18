// app.js

function generateLearningPlan() {
    const userInput = document.getElementById('userInput').value;
    const resultBlock = document.getElementById('resultBlock');
  
    fetch('http://localhost:3000/generateLearningPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    })
      .then(response => response.json())
      .then(data => {
        const learningPlan = data.result;
        resultBlock.innerHTML = `<strong>Learning Plan:</strong><br>${learningPlan}`;
        resultBlock.style.display = 'block';
      })
      .catch(error => console.error('Error:', error));
  }
  