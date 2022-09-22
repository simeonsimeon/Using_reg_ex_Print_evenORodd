let input=document.getElementById("input");

function reg(){
    if(input.value!==""){
    let table=document.getElementById("table");
    let row=table.insertRow(table.length);
    let c1=row.insertCell(0);
    let c2=row.insertCell(1);
    let c3=row.insertCell(2);
    
     
    if(input.value){
        
        let value=input.value;
        let name=value.replace(/[13579]$/g,"Odd");
        
        let number=value.replace(/[1234567890]$/g,"Haris");
        let symbol=value.replace(/[24680]$/g,"Even");
        c1.innerText=name;
        c2.innerText=symbol;
        c3.innerText=number;
        console.log(typeof(input.value))
    }
    }
    input.value="";
}
let btn=document.getElementById("btn");
btn.addEventListener("click",reg)