const message1 = [0, 1, 2, 3]; 
const message2 = [4, 5, 6]; 
const message3 = [7, 8, 9, 10, 11]; 

const getRandomNumber = (val) => {
    return Math.round(Math.random()*val.length); 
}

const messageMixer = () => {
    const finalMessage = [];
    let i = 1; 
    while(i <= 3){
        let arr = eval('message' + i);
        finalMessage.push(arr[getRandomNumber(arr)]);
        i++;
    }
    console.log(finalMessage.join(' '));
}

messageMixer();