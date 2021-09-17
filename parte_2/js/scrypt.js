/*Funcion para mostrar histogramas*/
function showgraphs1() {
  var distall = document.getElementById("dist-all")
  var dist1 = document.getElementById("dist-1")
  var dist2 = document.getElementById("dist-2")
  var dist3 = document.getElementById("dist-3")
  var dist4 = document.getElementById("dist-4")
  var dist5 = document.getElementById("dist-5")
  var dist6 = document.getElementById("dist-6")
  var histall = document.getElementById("hist-all")
  var hist1 = document.getElementById("hist-1")
  var hist2 = document.getElementById("hist-2")
  var hist3 = document.getElementById("hist-3")
  var hist4 = document.getElementById("hist-4")
  var hist5 = document.getElementById("hist-5")
  var hist6 = document.getElementById("hist-6")

  if (distall.style.display == "") {
    distall.style.display = 'none';
  } 
  if (dist1.style.display == "") {
    dist1.style.display = 'none';
  } 
  if (dist2.style.display == "") {
    dist2.style.display = 'none';
  } 
  if (dist3.style.display == "") {
    dist3.style.display = 'none';
  } 
  if (dist4.style.display == "") {
    dist4.style.display = 'none';
  } 
  if (dist5.style.display == "") {
    dist5.style.display = 'none';
  } 
  if (dist6.style.display == "") {
    dist6.style.display = 'none';
  } 
  if (histall.style.display == 'none') {
    histall.style.display = "";
  } 
  if (hist1.style.display == 'none') {
    hist1.style.display = "";
  } 
  if (hist2.style.display == 'none') {
    hist2.style.display = "";
  } 
  if (hist3.style.display == 'none') {
    hist3.style.display = "";
  } 
  if (hist4.style.display == 'none') {
    hist4.style.display = "";
  } 
  if (hist5.style.display == 'none') {
    hist5.style.display = "";
  } 
  if (hist6.style.display == 'none') {
    hist6.style.display = "";
  } 
  
}

/*Funcion para mostrar densidades */
function showgraphs2 () {
  var histall = document.getElementById("hist-all")
  var hist1 = document.getElementById("hist-1")
  var hist2 = document.getElementById("hist-2")
  var hist3 = document.getElementById("hist-3")
  var hist4 = document.getElementById("hist-4")
  var hist5 = document.getElementById("hist-5")
  var hist6 = document.getElementById("hist-6")
  var distall = document.getElementById("dist-all")
  var dist1 = document.getElementById("dist-1")
  var dist2 = document.getElementById("dist-2")
  var dist3 = document.getElementById("dist-3")
  var dist4 = document.getElementById("dist-4")
  var dist5 = document.getElementById("dist-5")
  var dist6 = document.getElementById("dist-6")
  

  if (histall.style.display == "") {
    histall.style.display = 'none';
  } 
  if (hist1.style.display == "") {
    hist1.style.display = 'none';
  } 
  if (hist2.style.display == "") {
    hist2.style.display = 'none';
  } 
  if (hist3.style.display == "") {
    hist3.style.display = 'none';
  } 
  if (hist4.style.display == "") {
    hist4.style.display = 'none';
  } 
  if (hist5.style.display == "") {
    hist5.style.display = 'none';
  } 
  if (hist6.style.display == "") {
    hist6.style.display = 'none';
  } 
  if (distall.style.display == 'none') {
    distall.style.display = "";
  } 
  if (dist1.style.display == 'none') {
    dist1.style.display = "";
  } 
  if (dist2.style.display == 'none') {
    dist2.style.display = "";
  } 
  if (dist3.style.display == 'none') {
    dist3.style.display = "";
  } 
  if (dist4.style.display == 'none') {
    dist4.style.display = "";
  } 
  if (dist5.style.display == 'none') {
    dist5.style.display = "";
  } 
  if (dist6.style.display == 'none') {
    dist6.style.display = "";
  } 
}

/*SCROLLREVEAL*/ 
window.sr = ScrollReveal({ reset: false });

/*Delay agregado*/
sr.reveal('.hist-all', {
    delay: 500
})

sr.reveal('.hist-1', { 
    delay: 500 
});

sr.reveal('.hist-2', { 
  origin: 'right', 
  delay: 500 
});

sr.reveal('.hist-3', { 
  delay: 500
});

sr.reveal('.hist-4', { 
  delay: 500
});

sr.reveal('.hist-5', { 
  delay: 500
});

sr.reveal('.hist-6', {
    delay: 500
})


/*DROPDOWN*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

/*Funciones para mostrar las fotos segun botones dentro del dropdown*/
function mostrar_foto_1() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen8.style.display == "") {
    imagen8.style.display = 'none'
  }
  if (imagen7.style.display == "") {
    imagen7.style.display = 'none'
  }
  if (imagen6.style.display == "") {
    imagen6.style.display = 'none'
  }
  if (imagen5.style.display == "") {
    imagen5.style.display = 'none'
  }
  if (imagen4.style.display == "") {
    imagen4.style.display = 'none'
  }
  if (imagen3.style.display == "") {
    imagen3.style.display = 'none'
  }
  if (imagen2.style.display == "") {
    imagen2.style.display = 'none'
  }
  if (imagen.style.display == 'none') {
    imagen.style.display = "";
  } 
}

function mostrar_foto_2() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen8.style.display == "") {
    imagen8.style.display = 'none'
  }
  if (imagen7.style.display == "") {
    imagen7.style.display = 'none'
  }
  if (imagen6.style.display == "") {
    imagen6.style.display = 'none'
  }
  if (imagen5.style.display == "") {
    imagen5.style.display = 'none'
  }
  if (imagen4.style.display == "") {
    imagen4.style.display = 'none'
  }
  if (imagen3.style.display == "") {
    imagen3.style.display = 'none'
  }
  if (imagen.style.display == "") {
    imagen.style.display = 'none';
  } 
  if (imagen2.style.display == 'none') {
    imagen2.style.display = ""
  }
}

function mostrar_foto_3() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen8.style.display == "") {
    imagen8.style.display = 'none'
  }
  if (imagen7.style.display == "") {
    imagen7.style.display = 'none'
  }
  if (imagen6.style.display == "") {
    imagen6.style.display = 'none'
  }
  if (imagen5.style.display == "") {
    imagen5.style.display = 'none'
  }
  if (imagen4.style.display == "") {
    imagen4.style.display = 'none'
  }
  if (imagen2.style.display == "") {
    imagen2.style.display = 'none'
  }
  if (imagen.style.display == "") {
    imagen.style.display = 'none';
  } 
  if (imagen3.style.display == 'none') {
    imagen3.style.display = ""
  }
}

function mostrar_foto_4() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen8.style.display == "") {
    imagen8.style.display = 'none'
  }
  if (imagen7.style.display == "") {
    imagen7.style.display = 'none'
  }
  if (imagen6.style.display == "") {
    imagen6.style.display = 'none'
  }
  if (imagen5.style.display == "") {
    imagen5.style.display = 'none'
  }
  if (imagen3.style.display == "") {
    imagen3.style.display = 'none'
  }
  if (imagen2.style.display == "") {
    imagen2.style.display = 'none'
  }
  if (imagen.style.display == "") {
    imagen.style.display = 'none'
  }
  if (imagen4.style.display == 'none') {
    imagen4.style.display = "";
  } 
}

function mostrar_foto_5() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen8.style.display == "") {
    imagen8.style.display = 'none'
  }
  if (imagen7.style.display == "") {
    imagen7.style.display = 'none'
  }
  if (imagen6.style.display == "") {
    imagen6.style.display = 'none'
  }
  if (imagen4.style.display == "") {
    imagen4.style.display = 'none'
  }
  if (imagen3.style.display == "") {
    imagen3.style.display = 'none'
  }
  if (imagen2.style.display == "") {
    imagen2.style.display = 'none'
  }
  if (imagen.style.display == "") {
    imagen.style.display = 'none'
  }

  if (imagen5.style.display == 'none') {
    imagen5.style.display = "";
  } 
}

function mostrar_foto_6() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen8.style.display == "") {
    imagen8.style.display = 'none'
  }
  if (imagen7.style.display == "") {
    imagen7.style.display = 'none'
  }
  
  if (imagen5.style.display == "") {
    imagen5.style.display = 'none';
  } 
  if (imagen4.style.display == "") {
    imagen4.style.display = 'none'
  }
  if (imagen3.style.display == "") {
    imagen3.style.display = 'none'
  }
  if (imagen2.style.display == "") {
    imagen2.style.display = 'none'
  }
  if (imagen.style.display == "") {
    imagen.style.display = 'none'
  }
  if (imagen6.style.display == 'none') {
    imagen6.style.display = "";
  } 
}

function mostrar_foto_7() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen8.style.display == "") {
    imagen8.style.display = 'none'
  }
  if (imagen6.style.display == "") {
    imagen6.style.display = 'none'
  }
  if (imagen5.style.display == "") {
    imagen5.style.display = 'none';
  } 
  if (imagen4.style.display == "") {
    imagen4.style.display = 'none'
  }
  if (imagen3.style.display == "") {
    imagen3.style.display = 'none'
  }
  if (imagen2.style.display == "") {
    imagen2.style.display = 'none'
  }
  if (imagen.style.display == "") {
    imagen.style.display = 'none'
  }
  if (imagen7.style.display == 'none') {
    imagen7.style.display = "";
  } 
}

function mostrar_foto_8() {
  var imagen = document.getElementById("pie-agg")
  var imagen2 = document.getElementById("pie-comp")
  var imagen3 = document.getElementById("pie-watching")
  var imagen4 = document.getElementById("pie-towatch")
  var imagen5 = document.getElementById("score-means")
  var imagen6 = document.getElementById("comp-means")
  var imagen7 = document.getElementById("watch-means")
  var imagen8 = document.getElementById("plan_means")

  if (imagen7.style.display == "") {
    imagen7.style.display = 'none'
  }
  if (imagen6.style.display == "") {
    imagen6.style.display = 'none'
  }
  if (imagen5.style.display == "") {
    imagen5.style.display = 'none';
  } 
  if (imagen4.style.display == "") {
    imagen4.style.display = 'none'
  }
  if (imagen3.style.display == "") {
    imagen3.style.display = 'none'
  }
  if (imagen2.style.display == "") {
    imagen2.style.display = 'none'
  }
  if (imagen.style.display == "") {
    imagen.style.display = 'none'
  }
  if (imagen8.style.display == 'none') {
    imagen8.style.display = "";
  } 
}

/*Funcion para cambiar fondo, color header y nombre boton*/
function funcion () {
    
    var button = document.getElementById("changeButton40");
    var header_color = document.getElementById("header");
    var body_background = document.getElementById("body1");
    
    if (button.innerText == "Fullmetal Alchemist: Brotherhood Mode") {
      header_color.style.background = 'red';
      body_background.style.backgroundImage = 'url("https://i.pinimg.com/originals/75/14/68/75146828984ebf41f7bbdded14bccbb8.jpg")';
      button.innerText = "Normal Mode"
    } else {
      body_background.style.background = '#B0B0B0';
      header_color.style.background = 'lightskyblue'
      button.innerText = "Fullmetal Alchemist: Brotherhood Mode"}

}


/*
    EN ESTE TRABAJO SE UTILIZARON CODIGOS Y FUENTES ENCONTRADAS, LOS CUALES SE CONSIGUIERON O SE APRENDIO DE ELLOS EN 
    LOS SIGUIENTES LINKS:

    https://stackoverflow.com/questions/31089414/javascript-change-background-color-on-click
    https://stackoverflow.com/questions/40227434/setting-a-background-image-with-a-button-in-html-css
    https://codepen.io/whatthephuc/pen/LjPBZa
    https://www.w3schools.com/howto/howto_js_dropdown.asp

*/