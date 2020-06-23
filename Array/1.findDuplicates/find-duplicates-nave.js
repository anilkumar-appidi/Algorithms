function findDuplicates(arr) {
    let duplicateElements = {}
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                if(duplicateElements[arr[i]]) {
                    duplicateElements[arr[i]] += 1
                } else {
                    duplicateElements[arr[i]] = 1
                }
            }
        }
    }
    return duplicateElements
}

let arr1 = [4,3,2,6,4,8]
console.log(findDuplicates(arr1))