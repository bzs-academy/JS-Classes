class MyFirstClass{

    constructor(number1,number2){
        this.a=number1;
        this.number2=number2;
    }

    topla(number3){
        console.log(this.a+this.number2+number3);
    }

}



let myFClass = new MyFirstClass(3,2);
myFClass.topla(2);

let myFClass2 = new MyFirstClass(1,2);
myFClass2.topla();


function sum(number1,number2){
    return (number1+number2);
}

console.log(sum(1,2));

//Inheritance
class CoffeeMachine {

    constructor(brand, status){
        this.brand = brand;
        this.status = status;
    }

    powerSwitch(){
        return(`${this.brand} coffee machine is ${this.status}`);
    }

}


class EspressoMachine extends CoffeeMachine {

    steam(){
        
        return(super.powerSwitch() + ' Coffee with steam');
    }

    powerSwitch(){
        alert(`${this.brand} espresso machine is ${this.status}`);
    }

}

let espresso = new EspressoMachine('BZS', 'on');
alert(espresso.steam());
//espresso.powerSwitch();


let coffeMachine = new CoffeeMachine('Tefal', 'on');

alert(coffeMachine.powerSwitch());
//Uncaught TypeError: coffeMachine.steam is not a function
//alert(coffeMachine.steam());



