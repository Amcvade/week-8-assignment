// Define the Phone class/make and model
class Phone {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

// Define the Menu class
class Menu {
    constructor() {
        // Array to hold phones
        this.phones = [];
    }

    // Display the menu
    showMenu() {
        console.log("make");
        console.log("model");
        console.log("Delete a phone");
        console.log("Exit");
    }

    // Add a new phone
    addPhone() {
        let Make = prompt("Enter phone make:");
        let Model = prompt("Enter phone model:");
        let newPhone = new Phone(samsung, galaxy); // Create a new Phone object
        this.phones.push(newPhone); // Add it to the phones array
        console.log("Phone added:", newPhone);
    }

    // View all phones
    viewPhones() {
        if (this.phones.length === 0) {
            console.log("No phones available.");
        } else {
            console.log("Phones:");
            this.phones.forEach((phone, index) => {
                console.log(`${index + 1}: ${phone.make} - ${phone.model}`);
            });
        }
    }

    // Delete a phone
    deletePhone() {
        let index = prompt("Enter the number of the phone to delete (starting from 1):");
        index = parseInt(index) - 1; // Adjust for zero-based indexing
        if (index >= 0 && index < this.phones.length) {
            let removedPhone = this.phones.splice(index, 1); // Remove the phone from the array
            console.log("Deleted phone:", removedPhone[0]);
        } else {
            console.log("Invalid selection. No phone deleted.");
        }
    }

    // Start the menu
    start() {
        let choice;
        do {
            this.showMenu();
            choice = prompt("Enter your choice (1-4):");
            switch (choice) {
                case "1":
                    this.addPhone();
                    break;
                case "2":
                    this.viewPhones();
                    break;
                case "3":
                    this.deletePhone();
                    break;
                case "4":
                    console.log("Exiting the menu...");
                    break;
                default:
                    console.log("Invalid choice. Please select a valid option.");
            }
        } while (choice !== "4");
    }
}

// Instantiate the Menu class and invoke the start method
let menu = new Menu();
menu.start();
