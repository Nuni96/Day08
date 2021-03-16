var dress = "little dress";

function myDress() {
    var dress = "ball gown";
    
    return dress;
}

myDress();
dress=myDress();
console.log(dress);
module.exports = myDress;