var partition = function(s) {
    const res = [];
    
    const checkIfPalindrome = (str) => {
        let left = 0, right = str.length -1;
        while(left < right){
            if( str[left] != str[right]) return false;
            left ++;
            right--;
        }
        return true;
    }
    
    const compute = (str, computedResults) => {
       if(!str.length)  res.push(computedResults);
        
       for(let g=1; g<=str.length; g++ ){
           const curString = str.slice(0, g);
           if( checkIfPalindrome(curString) ){
               compute( str.slice(g), [ ...computedResults, curString] );
           }
       }
        
    }
    
    compute(s, []);
    
    return res;
};