$("#formCadastro").submit(function(e){
    e.preventDefault();
    
    const nome = $("#nome").val();
    const sobrenome = $("#sobrenome").val();
    const email = $("#email").val();
    const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
    const senha = $("#senha").val();
    const cep = document.getElementById("cep").value;
    const numero = document.getElementById("numero").value;
    
    if(nome.length < 3) return alert("Digite seu nome completo");
    if(sobrenome.length < 3) return alert("Digite seu nome completo");
    if(validaEmail !== true) return alert("E-mail inválido");
    if(senha === '') return alert("Você precisa digitar uma senha");
    if(senha.length < 8) return alert("A senha deve ter no mínimo 8 caracteres");
    if(!/[0-9]/.test(senha)) return alert("A senha deve conter pelo menos um número");
    if(!/[a-z]/.test(senha)) return alert("A senha deve conter pelo menos uma letra minúscula");
    if(!/[A-Z]/.test(senha)) return alert("A senha deve conter pelo menos uma letra maiúscula");
    if(!/[$*&@#]/.test(senha)) return alert("A senha deve conter pelo menos um caractere especial: $ * & @ #");               
    if(cep === '') return alert("Digite um CEP");
    if(numero === '') return alert("Digite o número do imóvel");
    alert("Cadastro validado com sucesso!");
});