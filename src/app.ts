const form = document.querySelector('form')!;
const enderecoInput = document.getElementById('endereco')! as HTMLInputElement;

function procuraEndereco(evento: Event) {
    evento.preventDefault();
    const enderecoEntrada = enderecoInput.value;

    //Enviar endereco para API do Google
}

form.addEventListener('envio', procuraEndereco);