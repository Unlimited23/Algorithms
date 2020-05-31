let arr = [6,1,5,8,13,3,0,16,7,4,2,12];

const sort = (arr) => {
    let swapped = false;
    const len = arr.length;
    debugger;
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