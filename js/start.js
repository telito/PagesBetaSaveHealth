id = localStorage.getItem('id')
URL = `https://saveh.herokuapp.com/cirugia-start/${id}`

circulante = document.getElementById('nome-responsavel')
nomeCirurgia = document.getElementById('nome-cirurgia')
paciente = document.getElementById('nome-paciente')



fetch(URL, {
    method: 'get',
    headers: { 'Content-type': 'application/json' }, 
   
})
    .then( (response) => {
        
        response.json().then(function(data){
            nomeCirurgia.innerHTML = `Nome da Círurgia:<span> ${data.nome_cirurgia} </span>`
            circulante.innerHTML = `Nome do responsavel:<span> ${data.nome_circulante} </span>`
            paciente.innerHTML =  `Nome do paciente:<span> ${data.nome_paciente} </span>`

            
        });

          
    })
    .catch((err) => { console.log(err); });


    function start(){
       

        // Função para formatar 1 em 01
			const zeroFill = n => {
				return ('0' + n).slice(-2);
			}

            const now = new Date();

			// Formata a data conforme dd/mm/aaaa hh:ii:ss
			const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

        localStorage.setItem('inicio', dataHora);
        
        window.location.href = `./cirurgia.html`;
      
    }

    function finaliza(){
       

        // Função para formatar 1 em 01
			const zeroFill = n => {
				return ('0' + n).slice(-2);
			}

            const now = new Date();

			// Formata a data conforme dd/mm/aaaa hh:ii:ss
			const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

        localStorage.setItem('final', dataHora);
        
        window.location.href = `./cirurgia.html`;

        
      
    }



        