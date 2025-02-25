function same(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        
        if(frequencyCounter2[key] === frequencyCounter1[key]){
            delete frequencyCounter2[key]
            
        }
    }
    
    if(Object.keys(frequencyCounter2).length === 0){
        return true
    }
    return false
}


same('aar', 'raa')