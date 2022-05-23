
let Array = ['Biny', 'muthu', 'Jaanu']

 var arrowFunction = (StringArray)=>{
    let disarray=[];
     StringArray.map((ele)=>{
        let object={
            name:"",
            length:0
        };
        object.name=ele;
        object.length= ele.length;
        resArray.push(object);
     })
     return disarray;
 }
 console.log(arrowFunction(StringArray));

//const getArrowvalue= (m) =>5*m; //arrow function