function calculateBMI() {
    // Get the weight and height values from the input fields
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    // Convert height from cm to meters
    height = height / 100;

    // Calculate the BMI
    let bmi = weight / (height * height);

    // Determine the BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the result 
    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;

    // this comment is update in Ui branch
}
