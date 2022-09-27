console.log(5);

class BMI {
    //constructor used to 
    // intilaize data in class

    constructor(weight, height){
        this.weight = weight;
        this.height = height;


    

    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }


}

let myBMI = new BMI(2,100);
console.log(myBMI.calculateBMI());
