function bmi(weight, height) {
  const calc = weight/height/height
  return  calc <= 18.5 ? "Underweight"  :
          calc <= 25.0 ? "Normal"       :
          calc <= 30.0 ? "Overweight"   :
          "Obese";
}