const arr = [1, 40, -5, 10, 0];
function sort (arr){
    for (let i=0; i<arr.length;i++){
        for (let j=0; j<arr.length;j++){
            if (arr[j]>arr[j+1] && j!=arr.length-1){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
console.log(sort(arr));
