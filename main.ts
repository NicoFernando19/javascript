let obj: {
    name: string,
    className: string
} = {
    name: "Nico",
    className: 'paris'
}

console.log(obj)

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}


const employee: Employee = {
    name: "Jane Doe",
    age: 30,
    employeeId: 12345,
};

interface Animal {
    name: string;
    makeSound(): void;
}


class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Woof!");
    }
}