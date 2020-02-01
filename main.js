class MyFirstClass{

    constructor(sayi1,sayi2){
        this.a=sayi1;
        this.sayi2=sayi2;
    }

    topla(){
        console.log(this.a+this.sayi2);
    }

}

let myFClass = new MyFirstClass(3,2);
myFClass.topla();

let myFClass2 = new MyFirstClass(1,2);
myFClass2.topla();


function topla(sayi1,sayi2){
    sayi1+sayi2;
    a=sayi1;
}