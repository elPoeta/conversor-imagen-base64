let archivo;
const selectFile = document.querySelector('#selectFile');
let caja = document.querySelector('#caja');

selectFile.addEventListener('change',leer);

caja.addEventListener("dragenter", e => {
         e.preventDefault();
  });

  caja.addEventListener("dragover", e => {
          e.preventDefault();
});

caja.addEventListener("drop", soltar);

function leer(e){
  convertir(e.target.files);
}

function soltar(e){
  e.preventDefault();
  convertir(e.dataTransfer.files);
}

function convertir(files){
  
  if (files[0] && files[0].type.match(/^image\//)) {
      
      let fileReader= new FileReader();
      fileReader.readAsDataURL(files[0]);
      archivo = files[0];
      
      fileReader.addEventListener("load", function(e) {
      
        document.querySelector('#thumb-template').innerHTML='';
        let img = document.createElement('img');
        img.setAttribute('id', 'img');
        img.src = e.target.result;
        img.style.height='150px';
        document.querySelector('#thumb-template').appendChild(img);
        document.querySelector('#base64').innerHTML = e.target.result;
      
        document.querySelector('#size').innerHTML = archivo.size;
        document.querySelector('#char').innerHTML = e.target.result.length;
        document.querySelector('#type').innerHTML = archivo.type;
      }); 
    }else{
      let template = '';
      if(files[0]){
        template =`<p><strong>El archivo seleccionado no es una imagen, es de tipo: ${files[0].type}</strong></p>`;
      }
      
      document.querySelector('#thumb-template').innerHTML = template;
      document.querySelector('#base64').innerHTML = '';
      document.querySelector('#size').innerHTML = '0';
      document.querySelector('#char').innerHTML = '0';
      document.querySelector('#type').innerHTML = 'N/A';
    }
    
}