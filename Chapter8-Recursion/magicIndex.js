/*
Problem: A magix index in an array A[0...n-1] is defined to be an index such that A[i] = i.
Given a sorted array of distince integers, write  a method to find a magic idnex, if one exists, in array A.
*/

var findMagicIndex = function(A, start, end) {
	if (!start) start = 0;
	if (!end) end = A.length;
	var mid = Math.floor((end + start)/2);
	if (A[mid] === mid) return mid;
	if ((end - start) === 1) {
		return false;
	}
	
	if (A[mid] < mid) {
		return findMagicIndex(A, mid, end);
	}
	if (A[mid] > mid) {
		return findMagicIndex(A, start, mid);
	}
}