function fqC(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    for(var i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex, 1)
    }

    return true
}

fqC([1,2,5,3], [4,25,1,9])