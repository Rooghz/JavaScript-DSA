/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
   let cur=1,ans=1;
   let s=0;
   let num1=fruits[0];
    let num2=-1;
    
    for(let i=0;i<fruits.length;i++)
        {
            if(num2==-1 && fruits[i]!=num1)
                {
                    num2=fruits[i];
                    
                }
            else if(fruits[i]!=num1 && fruits[i]!=num2)
                {
                    
                    let prev=fruits[i-1];
                    s=i-1;
                    while(s!=0 && prev==fruits[s-1])
                        s--;
                    num1=prev;
                    num2=fruits[i];
                    
                }
            
            cur=i-s+1;
            ans=Math.max(ans,cur);
        }
    
    
    return ans;
    
    
};