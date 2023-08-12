//     #0123456789ABCDEF   inme se # ko leke ,koi bhi 6 leke color banta hai

const boton = document.getElementById("btn");    //pahle us id se button ko pakad liya 
const randomColor = ()=>{                    //arrow fn hai
    let val="0123456789ABCDEF";
    let hash="#";                 // # to sabme hoga hi aage
    for(let i=0;i<6;i++){           
        hash= hash+val[ Math.floor(Math.random()*16)];       //random fn 0-0.99 tak dega isliye 16 se multiply 
                                                             //floor fn 13.23 type ko 13 me kar dega
    }
    return hash;                           //wo rnadom genrated hashCode return ho jayega
};


function changeColor(){
    document.body.style.backgroundColor= randomColor();                //color kaha pe change karna hai(body ka)
}

boton.addEventListener("click",changeColor);                       //button pe click karne pe change clor fn call hota rahe

