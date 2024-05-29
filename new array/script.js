function newArrayPrint(arr, n) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    while (i < n - 1 && arr[i] == arr[i + 1]) i++;

    document.write(arr[i] + " ");
  }
}

let arr = [6, 10, 5, 4, 9, 120, 4, 6, 10];
let n = arr.length;
newArrayPrint(arr, n);
