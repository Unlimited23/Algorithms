let arr = [6,1,5,8,13,3,0,16,7,4,2,12];

const sort = (arr) => {
    let swapped = false;
    const len = arr.length;

    // 1. Loop the array and if the current element
    // is smaller than the previous one -> swap them
    // 2. Repeat 1.) while there are no more elements to swap
    do {
        swapped = false;

        for (let i = 1; i < len; i++) {
            if (arr[i] < arr[i - 1]) {
                arr = swap(arr, i - 1, i);
                swapped = true;
            }
        }
    } while(swapped)

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