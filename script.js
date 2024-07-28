let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string ='';
let string1 ='';
buttonsArray.forEach(btn => {
    btn.addEventListener('click',(event)=>{

        if(event.target.value == 'DEL'){
            string1 =string.substring(0, string1.length-1);
            string =string.substring(0, string.length-1);
            display.value = string1;
        }

        else if(event.target.value == 'AC'){
            string1='';
            string='';
            display.value = string1;
        }
        else if(event.target.value == '='){
            string1='';
            string= eval(string);
            display.value = string;
        }
        
        else {
        string1 +=event.target.innerHTML;
        string += event.target.value;
        display.value = string1;
    
        }

    }
    );
    


});

