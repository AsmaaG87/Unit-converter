

 const convertBtn = document.getElementById('convert-btn');


 //length conversion functions
 const convertLength = (value) => {
    const meterToFeet = value * 3.281;
    const feetToMeter = value / 3.281;
    return `${value} meters = ${meterToFeet.toFixed(3)} feet | 
    ${value} feet = ${feetToMeter.toFixed(3)} meters`;
  }
 //volume conversion functions

 const convertVolume = (value) => {
    const litresToGallons = value * 0.264;
    const gallonsToLitres = value / 0.264;
    return `${value} litres = ${litresToGallons.toFixed(3)} gallons |
    ${value} gallons = ${gallonsToLitres.toFixed(3)} litres`;
 }
   //mass conversion functions
  const convertMass = (value) => {
    const kgToPounds = value * 2.204;
    const poundsToKg = value / 2.204;
    return `${value} kilograms = ${kgToPounds.toFixed(3)} pounds |
    ${value} pounds = ${poundsToKg.toFixed(3)} kilograms`;
 }
   // Event listener for the convert button
   convertBtn.addEventListener('click', () => {
    const value = parseFloat(document.getElementById('input-value').value);
    document.getElementById('length-result').textContent = convertLength(value);
    document.getElementById('volume-result').textContent = convertVolume(value);    
    document.getElementById('mass-result').textContent = convertMass(value);
    document.getElementById('input-value').value = ''; 
 });


