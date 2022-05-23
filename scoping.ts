function fav(input: boolean) 
{  
    let x = 99;  
    if (input) 
    {  
             
        let y = x + 1;  //x is here
        return y;  
    }  
    
    return y;   // Error: "y" doesn't exist here 
}  