//Problem 1
function areDigsOdd(n) {
    if ( n < 10 && n >= 0){
        return n % 2 === 1;
    }
    return result = areDigsOdd((n - n%10)/10) && areDigsOdd(n%10);
}
console.log(areDigsOdd(55))

//Problem 2

function findMinPosItem(arr, right_b, item){
    if (right_b === 0){
        return item;
    }
    let subArrMin = findMinPosItem(arr, right_b - 1, arr[right_b - 1]);
    if (subArrMin < 0 && item < 0){
        return -1;
    } else if (subArrMin < 0){
        return item;
    } else if (item < 0) {
        return subArrMin;
    } else {
        if (subArrMin < item){
            return subArrMin;
        }
        return item;
    }
}
function main_min(arr){
    return findMinPosItem(arr, arr.length, arr[arr.length - 1]);
}
let arr = [56, -9, 87, -23, 0, -105, 55, 1];
console.log(main_min(arr));


//Problem 3
function checkIfSorted(arr, i){
  if (i === arr.length -1){
      return -1;
  }
  if (arr[i] <= arr[i + 1]){
      return checkIfSorted(arr, i+1);
  } else {
      return i + 1;
  }

}
let arr = [-9, -4, -4, 3, 12, 4, 5];
console.log(checkIfSorted(arr,0));

//Problem 4

function remove1stElem(arr, i){
  if (i === 1 || i === 0){
     arr.splice(0,1);
     return arr;
  }
  return remove1stElem(arr, i - 1);
  
}
let arr = [6, 78, 'n', 0, 1];
console.log(remove1stElem(arr,arr.length));


//Problem 5
function rotateArrByN(arr, i, N){
  if ( i ===  N){
     return arr;
  }
  arr.unshift(arr.pop());
  return rotateArrByN(arr, i -1, N);
}
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h']
console.log(rotateArrByN(arr, arr.length, 3));
