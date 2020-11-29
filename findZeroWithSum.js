function sumZero(arr){
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]
        if( sum === 0){
            return [arr[left], arr[right]]
        } else if(sum < 0){
            left++
        } else {
            right--
        }
    }
}

sumZero([-6, -4, -3, -2, 0, 1, 5, 7])