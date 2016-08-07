/*
Problem: Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.
*/

var nextBinary = function(bin) {
	var binString = bin.toString();
	var i = binString.length -1;
	while (i > 0) {
		if (binString[i] === '1') break;
		else i -= 1;
	}
	while (i > 0) {
		if (binString[i] === '0') break;
		else i -= 1;
	}
	var newString;
	if (binString[i] === '1') {
		newString = '10';
		count = 0;
	}
	else {
		count = -1;
		newString  = binString.substr(0, i) + '1';
	}
	for (var j = i + 1; j < binString.length; j ++) {
		newString += '0';
		if (binString[j] === '1') count += 1;
	}
	newString = newString.substr(0, newString.length - count);
	while (count > 0) {
		newString += '1';
		count --;
	}
	return newString;
};

var prevBinary = function(bin) {
	var binString = bin.toString();
	var i = binString.length -1;
	while (i > 0) {
		if (binString[i] === '0') break;
		else i -= 1;
	}
	if (i === 0) {
		throw new Error('No smaller numbers possible');
	}
	while (i > 0) {
		if (binString[i] === '1') break;
		else i -= 1;
	}
	var count = 0;
	var newString  = binString.substr(0, i) + '0';
	for (var j = i + 1; j < binString.length; j ++) {
		newString += '1';
		if (binString[j] === '1') count += 1;
	}
	newString = newString.substr(0, newString.length - count);
	while (count > 0) {
		newString += '0';
		count --;
	}
	if (newString[0] === '0') newString = newString.slice(1);
	return newString;
};