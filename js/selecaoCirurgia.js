URL = 'https://saveh.herokuapp.com/cirugia'
recebe = []
fetch(URL, {
    method: 'get',
    headers: { 'Content-type': 'application/json' }, 
   
})
    .then( (response) => {
        
        response.json().then(function(data){
            for(let i = 0; i < data.length; i++){

                recebe.push(`

                <section onclick="carregaCirurgia(${data[i].id})">
                <h2 id="nomeCirurgia">
                    <span>Nome da Cirurgia:</span> ${data[i].nome_cirurgia}
                </h2>

                <h3>
                    <span>Medico Responsavel: </span>${data[i].nome_circulante}
                </h3>

                <h3>
                    <span>Circulante vinculado: </span>${data[i].nome_circulante}
                </h3>

                <h3>
                    <span>Nome do Paciente: </span>${data[i].nome_paciente}
                </h3>

                
            </section>
                
                `)


                console.log(data[i])


            }
            recebe = recebe.join("")
            main.innerHTML = recebe

            
        });

          
    })
    .catch((err) => { console.log(err); });



main = document.querySelector('main')

function carregaCirurgia(id){

    localStorage.setItem('id', id);
    window.location.href = 'start.html'
    
}




    