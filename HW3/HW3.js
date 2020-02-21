//Validation functions

function isValidNum(input){
    return typeof input === 'number' && !isNaN(input) && isFinite(input);
}
//Problem 1
function isValidPhoneNumber(str){
	str = str.trim();
	let newStr = str.replace(/ /g, '');
	if (newStr.length < 10) {
		return 'Bad number';
    	} else {
		if (newStr.length === 11 && newStr[0] === '+'){
		newStr = newStr.substring(1);
        }
	if (newStr.length === 10){
		for (let i = 0; i < newStr.length; i++){
 			if (!isValidNum(+newStr[i])){
				return 'Bad number';
            		}
          	}
        } else {
		return 'Bad number';
        }
	return newStr;
   	}
}
str = '+3395656888';
isValidPhoneNumber(str)


//Problem 2
function spellNumber(n){
	if (isValidNum(n)){
  		if ( n >= 0 && n <= 999999 ){
    			let count = 0, upTo20 = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
    			tens = [' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
    			others = [' hundred', ' thousand'], res = '', nClone = n;
			if ( n === 0){
			return res += 'zero';
    			}
    			while(nClone){
      				let lastDig = nClone%10;
      				nClone = (nClone - lastDig)/10;
      				count++;
    			}
    			if (count < 3){
				if (n < 20){
        				res += upTo20[n];
      				} else {
       					let lastDig = n%10;
       					n = (n - lastDig)/10;
       					res += tens[n-2] + upTo20[lastDig];
      				}
    			} else if (count === 3){
	 			 if ( n%100 < 20){
					let lastDig = n%100;
					n = (n - lastDig)/100;
	  				res = upTo20[n] + others[0] + upTo20[lastDig];
	  			} else {
      					let lastDig = n%10;
      					res += upTo20[lastDig];
      					n = (n - lastDig)/10;
      					lastDig = n%10;
      					res = tens[lastDig - 2] + res;
      					n = (n - lastDig)/10;
      					res = upTo20[n] + others[0] + res;
    				}
   			} else if ( count  === 4){
				if ( n%100 < 20){
					let lastDig = n%100;
					n = (n - lastDig)/100;
	  				res += upTo20[lastDig];
					lastDig = n%10;
					n = (n - lastDig)/10;
					res = upTo20[n] + others[1] + upTo20[lastDig] + others[0] + res;
	 			} else {
      					let lastDig = n%10;
      					res += upTo20[lastDig];
      					n = (n - lastDig)/10;
      					lastDig = n%10;
      					res = tens[lastDig - 2] + res; 
      					n = (n - lastDig)/10;
      					lastDig = n%10;
     				 	res = upTo20[lastDig] + others[0] + res;
      					n = (n - lastDig)/10;
      					res = upTo20[n] + others[1] + res;
    				}
   			} else if (count === 5){
				if ( n%100 < 20){
					let lastDig = n%100;
					n = (n - lastDig)/100;
	  				res += upTo20[lastDig];
					lastDig = n%10; 
					res = upTo20[lastDig] + others[0] + res;
					n = (n - lastDig)/10;
					if (n < 20){
						res = upTo20[n] + others[1] + res;
        				} else {
						let lastDig = n%10;
						n = (n - lastDig)/10;
						res = tens[n - 2] + upTo20[lastDig] + others[1] + res;
	  				}
        			} else {
     					let lastDig = n%10;
	    				res += upTo20[lastDig];
    					n = (n - lastDig)/10;
   	   				lastDig = n%10;
      					res = tens[lastDig - 2] + res;
      					n = (n - lastDig)/10;
      					lastDig = n%10;
      					res = upTo20[lastDig] + others[0] + res;
      					n = (n - lastDig)/10;
					if (n < 20){
						res = upTo20[n] + others[1] + res;
        				} else {
						let lastDig = n%10;
						n = (n - lastDig)/10;
						res = tens[n - 2] + upTo20[lastDig] + others[1] + res;
	  				}
				}
    			} else if (count === 6){
				if ( n%100 < 20){
					let lastDig = n%100;
					n = (n - lastDig)/100;
	  				res += upTo20[lastDig];
					lastDig = n%10; 
					res = upTo20[lastDig] + others[0] + res;
					n = (n - lastDig)/10;
					lastDig = n%100;
					if (lastDig < 20){
						res = upTo20[lastDig] + others[1] + res;
        				} else {
						let lastDig1 = lastDig%10, lastDigClone = lastDig;
						lastDigClone = (lastDigClone - lastDig1)/10;
						res = tens[lastDigClone - 2] + upTo20[lastDig1] + others[1] + res;
	  				}
					n = (n - lastDig)/100;
					res = upTo20[n] + others[0] + res;
    				} else {
     		 			let lastDig = n%10;
      					res += upTo20[lastDig];
      					n = (n - lastDig)/10;
      					lastDig = n%10;
      					res = tens[lastDig - 2] + res;
      					n = (n - lastDig)/10;
           				lastDig = n%10;
           				res = upTo20[lastDig] + others[0] + res;
            				n = (n - lastDig)/10;
					lastDig = n%100;
					if (lastDig < 20){
						res = upTo20[lastDig] + others[1] + res;
        				} else {
						let lastDig1 = lastDig%10, lastDigClone = lastDig;
						lastDigClone = (lastDigClone - lastDig1)/10;
						res = tens[lastDigClone - 2] + upTo20[lastDig1] + others[1] + res;
		  			}
					n = (n - lastDig)/100;
					res = upTo20[n] + others[0] + res;
 			   	}
  			}
			let finalRes = res.slice(1);
			return finalRes;
 	 	} else {
  	 		return 'Given number is either negative or is 1mln and more. Please, check!';
    		}
 	} else {
  		return 'invalid input';
 	}
}
spellNumber(873592);

//Problem 3
function isPasswordValid(str){
	if (str.length < 6 ){
		return 'Invalid. Too short.';
    } else if (str.length > 16){
		return 'Invalid. Too long.';
	} else {
		let upCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		let lowCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		let nums = [0,1,2,3,4,5,6,7,8,9];
		let chars = ['$','#','@'];
		let countUp = countLow = countNum = countChars = 0;
		for (let i = 0; i < str.length; i++){
			if (upCaseLetters.includes(str[i])){
				countUp += 1;
            }
			if (lowCaseLetters.includes(str[i])){
				countLow += 1;
    		}
			if (nums.includes(+str[i])){
				countNum += 1;
        	}
			if (chars.includes(str[i])){
				countChars +=1;
        	}
        }
		if (countUp === 0){
			return 'Invalid. Upper case letter is missing';
		}
		if (countLow === 0){
			return 'Invalid. Lower case letter is missing';
    	}
		if (countNum === 0){
			return 'Invalid. Number is missing';
        }		
        if (countChars === 0){
			return 'Invalid. Character is missing';
        }
		return 'Valid';
	}
}
isPasswordValid('Aaza1234566#');