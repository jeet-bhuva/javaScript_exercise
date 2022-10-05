console.log("18");

btn = document.getElementById('btn')
btn.addEventListener('click', fun1)
btn.addEventListener('dblclick', fun2)
btn.addEventListener('mousedown', fun3)



function fun1(e) {
    console.log("Hello..!",e);
    e.preventDefault();
}


function fun2(e) {
    console.log("Hello..Welcome My House!",e);
    e.preventDefault();
}

function fun3(e) {
    console.log("Hello..Good Morning..!",e);
    e.preventDefault();
}



// document.querySelector('.divs').addEventListener(

//     'mouseenter',function(){
//         console.log('Thank You For Wishing')
//     }

// )

// document.querySelector('.divs').addEventListener(

//     'mouseleave',function(){
//         console.log('Thank You For Not Wishing Me')
//     }

// )




//  document.querySelector('.container').addEventListener(

//      'mousemove',function(e){
//         console.log(e.offsetX,e.offsetY);
//         document.body.style.backgroundColor = `rgb(${e.offsetY},
//             ${e.offsetX},${e.offsetY})`;
//          console.log('Thank You For move The mouse')
//      }

// )
