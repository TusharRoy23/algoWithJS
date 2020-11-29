function uniqueValue(arr){
    if(arr.length === 0){
        return 0
    }
    
    unqArr = [arr[0]]
    for(let i = 1; i < arr.length; i++){
        if(unqArr.indexOf(arr[i]) === -1) {
            unqArr.push(arr[i])
        }
    }

    return unqArr.length
}

uniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13,13])