const operations = ["+", "-", "*"];
let score = 0;
let correctAnswer = 0;

function generateQuestion() 
{
  const num1 = Math.floor(Math.random() * 11);
  const num2 = Math.floor(Math.random() * 11);
  
  const operation = operations[Math.floor(Math.random() * 3)];

  document.getElementById("question").textContent = `${num1} ${operation} ${num2}`;

  if (operation === "+") 
    correctAnswer = num1 + num2;
  else if (operation === "-") 
    correctAnswer = num1 - num2;
  else if (operation === "*") 
    correctAnswer = num1 * num2;
}

function checkAnswer() 
{
  const userAnswer = Number(document.getElementById("answer").value);
  const messageEl = document.getElementById("message");
  const isCorrect = userAnswer === correctAnswer;
  const prevAnswer = correctAnswer;

  generateQuestion();
  document.getElementById("answer").value = "";
  if (document.getElementById("answer").value === "") return;

  if (isCorrect) 
    {
    score++;
    document.getElementById("score").textContent = score;
    messageEl.style.color = "green";
    messageEl.textContent = "Correct!";
  } 
  else 
    {
    messageEl.style.color = "red";
    messageEl.textContent = `Wrong! Correct answer is ${prevAnswer}.`;
  }

  if (score >= 5) 
    {
    document.getElementById("div-questions").style.display = "none";
    document.getElementById("div-success").style.display = "block";
  }
}

function playAgain() 
{
  score = 0;
  document.getElementById("score").textContent = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("div-questions").style.display = "block";
  document.getElementById("div-success").style.display = "none";
  generateQuestion();
}

generateQuestion();