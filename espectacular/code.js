var contador = 0;

function contar(){
  
    this.contador = this.contador + 1;
    document.getElementById("cont").innerHTML = this.contador;
}