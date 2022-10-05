console.log("Hello")
// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }




// function myget() {

//     let Url = 'https://api.instantwebtools.net/v1/airlines/:id';
//     fetch(Url).then((res) => {
//         return res.json();
//     }).then((deta) =>{  
//         console.log(deta)
//     })
// }
// myget();

function mypost() {

    Url = '	https://dummy.restapiexample.com/api/v1/create';
    deta = '{"name":"jeet15s81234","salary":"12354","age":"20"}'
    params = {
        method : 'post',
        Headers :{
            'type':'apli/json'
        },
        body : deta.id
    }
    fetch(Url,params).then(res => res.json())
    .then(deta=> console.log(deta)
    )
}
mypost();




