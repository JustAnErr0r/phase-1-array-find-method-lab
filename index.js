//function = superbowlwin
// will find win condition
//will return year of win condition

//function revieves 1 arguement = array of objects
//object with two properties = year/result
//returns year when win
//if no win = undefined default?

function superbowlWin(smth){
    return smth.find(callBckFn).year
}

function callBckFn(element){
    //uses find to see if any obj is a "W"
    //use find() method
    if (element.result === "W") {
        return true;
    } else {
        return false;
    }
  }

const year = superbowlWin(record)