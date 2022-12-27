for(let i=1; i<=s; i++){
        for(let j=1; j<=s; j++){
            if(i==1 || j==1 || i==s || j==s)
                process.stdout.write("* ");
            else 
                process.stdout.write("  ");
        }
        console.log(" ");
    
    }

/*
    
* * * *  
*     *  
*     *  
* * * *

*/
