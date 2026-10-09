const campoCep = document.getElementById("cep")
        .addEventListener("blur", function(e){
            const cepValue = e.target.value;
            if(cepValue.length !== 8) {return alert("Digite o CEP com 8 dígitos");};
            const url = `https://viacep.com.br/ws/${cepValue}/json/`;
            const dataCepJson = fetch(url)
                    .then(response => {return response.json();})
                    .then(data => {
                        if(data.erro === "true") {return alert('CEP incorreto');};
                        document.getElementById("rua").value = data.logradouro;;
                        document.getElementById("bairro").value = data.bairro;;
                        document.getElementById("cidade").value = data.localidade;;
                        document.getElementById("estado").value = data.estado;;
                    });
        });
        