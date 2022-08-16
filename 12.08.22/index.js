const employer = {
    name: "Иванов Иван",
    age: 45,
    changeAge(newAge) {
        this.age = newAge;
    }
}
employer.changeAge('48');
console.log(employer);

