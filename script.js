

let textInput = document.getElementById("display-1");
let finalResult = document.getElementById("display-2");
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);


buttons.map(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.innerText)
        console.log(event.target.innerHTML);
       switch(event.target.innerText){

            case 'AC':
                textInput.innerText = '';
                finalResult.innerText = '0';
                break;
            case '=':
                try {
                    if((finalResult.innerText) % 1 != 0)
                    {
                        finalResult.innerText = (eval(textInput.innerText)).toPrecision(4);
                    }
                    else{
                        finalResult.innerText = (eval(textInput.innerText))
                    }
                }
                catch{
                    finalResult.innerText = 'Error!';
                }
                break;
           default: 
            textInput.innerText += event.target.innerText

       }
   
    });
})


/*
const displayButtonValue = () => {

    let figure = 0;
   
     if(!(btn2.length===0))
    {
         figure = textInput.innerText += btn2.innerText;
         console.log(btn2.innerText);
    }

    return figure;
       

     
     

}
btn1.addEventListener('click', displayButtonValue);
btn2.addEventListener('click', displayButtonValue);
*/