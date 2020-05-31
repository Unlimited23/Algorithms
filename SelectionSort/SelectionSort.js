let arr = [6,1,5,8,13,3,0,16,7,4,2,12];

const sort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        // Holds the index of the
        // smallest number in the array
        // for position i.
        let min = i;

        // This: j = i + 1 is to make sure that
        // when we've found a smallest number for position i
        // it won't be checked again on the next iteration.
        for (let j = i + 1; j < len; j++) {

            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // Puts the smallest number in position i.
        swap(arr, i, min);
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