class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		let i = Math.sign(other.age - this.age),
				x = ["the same age as", "older than"][i] || "younger than";
		return `${other.name} is ${x} me.`;
	}
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
		
	compareAge(other) {
		if (this.age < other.age){
			return `${other.name} is older than me.`
		}else if (this.age > other.age){
			return `${other.name} is younger than me.`
		}else{
			return `${other.name} is the same age as me.`
		}
	}
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
		
	compareAge(other) {
		let s = other.age > this.age? " older than ": other.age == this.age?
				" the same age as ": " younger than "
		return other.name + " is" + s + "me."
	}
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
		
	compareAge(other) {
		let options = ['older than','the same age as','younger than'];
		let text = options[Math.sign(this.age - other.age) + 1];
		return `${other.name} is ${text} me.`;
	}
}

function preventChanges(obj) {
  // write your code here
	// don't use a return statement
	
	Object.freeze(obj);

  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}

const str = `({ one = 1, two } = { two : 2 }).toString()`

const drop = (arr, val = 1) => arr.slice(val);

const drop = (arr, val = 1) => {
	return arr.slice(val);
}

const drop = (arr, val = 1) => {
	return arr.slice(val, arr.length);
}

const drop = (a,v = 1) => a.slice(v);

const drop = (arr, val = 1) => arr.filter((a,i) => i >= val)

	return step === 0 ? 0 : 5 * step + 1;


function matchHouses(step) {
	if(step === 0) {
		return 0;
	}else{
		return (step*6)-(step -1);
	}
}

function matchHouses(step) {
	if (step) {
		return (step * 5) + 1;
	}
	return 0;
}

class Employee {
	constructor (firstname, lastname,email) {
		this.firstname = firstname
		this.lastname = lastname

	  	this.fullname = `${firstname} ${lastname}`;
		this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
}
}

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		// Complete the code!
	}
	
	get fullname() {
		return `${this.firstname} ${this.lastname}`;
	}
	
	get email() {
		return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
	}
}


function divisibleByB(a, b) {
	for(i = a + 1; i > a; i++){
		if(i % b === 0){
			return i;
		}
	}
}


function toInt(str) {
	return Number(str)
}

function toStr(int) {
	return String(int)
}


function toInt(str) {
	return str * 1;
}

function toStr(int) {
	return `${int}`;
}

function toInt(str) {
	return str-""
}

function toStr(int) {
	return int+""
}

function toInt(str) {
	return parseInt(str)
}

function toStr(int) {
	return int.toString()
	
}


function getFilename(path) {
	if(path.lastIndexOf('/')==-1) return path;
	else return path.slice(path.lastIndexOf('/')+1);
	
}