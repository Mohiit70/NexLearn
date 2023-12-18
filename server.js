const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIAPI } = require('./openai-api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/generateLearningPlan', async (req, res) => {
  const { userInput } = req.body;

  try {
    const learningPlan = await OpenAIAPI.generateLearningPlan(userInput);
    res.json({ result: learningPlan });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
