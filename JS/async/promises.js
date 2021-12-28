console.log('Inicializando el script');
console.log('Sync');
let x;
const asincrona = (value) => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=> {
            // console.log('Llamada async');
            // x = value;
            result = value * 8;
            // if(result > 4000) reject('número demasiado alto')
            resolve(result)
        }, 2000);
    });   
}
async function asyncAwait() {
  try {
    const user = await asincrona(5);
    console.log(user)
    const comments = await asincrona(10);
    await asincrona(20);
    console.log('Elemento intermedio')
    await asincrona(1000);
    await asincrona(50);
    console.log('Elemento a ejecutarse')
  }
  catch(err) {
    swal('Error', `Error al obtener data ${err}`, 'error')
  }
  

  // .then((resp)=> {
  //   console.log(resp);
  //   .then(resp => {
  //       console.log(resp);
  //       .then(resp => {
  //           console.log(resp);
  //           .then(resp => {
  //               console.log(resp);
  //               .then(resp => {
  //                   console.log(resp);
  //               })
  //           })
  //       })
  //   })
  // }).catch(err => swal('Error', `Error al obtener data ${err}`, 'error'));
}
asyncAwait();







































const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
btn1.onclick = function() { 
  swal("Yeah!");
};
btn2.onclick = function() { 
  swal("¡Hey!", "Este segundo parámetro es para el contenido del body de el modal");
};
btn3.onclick = function() { 
  swal("¡Buen trabajo!", "Has borrado tu vida con éxito", "warning")
};
btn4.onclick = function() { 
  swal({
      text: "Este mensaje será destruido en 2 segundos.",
      timer: 2000,
      title: "¡Hzola!",
      type: 'success'
}, function() {
  window.location.href = '/pages/signup.html'
});
};
btn5.onclick = function() { 
  swal({
  title: "¿Estás seguro?",
  text: "¡No hay marcha atras!",
  type: "warning",
  showCancelButton: true,
  cancelButtonColor: "#FF5500",
  confirmButtonColor: "#00AA00",
  confirmButtonText: "¡Si, borrar mi memoria ahora!",
  closeOnConfirm: false,
},
function(){
  swal("¡Borrado!", "Tu memoria ha sido borrada.", "success");
});
};
btn6.onclick = function() { 
  swal({
  title: "¿Estás seguro?",
  text: "¡Si continuas no serás capaz de recordar nada!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si borrar producto",
  cancelButtonText: "Cancelar",
  closeOnConfirm: false,
//   closeOnCancel: false
},
function(accept){
  if (accept) {
    swal("Producto borrado", "El producto bla bla bla blabla blabla blabla bla", "success");
  } 
//   else {
//         swal("Cancelado", "Estás a salvo :) ¡Por ahora!", "error");
//   }
});
};
btn7.onclick = function() { 
  swal({
    title: "Break.coffee",
    text: "Fuck Yeah!",
    imageUrl: "http://break.coffee/wp-content/uploads/2015/03/coffee.jpg"
  });
};
