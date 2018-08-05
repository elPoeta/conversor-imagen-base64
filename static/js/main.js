let archivo;
const selectFile = document.querySelector('#selectFile');

selectFile.addEventListener('change', (e)=>{
  let files = e.target.files;

  if (files && files[0] && files[0].type.match(/^image\//)) {
      
      let fileReader= new FileReader();
      archivo = files[0];
      
      fileReader.addEventListener("load", function(e) {
      
        document.querySelector('#thumb').innerHTML='';
        let img = document.createElement('img');
        img.setAttribute('id', 'img');
        img.src = e.target.result;
        img.style.height='150px';
        document.querySelector('#thumb').appendChild(img);
        document.querySelector('#base64').innerHTML = e.target.result;
        let template = 
        `<p>Nombre: ${archivo.name}</p>
        <p>Size: ${archivo.size} bytes</p>
        <p>Tipo: ${archivo.type}</p>`;
        document.querySelector('#info').innerHTML = template;
        
      }); 
      
      fileReader.readAsDataURL(files[0]);
    
    }else{
      let template =`<h3>El archivo seleccionado no es una imagen, es de tipo: ${files[0].type}</h3>`;
      document.querySelector('#thumb').innerHTML = template;
      document.querySelector('#base64').innerHTML = '';
      document.querySelector('#info').innerHTML = '';
    }
    
});
