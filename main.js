const game = () => {
    // Get Buttons And Form
    const btns = document.querySelectorAll('.chooseFighter>input[type="button"]');
    const myForm = document.querySelector('.chooseFighter');
    const field = document.querySelector('.fields');
    const fields = document.querySelectorAll('.fields>div');
    const result = document.querySelector('.result');
    var play=true;
    var fieldsAvailable = [];
        fields.forEach(box=>{
            fieldsAvailable.push(box);
        });
    //  Get Player Fighter / Display Fields
    var player = '';
    const choose=()=>{
        btns.forEach(btn => {
            btn.addEventListener('click', ()=>{
                myForm.classList.toggle('fadeOut');
                // Sve Player Choice
                if(btn.value=="Circle"){
                    player = 'circle';
                }   else{
                    player = 'cross';
                }
                setTimeout(function(){myForm.classList.toggle('disappear')}, 200);
                setTimeout(function(){field.classList.toggle('fadeIn')}, 200);
                // If Player Chose cross, Draw Circle
                if(player=='cross'){
                    var randIndex = Math.floor(Math.random() * fieldsAvailable.length);
                    fieldsAvailable[randIndex].classList.toggle('circleBck');
                    fieldsAvailable.splice(randIndex,1);
                }
            });
        });
    }

    // Computer
    const compMove=()=>{
        var randIndex2 = Math.floor(Math.random() * fieldsAvailable.length);
        if(player=='cross')  fieldsAvailable[randIndex2].classList.toggle('circleBck');
        if(player=='circle'){ 
            if(fieldsAvailable.length>=1)fieldsAvailable[randIndex2].classList.toggle('crossBck');
        }
        fieldsAvailable.splice(randIndex2,1);
        check();
    }  

    // Clicking
    const clicking=()=>{
        fields.forEach(box =>{
            box.addEventListener('click',()=>{
                if((fieldsAvailable.indexOf(box) != -1)&&play==true){   
                    // Draw
                    if(player=="circle")box.classList.toggle('circleBck');
                    if(player=='cross')box.classList.toggle('crossBck');
                    // Delete
                    fieldsAvailable.splice(fieldsAvailable.indexOf(box),1);
                    check();
                   // Computer Move
                   if(play==true)compMove();
                   
                }
            }); 
        });
    }   

    // Won And Lost Functions
    const won=()=>{
        result.innerHTML='<h1>You Won!!!</h1>';
        play=false;
    }
    const lost=()=>{
        result.innerHTML='<h1 style="color:red;">You Lost!!!</h1>';
        play=false;
    }

    // Check
    const check=()=>{
        // Get All Fields
        var x1 = fields[0].className;
        var x2 = fields[1].className;
        var x3 = fields[2].className;
        var x4 = fields[3].className;
        var x5 = fields[4].className;
        var x6 = fields[5].className;
        var x7 = fields[6].className;
        var x8 = fields[7].className;
        var x9 = fields[8].className;
        // Conditions :)))
        if((x1==x2 && x2==x3)){
            if((player=='circle' && x1=='circleBck')||(player=='cross' && x1=='crossBck')){
                won();
            }   else if((player=='circle' && x1=='crossBck')||(player=='cross' && x1=='circleBck')){
                lost();
            }   
        }   
        if((x4==x5 && x5==x6)){
            if((player=='circle' && x4=='circleBck')||(player=='cross' && x4=='crossBck')){
                won();
            }   else if((player=='circle' && x4=='crossBck')||(player=='cross' && x4=='circleBck')){
                lost();
            }   
        }
        if((x7==x8 && x8==x9)){
            if((player=='circle' && x7=='circleBck')||(player=='cross' && x7=='crossBck')){
                won();
            }   else if((player=='circle' && x7=='crossBck')||(player=='cross' && x7=='circleBck')){
                lost();
            }   
        }
        if((x1==x4 && x4==x7)){
            if((player=='circle' && x1=='circleBck')||(player=='cross' && x1=='crossBck')){
                won();
            }   else if((player=='circle' && x1=='crossBck')||(player=='cross' && x1=='circleBck')){
                lost();
            }   
        }
        if((x2==x5 && x5==x8)){
            if((player=='circle' && x2=='circleBck')||(player=='cross' && x2=='crossBck')){
                won();
            }   else if((player=='circle' && x2=='crossBck')||(player=='cross' && x2=='circleBck')){
                lost();
            }   
        }
        if((x3==x6 && x6==x9)){
            if((player=='circle' && x3=='circleBck')||(player=='cross' && x3=='crossBck')){
                won();
            }   else if((player=='circle' && x3=='crossBck')||(player=='cross' && x3=='circleBck')){
                lost();
            }   
        }
        if((x1==x5 && x5==x9)){
            if((player=='circle' && x1=='circleBck')||(player=='cross' && x1=='crossBck')){
                won();
            }   else if((player=='circle' && x1=='crossBck')||(player=='cross' && x1=='circleBck')){
                lost();
            }   
        }
        if((x3==x5 && x5==x7)){
            if((player=='circle' && x3=='circleBck')||(player=='cross' && x3=='crossBck')){
                won();
            }   else if((player=='circle' && x3=='crossBck')||(player=='cross' && x3=='circleBck')){
                lost();
            }   
        }
        
    }

    // Game
    choose();
    clicking();
}
game();