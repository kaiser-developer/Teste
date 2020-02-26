let rdoEnvio = document.getElementsByName('forma-envio');
let divEnvio = document.getElementById('upload-arquivo');


rdoEnvio.forEach(radio => {
    let divRemover = document.getElementById('remover-upload');
    radio.onclick = () =>{
        if(radio.value != "arquivo"){
            divRemover.remove();
        }else{

        }
    }
});