class Dog {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.legsCount = 4;
        this.taleLength = 0.05;
        this.children = [];
        this.sound = 'au au';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my fur is ${this.furColor} an I speak like ${this.sound}!`);
    }
}

module.exports = Dog;