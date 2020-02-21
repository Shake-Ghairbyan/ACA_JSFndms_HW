//Validation functions

function isValidArr(arr){
	return Array.isArray(arr) && arr.length !== 0; // estex chem hishum arrayi hamar einq stugum vor null el chlini ?
}

function isValidNum(input){
    return typeof input === 'number' && !isNaN(input) && isFinite(input);
}

//Problem 1

function isValidChikInp(str){
	return str === 'Scissors' || str === 'Paper' || str === 'Rock';
}

function gameChkOutput(){
	let s ='Scissors', p ='Paper', r ='Rock';
	while (true){
		let inp1 = prompt('Please, player 1, enter value for Rock-Paper-Scissors game by choosing one of the following options','Rock/Paper/Scissors');
		let inp2 = prompt('Please, player 2, enter value for Rock-Paper-Scissors game by choosing one of the following options','Rock/Paper/Scissors');		
		if (isValidChikInp(inp1) && isValidChikInp(inp2)){
			if (inp1 === inp2){
				alert('Draw! Enter new values')
			} else if(inp1 === s && inp2 === p || inp1 === r && inp2 === s || inp1 === p && inp2 === r){
				return '1st player wins';
			} else {
				return '2nd player wins';
			}
		} else {
			alert('Invalid input, enter correct value');
		}
	}
}

alert(gameChkOutput())

//Problem 2

function printDigsinOrder(arr){
	if (isValidArr(arr)){
		if (arr.length < 100){
			arr.sort(function(a, b) { return a - b; });
			let max = arr[arr.length - 1];
			for (let i = arr[0], j = 0; i <= max; i++, j++){
				if (arr[j] !== i){
					arr.splice(j, 0, undefined);
				}
			}
      		return arr;
		} else {
			return 'Array must be of a size smaller than 100.';
		}
  	} else {
		return 'invalid input';
  	}
}
let arr = [4, 3, 0, 9];
printDigsinOrder(arr);

//Problem 3

function isEmpty(obj){
	for (let key in obj) {
		return false;
	}
	return true;
}

let obj = {};
alert(isEmpty(obj));

//Problem 4

function sumAllAges(obj){
	let sum = 0;
	for (let key in obj) {
		if (isValidNum(obj[key])){
		sum += obj[key];
        	}
	}
	return sum;
}
const obj = {
	Aram: 20,
	Samvel : 15
};
sumAllAges(obj);

//Problem 5
function multiplyNumeric(obj){
	for (let key in obj) {
		if (isValidNum(obj[key])){
		    obj[key] *= 2;
        }
	}
	return obj;
}
const obj = {
	age: 20,
	salery : 1500,
	name: 'Aram'
};
multiplyNumeric(obj);

//Problem 6 
function findMinForArray(arr){
	if (isValidArr(arr)){
		let sum = 0, result = 0;
		for (let i = 0; i < arr.length; i++){
			if (isValidNum(arr[i])){
				sum += arr[i];
			}
		}
		return result = -sum + 1;
	} else {
		return 'invalid input for array OR array is empty.'
	}
}
const arr = [-2, 3, 4, 8, -12];
findMinForArray(arr);

	