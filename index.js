// Create Array
let arNum = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let n = 0
        
        let nextInput = document.getElementById('nextInput');
        let calcbtn = document.getElementById('calcbtn');
    // addEventListener for button to function
    let counter =1
        calcbtn.addEventListener('click', function (){
            nextInput.value = counter++;
        })
        
       
        function displayNextNumber(){
            if(n < arNum.length){
                let next = arNum[n];
                n++
                
                nextInput.value = next
            }else{
                n = 0
            }
        }
     
