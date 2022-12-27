class Solution {
    utility(a,b) {
        //Write your code here.
        //print the required output.
        let res = "";
        for(let i=1; i<=10; i++){
            let difference = (a-b)*i + "";
        
            res += difference + " ";
        }
        console.log(res);
    }
}

/*

4 8 12 16 20 24 28 32 36 40 

*/
