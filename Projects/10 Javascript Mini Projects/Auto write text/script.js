const text = `This is auto-write-text up which you are going to see.`;

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0,index);

    index++;

    if(index > text.length){
        index = 0;
    }
}

setInterval(writeText,100);