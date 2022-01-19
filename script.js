//ts-script check

var butArr = new Array(); 

 insertEmpty=(width) =>{
    var blank = document.createElement("div");
    blank.style.gridColumn = `span${width}`;
    blank.style.padding = '40px'
    grid.appendChild(blank);
}

function createButton(id, displayText, length, color){

    var button = document.createElement("button");
    button.innerHTML = id;
    button.id = id;
    if (color != undefined){
        button.style.backgroundColor = color;
    }
    if(length != undefined){
        //button.style.width = ((length*32), "px");
        button.style.padding =(`15px ${32*length}px`);
        button.style.textAlign = "center";
        button.style.gridColumn = `span ${length}`
    }


    button.classList.add("button");
    button.onclick  = editDisplay=()=>{
        if(display.value != "0"){
            display.value += displayText;

        }else{
            display.value = displayText;
        }

    };


    grid.appendChild(button);
    butArr.push(button);
}


display = document.getElementById("display");
var grid = document.getElementById("grid");








//insertEmpty(3);

//createButton("clear", "C", 3, '#638dfe');



//createButton(0, 0);
//createButton("decPoint", ".");

