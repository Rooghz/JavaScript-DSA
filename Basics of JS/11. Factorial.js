function x(n){
    //code here
    if(n==0){
        return n;
    } 


    for(let i=n-1; i>=1; i--){
        n *= i;
    }
    return n;

}

console.log(x(10));

/* 

Input:
N = 5
Output:
120
Explanation:
5*4*3*2*1 = 120

*/
