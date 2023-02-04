/*
Water bottle saving idea
GUI that counts the amount of plastic you have saved from recycling water bottles –
or how much plastic you saved from ounces / liters of water drank from a metal bottle / reusable bottle
Level based on how much plastic you saved
Level 1 - 1000grams → star
Level 2 - 2000grams etc.
 */
const averagePlasticPerBottle = 20; //grams
const levels = ["Beginner", "Droplet", "Puddle", "Apprentice", "Enjoyer", "Trainer", "Wizard", "Bender", "Virtuoso", "Turtle's Best Friend"];
const levelThresholds = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
const userData = new Map();
const bottleByUser = new Map();
class Person {
    username;
    password;
    bottles;
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.bottles = 0;
    }

    increaseBottles() {         //On event button click to increase bottle count
        this.bottles++;
    }

    currentLevel() {            //Used for current level status (backend)
        for (let i = 0; i < levels.length; i++) {
            if (this.bottles <= levelThresholds[i]) {
                return i + 1;
            }
        }
    }
    currentPercent() {             //Used for progress bar
        return this.bottles / currentLevel();
    }

    calculateGramsPlasticSaved() { //Used for statistics
        return this.bottles * averagePlasticPerBottle;
    }

    getusername() {                 //Used for front end
        return this.username;
    }
    currentLevelString() {         //Used to display current level in string
        if (this.bottles < 0) {
            return "Turtle Killer";
        }
        for (let i = levels.length; i >= 0; i--) {
            if (this.bottles <= levelThresholds[i]) {
                return levels[i];
            }
        }
        return levels[levelThresholds.length - 1];
    }
}


const user1 = new Person("Tony", "1234");

var logintrue = prompt("Login? (y/n)");
if (logintrue === "y" || logintrue === "Y") {
    login(prompt("Username"), prompt("Password"));
} else {
    console.log("See Ya!")
}

function login(username, password) {
    if (userData.has(username) && password === userData.get(username)) {
        let currentBottles = bottleByUser.get(username);
        console.log("Login Successful " + currentBottles);
    } else if (userData.has(username) && password !== userData.get(username)) {
        console.log("Login Failed");
    } else {
        console.log("Do you want to create a new account?");
        let creation = prompt("Create a new account? (y/n)");
        if (creation === "y" || creation === "Y") {
            userData.set(username, password);
            bottleByUser.set(username, bottles);
            console.log("User created");
            login(username, password);
        } else {
            console.log("See Ya!")
        }
    }
}

login("Tony", "1234");
//Level -1 (Turtle Kill;er)
//Level 0 (Beginner)
//Level 1 (Water Droplet)
//Level 2 (Water Puddle)
//Level 3 (Water Muncher)
//Level 4 (Water Trainer)
//Level 5 (Water )
//Level 6 (Water )
//Level 7 (Water )
//Level 8 (Water )
//Level 9 (Water Shark)
//Level 10 (Water Wizard)
//Level 11 (Aqua Philosopher)
//Level 12 (Water Virtuoso)
//Level 13 (Water Bender)
//Level 14 (A Turtle's Best Friend)
//Level 11(What color is your water bottle?)
//