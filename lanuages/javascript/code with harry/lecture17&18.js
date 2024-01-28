// array method  

// 1. toString() method -used to convert array to string

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof num);
let b = num.toString(); // not modify original array
console.log(b);
console.log(typeof b);

// 2. join() method - used to join array element with any character
let c = num.join(" and ");
console.log(c);// 1 and 2 and 3 and 4 and 5 and 6 and 7 and 8 and 9 . not modify original array

// 3. pop() method - used to remove last element from array
let d = num.pop(); //pop return poped value , modify original array
console.log(num, d);

// 4. push() method - used to add element at last of array
let e = num.push(10); // push return length of array , modify original array
console.log(num);

// 5. shift() method - used to remove first element from array
let f = num.shift(); // shift return poped value, modify original array
console.log(f);
console.log(num);

// 6. unshift() method - used to add element at first of array
let g = num.unshift(1); // unshift return length of array, modify original array
console.log(g);
console.log(num);

// 7. delete() method - used to delete element from array
let h = delete num[0]; // delete return true or false, modify original array
console.log(h);
console.log(num);
console.log(num.length)

// 8. concat() method - used to join two or more array
let i = [1, 2, 3, 4, 5];
let j = [6, 7, 8, 9, 10];
let k = i.concat(j); // concat return new array, not modify original array
console.log(k);

// 10 . short() method - used to sort array element
let l = [5, 4, 3, 2, 1];
let m = l.sort(); // sort return sorted array, modify original array
console.log(m);
console.log(l); // modify original array

// 11. splice() method - used to add or remove element from array
let n = [1, 2, 3, 4, 5];
let o = n.splice(1, 2, 16, 17, 18); // splice return removed element, modify original array
console.log(o); //return removed element(2 ,3)- 2 is starting index and 3 is number of element to be removed
console.log(n); // modify original array(1,16 ,17 ,18 ,4 ,5)- 1 is starting index and 6,7,8 is added element

// 12. slice() method - used to copy array element
let p = [1, 2, 3, 4, 5];
let q = p.slice(1, 3); // slice return copied element, not modify original array
//dont take last index
console.log(q); // return copied element(2,3)- 1 is starting index and 3 is ending index
console.log(p); // not modify original array(1,2,3,4,5)

// 13. reverse() method - used to reverse array element
let r = [1, 2, 3, 4, 5];
let s = r.reverse(); // reverse return reversed array, modify original array
console.log(s); // return reversed array(5,4,3,2,1)
console.log(r); // modify original array(5,4,3,2,1)

// #ithere are more array method like

// indexOf() method used to search array element
// lastIndexOf() method used to search array element from last
// isArray() method used to check array or not
// fill() method used to fill array element with static value
// filter() method used to filter array element
// forEach() method used to iterate array element
// map() method used to iterate array element
// reduce() method used to iterate array element
// some() method used to iterate array element
// every() method used to iterate array element
// find() method used to iterate array element
// findIndex() method used to iterate array element
// includes() method used to iterate array element
// keys() method used to iterate array element
// values() method used to iterate array element
// entries() method used to iterate array element
// from() method used to iterate array element
// of() method used to iterate array element
// copyWithin() method used to iterate array element
// flat() method used to iterate array element
// flatMap() method used to iterate array element
// toLocaleString() method used to iterate array element
// toString() method used to iterate array element
// toSource() method used to iterate array element
// toFixed() method used to iterate array element
// toPrecision() method used to iterate array element
// valueOf() method used to iterate array element
