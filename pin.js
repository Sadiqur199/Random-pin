function generatePin()
{
  const creatPin = Math.round(Math.random()*100000);
  return creatPin;
}
function creatpin()
{
  const updatepin = generatePin()+'';
  if (updatepin.length === 4)
  {
     return updatepin;
  }
  else{
    return creatpin();
  }

}

document.getElementById('generate-pin').addEventListener('click',function(){
  const pin = creatpin();
  console.log(pin);
 const inputField = document.getElementById('input-field');
 const inputFieldString = inputField.value;
 const inputFieldValue = parseInt(inputFieldString);
 inputField.value = pin;

})


document.getElementById('calculetor').addEventListener('click',function(event){
      const number = event.target.innerText;
      const typeNumber = document.getElementById('types-number');
      const typeNumberValue = typeNumber.value;
      
      if(isNaN(number))
      {
         if(number == 'C')
         {
           typeNumber.value = '';
         }
         else if(number === '<'){
           const digits  =    typeNumberValue.split('');
           digits.pop();
           const remainingNumber = digits.join('');
           typeNumber.value = remainingNumber;

         }
      }
      else{
            const newTypeNumber =  typeNumberValue +number;
            typeNumber.value = newTypeNumber;
      }
})


document.getElementById('submit-Btn').addEventListener('click',function(){
  const inputField = document.getElementById('input-field');
  const inputFieldString = inputField.value;
  const typeNumber = document.getElementById('types-number');
  const typeNumberValue = typeNumber.value;
  const correctPin = document.getElementById('correct-pin');
  const incorrectPin = document.getElementById('incorrect-pin');
  if(inputFieldString == typeNumberValue)
  {
    correctPin.style.display = 'block';
    incorrectPin.style.display = 'none';
    
  }
  else{
       
       incorrectPin.style.display = 'block';
       correctPin.style.display = 'none';
  }

})