class car{

    constructor(make, model, year) //creates objects for car
    {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    information(){
        console.log(`Make: ${this.make}`); // logs data for make, model, year of car
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

class cars extends car{ // extends cars class from parent class car
    constructor(make, model, year, doors)
    {
       super(make, model, year); // inherits make, model, year from parent class
        this.doors = doors;


    }

    information()
    {
        super.information(); 
        console.log(`Doors: ${this.doors}`)
    }
}

let myCar = new cars('VW', 'Golf', 2000, 5);
myCar.information();


