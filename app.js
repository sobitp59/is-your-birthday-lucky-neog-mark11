const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkDOBbtn = document.querySelector('.check-dob-btn');
const checkOutputPara = document.querySelector('.check-output');
const emojiOutput = document.querySelector('.emoji-output');

checkDOBbtn.addEventListener('click', function(){
    const DOBnumber = dateOfBirth.value.replaceAll("-","");
    const yourLuckyNumber = Number(luckyNumber.value);

    if(dateOfBirth.value === "" || luckyNumber.value === ""){
        checkOutputPara.textContent = 'you need to enter both fields'
    }else{
        let sum = 0;
        for(let i = 0; i < DOBnumber.length; i++){
             sum = sum + Number(DOBnumber.charAt(i)); 
        }
            if(sum % yourLuckyNumber === 0){
                checkOutputPara.textContent = `you have a lucky birthday`;
                emojiOutput.textContent = `🚀`;
            }else{
                checkOutputPara.textContent = `you haven't a lucky birthday, don't worry you can make your own luck`;    
                emojiOutput.textContent = `😄`;    
            }
    }    
});
