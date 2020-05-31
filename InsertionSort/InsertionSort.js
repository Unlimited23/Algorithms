let arr = [6,1,5,8,13,3,0,16,7,4,2,12];

const sort = (arr) => {
    const len = arr.length;

    // 1. Loop through the array
    // 2. Swap the number until it's no longer bigger than
    // the previous number (find it's correct position)
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            swap(arr, j, j - 1);
        }
    }

    return arr;
}

const swap = (arr, leftOperand, rightOperand) => {
    const tmp = arr[leftOperand];

    arr[leftOperand] = arr[rightOperand];
    arr[rightOperand] = tmp;

    return arr;
}

sort(arr);

console.log(arr);