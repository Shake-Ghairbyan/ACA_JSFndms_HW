function isValidNum(input){
    return typeof input === 'number' && !isNaN(input) && isFinite(input);
}
//Problem 1

function identifyIfPrime(n){
	if (isValidNum(n)){
		if ( n <=1 ) {
			return 'no';
		} else {
			for (let i = 2; i <= n/2; i++) {
				if (n%i === 0 ) {
					return 'no';
				}
			}
		return 'yes';
		}
	} else {
		return 'invalid input of number.';
    }
}
identifyIfPrime(1);

//Problem 2

function sumOfGivenSeq(n) {
	if (isValidNum(n)){
		let sum = 0, firstValue = 0;
		for (let i = 0; (2*i + 1) <= n; i++ ) {
			firstValue = (-1)**i * 1/(2*i + 1);
			sum += firstValue;
    	}
		return sum;
	}
}
let n = 3;
alert(sumOfGivenSeq(n));


//Problem 3
function calcNegNum(arr){
	let  arrOfSums = [];
	let sum = 0;
	if (Array.isArray(arr) && arr.length !== 0) {
		for (let i = 0; i < arr.length; i++ ){
			if (Array.isArray(arr[i])) {
				for (let j = 0; j < arr[i].length; j++){
					if (isValidNum(arr[i][j])) {
						sum+= arr[i][j];
                    			}
        		}
				arrOfSums.push(sum);
				sum = 0;
        	} else {
				return 'Array element is not array.';
    		}
        }
		return arrOfSums;
	} else {
		return 'Invalid argument or array is empty';
    }
}
let arr1 = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
alert(calcNegNum(arr1));

// Problem 4

	//Version 1

function printPattern(n){
	if (isValidNum(n)) {
		let space = ' ', arr = ['*'];
		for (let j = 0; j < n - 2; j++) {
    		arr.push(space + arr[0]);
      	}
  		let arr1 = [...arr];
  		for (let i = 1; i < n - 2; i++){
    		arr1[i] = space + space;
    	}
  		for (let j = 0; j < n; j++) {
			if ( j === 0 || j === n - 1) {
				console.log(arr.join(' '));
			} else {
				console.log(arr1.join(' '));
			}
      	}
  	} else {
  		return 'invalid input';
  	}
}
printPattern(7);

	// version 2

function printRecPat(h, w) {
	if (isValidNum(h) && isValidNum(w)){
		let str = '', symb = '*', space = ' ';
		for (let i = 1; i <= h; i++){
			for (let j = 1; j <= w + 1; j++){
				if ( j === w + 1) {
					str += `\n`;
				} else if ( j === w ) {
					str += symb + space;
				} else {
					if (i === 1 || i === h || j === 1){
						str+= symb + space;
					} else {
						str+= space + space;
					}
				}
    		}
  		}
  		console.log(str);
	} else {
    	return 'invalid input/inputs';
	}
}
printRecPat(7,6);
	

//Problem 5
function changchar(str){
	if (typeof str === 'string') {
		let result = '';
		for (let i = 0; i < str.length; i += 3) {
			if (i + 3 < str.length) {
				let cutStr = str.substr(i, i+3);
				result += cutStr[1] + cutStr[2] + cutStr[0];
            } else {
				let cutStr = str.substr(i, str.length- i);
				result += cutStr;
			}
        }
		return result;
	} else {
		return 'Wrong! Input value is not string.';
	}	
}
let str1 = 'aweyoolp';
alert(changchar(str1));


//Problem 6

function printInDepth(n){
	if (isValidNum(n) && n > 0){
		let arr = [];
		for (let i = 1; i <= n; i++ ){
			arr[0] = i;
			for (let j = 1; j < i; j++){
				arr[j] = arr[j - 1] + n - j;
        	}
		console.log(arr.join(' '));
    	}
	} else {
		return 'invalid input';
	}
}
printInDepth(5);

