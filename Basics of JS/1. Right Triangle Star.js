const n = 5;

pattern = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        pattern += "*";
    }
    for(let k=1; k<=n-i; k++){
        pattern += " ";
    }
    pattern += "\n";
}
console.log(pattern);

/*

*    
**   
***  
**** 
*****

*/
