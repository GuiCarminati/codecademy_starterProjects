  
const randomIndex = (array) => Math.floor(Math.random() * array.length-1);

class School {
    constructor(name,level,numberOfStudents){
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    get name(){ return this._name }
    get level(){ return this._level }
    get numberOfStudents(){ return this._numberOfStudents }
    set numberOfStudents(num){
      if(typeof num === 'number'){
        this._numberOfStudents = num;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
      
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      return substituteTeachers[randomIndex(substituteTeachers)];
    }
  }
  
  class Primary extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,'primary',numberOfStudents);
      this._pickUpPolicy = pickupPolicy;
    }
    get pickupPolicy() { return this._pickUpPolicy }
    set pickupPolicy(policy) { 
      this._pickUpPolicy = policy 
    }
  
  }
  
  class Middle extends School{
    constructor(name,numberOfStudents){
      super(name,'middle',numberOfStudents);
    }
  }
  
  class High extends School{
    constructor(name,numberOfStudents,sportsTeams){
      super(name,'high',numberOfStudents);
      this._sportsTeams = sportsTeams ;
    }
    get sportsTeams() { return this._sportsTeams }
    set sportsTeams(teams) {
      this._sportsTeams = teams;
    }
  
  
  }


const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

const listOfSubs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const chosenSub = Primary.pickSubstituteTeacher(listOfSubs);
console.log(chosenSub);

const alSmith = new High('Al E. Smith', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

