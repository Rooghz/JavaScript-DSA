/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let set = new Set(words);
    let result = [];
    let isValid = (word) =>{
        if(word.length == 0) return true;
        for(let i =1; i<=word.length;i++){
            let value = word.slice(0,i);
            if(set.has(value)){
                let check = isValid(word.slice(i))
                if(check) return true;
            }
        }
        return false;
    }
    for(const item of words){
        set.delete(item);
        if(isValid(item)) result.push(item)
        set.add(item);
    }
    return result;
};