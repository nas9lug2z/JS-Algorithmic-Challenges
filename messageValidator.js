function isAValidMessage(message) {
	let wordLength = message[0]; //3
	let word = '';
	let check = true;

	let isNumber = char => {
		if (char === undefined) {
			return false;
		} else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
			return true;
		} else {
			return false;
		}
	};

	let validate = word => {
		console.log(`validating ${word}`);
		if (word.length !== Number(wordLength)) {
			check = false;
			console.log(`check is ${check} for the word ${word}`);
		} else {
			check = true;
			word = '';
		}
	};

	for (let i = 0; i <= message.length; i++) {
		//extract first digit or two digits
		if (isNumber(message[i])) {
			if (isNumber(message[i - 1])) {
				validate(word);
				return check === false ? false : '';
				wordLength = message[i - 1] + message[i];
				console.log(`2 wordlength is set to ${wordLength}`);
			} else {
				validate(word);
				return check === false ? false : '';
				wordLength = message[i];
				console.log(`1 wordlength is set to ${wordLength}`);
			}
		}
		//if it is the last digit
		else if (message[i] === undefined) {
			validate(word);
			return check === false ? false : '';
		}
		//if it is a letter
		else {
			word += message[i];
			console.log(
				`word is set to ${wordLength} with the character ${message[i]}`
			);
		}
	}

	return true;
}

console.log(isAValidMessage('3hey5hello2hi5'));
