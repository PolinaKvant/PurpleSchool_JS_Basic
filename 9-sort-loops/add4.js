const arr = [1, 40, -5, 10, 0];
function sort (arr){
    for (elem of arr){
        for (elem1 of arr){
            if (arr[elem1]>arr[elem1+1] && elem1!=arr.length-1){
                const a = arr[elem1];
                arr[elem1]=arr[elem1+1];
                arr[elem1+1]=a;
            }
        }
    }
    return arr;
}
console.log(sort(arr));
