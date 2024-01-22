function calculateBMI() {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (weight <= 0 || height <= 0) {
    alert('Please enter valid values for weight and height.');
    return;
  }

  // FORMULA
  let bmi = weight / Math.pow(height, 2);

  // Display the result
  let resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);

  // Determine BMI category
  if (bmi < 17) {
    resultElement.className = 'underweight';
    resultElement.innerHTML += '<br>You are underweight.';
  } else if (bmi >= 17 && bmi < 25) {
    resultElement.className = 'normal';
    resultElement.innerHTML += '<br>You have a normal weight.';
  } else if (bmi >= 25 && bmi < 30) {
    resultElement.className = 'overweight';
    resultElement.innerHTML += '<br>You are overweight.';
  } else {
    resultElement.className = 'obese';
    resultElement.innerHTML += '<br>You are obese.';
  }
}
