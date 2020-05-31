let arr = [6,1,5,8,13,3,0,16,7,4,2,12];

const sort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let min = i;

        for (let j = i + 1; j < len; j++) {         
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

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