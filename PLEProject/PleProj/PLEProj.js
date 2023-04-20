// my project is a petstore made in Javscript. I used no code directly from my tutorial for this. 
// it is a pet store interface
const prompt = require('prompt-sync')();
class AnimalAdopt {
    constructor(petID, name, age, gender, species, breed){
        this.petID = petID;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = species;
        this.breed = breed;
    }
    adopt() {
     console.log(this.name, "is happy to go to you! \n");
     console.log("They will be awaiting your pickup");
    }
}
class ExoticAdopt extends AnimalAdopt {      
    warning(){
        console.log("Warning: This animal could be dangerous!! \n");
        console.log("Precaution should be taken when taken care of\n");
    } 
}
// creation of normal pets
const charlie = new AnimalAdopt(1,"Charlie", 4, "M", "Dog", "Chocolate Lab");
const mittens = new AnimalAdopt(2,"Mittens", 2, "F", "Cat", "Mix");
const gerald = new AnimalAdopt(3,"Gerald", 7, "M", "Cat", "Black Cat");
const soup = new AnimalAdopt(4,"Soup", 10, "F", "Dog", "Poodle");
const phillip = new AnimalAdopt(5,"Phillip", 3, "M", "Dog", "Pug");
const joe = new AnimalAdopt(6,"Joe", 1, "M", "Cat", "Maine Coon");
const meowster = new AnimalAdopt(7,"Meowster", 6, "F", "Dog", "Black Lab");
const barker = new AnimalAdopt(8,"Barker", 2, "M", "Dog", "Ragdoll");
const lili = new AnimalAdopt(9,"Lili", 4, "F", "Dog", "German Shepard");
const roy = new AnimalAdopt(10,"Roy", 3, "M", "Dog", "Birman");
const sweetie = new AnimalAdopt(11,"Sweetie", 7, "F", "Cat", "Calico");
const scooby = new AnimalAdopt(12, "Scooby", 6, "M", "Dog", "Great Dane");
// create array of normal pets
const normalPetArr = [charlie, mittens, gerald, soup, phillip, joe, meowster, barker, lili, roy, sweetie, scooby];
// creation of exotics
const bitey = new ExoticAdopt(13,"Bitey", 4, "M", "Snake", "Cobra");
const pinky = new ExoticAdopt(14,"Pinky", 8, "F", "Chinchilla", "N/A");
const luna = new ExoticAdopt(15, "Luna", 2, "F", "Squirrel", "Flying");
const apollo = new ExoticAdopt(16,"Apollo", 1, "M", "Dik Dik", "N/A");
const zeus = new ExoticAdopt(17,"Zeus", 9, "M", "Capybara", "N/A");
const bear = new ExoticAdopt(18,"Bear", 3, "M", "Possum", "N/A");
const tinker = new ExoticAdopt(19,"Tinker", 7, "F", "Jerboa", "N/A");
const triton = new ExoticAdopt(20,"Triton", 1, "M", "Capybara", "Chocolate Lab");
const daisy = new ExoticAdopt(21,"Daisy", 6, "F", "Stingray", "N/A");
const hermes = new ExoticAdopt(22,"Hermes", 9, "F", "Shark", "Tresher");
const kobey = new ExoticAdopt(23,"Kobey", 5, "M", "Fox", "N/A");
const owen = new ExoticAdopt(24,"Owen", 7, "M", "Fish", "Pufferfish");
//create array of exotic pets
const exoticPetArray = [bitey, pinky, luna, apollo, zeus, bear, tinker, triton, daisy, hermes, kobey, owen];
//create array of all pets
const allArray = [charlie, mittens, gerald, soup, phillip, joe, meowster, barker, lili, roy, sweetie, scooby, bitey, pinky, luna, apollo, zeus, bear, tinker, triton, daisy, hermes, kobey, owen];
// loop de loop and pull
var choice = 0;
// do while loop
do
{
    //variables for loop use
    var choice = 0;
    var subchoice = 0;
    var idChoice = 0;
    var genderChoice = "";
    var speciesChoice = "";
    var nameChoice = "";
    console.log("\nChandler's Pet Adoptions Home Page\n")
    console.log("1.) View List of Available Animals [1] ");
    console.log("2.) Choose To Adopt [2]");
    console.log("3.) Filtered List View [3] ");
    console.log("4.) Store Information [4]");
    console.log("To exit the store, please enter [5]\n ");
    choice = prompt("Insert your choice:");
    if (choice == 1) {
        console.log("\n Welcome To The List Page!");
        console.log("What kind of pet are you interested in?");
        console.log("1.) Regular Household Pet");
        console.log("2.) Exotic Pet");
        console.log("3.) All Pets");
        subchoice = prompt("Insert your choice:");
        console.log("\n");

        if (subchoice == 1){
            console.log("Normal Pet Adopt List:")
            normalPetArr.forEach(function (pet) {
                console.log(pet.name + ":", pet.species +",", pet.breed);
            });
            subchoice = 0;
            console.log(" Back to Main Screen! \n");
    }
        if (subchoice == 2){
            console.log("Exotic Pet Adopt List:")
            exoticPetArray.forEach(function (exoPet) {
            console.log(exoPet.name + ":", exoPet.species +",", exoPet.breed);
            });
            subchoice = 0;
            console.log(" Back to Main Screen! \n");
            }
        if (subchoice == 3){
            console.log("Pet Adopt List:")
            allArray.forEach(function (pet) {
                console.log(pet.name + ":", pet.species +",", pet.breed);
                });
                subchoice = 0;
                console.log(" Back to Main Screen! \n");
                }
    }
    if (choice == 2){
        console.log("\n Welcome To The Adoption Page!");
        console.log("What kind of pet are you interested in?");
        console.log("1.) Regular Household Pet");
        console.log("2.) Exotic Pet");
        subchoice = prompt("Insert your choice:");
        console.log("\n");
        if (subchoice == 1){
            idChoice = prompt("Please input the ID number of the pet you want to adopt:");
            normalPetArr.forEach(function (pet) {
                if(idChoice == pet.petID){
                    console.log("You have chosen to adopt:", pet.name);
                    pet.adopt();
                }
            });
            console.log("Thank you for adopting!");
            break;
        }
        if (subchoice == 2){
            idChoice = prompt("Please input the ID number of the pet you want to adopt:");
            exoticPetArray.forEach(function (exoPet) {
                if(idChoice == exoPet.petID){
                    console.log("You have chosen to adopt:", exoPet.name);
                    exoPet.warning();
                    exoPet.adopt();
                }
            });
            console.log("Thank you for adopting!");
            break;
        }
    }
    if (choice == 3){
        console.log("\n Welcome To The Filter Page!");
        console.log("Select the filter you want to search by");
        console.log("1.) Species Filter");
        console.log("2.) Gender Filter");
        console.log("3.) Name Filter");
        subchoice = prompt("Insert your choice:");
        console.log("\n");
        if (subchoice == 1){
            speciesChoice = prompt("Please input the species you want to filter by:");
            allArray.forEach(function (pet) {
                if(speciesChoice == pet.species){
                    console.log(pet.name + ":", pet.species +",", pet.breed);
                }
            });
            subchoice = 0;
            console.log(" Back to Main Screen! \n");
                }
        }
        if (subchoice == 2){
            idChoice = prompt("Please input the gender you want to filter by:");
            allArray.forEach(function (pet) {
                if(genderChoice == pet.gender){
                    console.log(pet.name + ":", pet.species +",", pet.breed);
                }
            });
            subchoice = 0;
            console.log(" Back to Main Screen! \n");
        }
        if (subchoice == 3){
            nameChoice = prompt("Please input the name you want to filter by:");
            allArray.forEach(function (pet) {
                if(nameChoice == pet.name){
                        console.log(pet.name + ":", pet.species +",", pet.breed);
                }
            });
            subchoice = 0;
            console.log(" Back to Main Screen! \n");
        }
        if (choice == 4) {
            console.log("\n Welcome To The Information Page!");
            console.log("We are a non-profit organization focused on helping all animals find good");
            console.log("Below, you can find information on the types of pets we may have available for you!")
            console.log("1.) Regular Household Pet");
            console.log("2.) Exotic Pet");
            subchoice = prompt("Insert your choice:");
            console.log("\n");
            if (subchoice == 1){
                console.log("Normal Pet Adopts:")
                console.log("We offer many different types of animals here.")
                console.log("Adoptions require a proof of ID when you come to pick them up!")
        }
            if (subchoice == 2){
                console.log("Exotic Pet Adopts:")
                console.log("We offer many different types of animals here.")
                console.log("Adoptions for these require a proof of ID and a background check when you come to pick them up!")
                }
        }
    if (choice == 5){
        console.log("Thank you for giving our animals a chance!");
    }
}
 while(choice != 5); 