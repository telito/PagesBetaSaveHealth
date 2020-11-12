inicio = localStorage.getItem('inicio')
final = localStorage.getItem('final')
id = localStorage.getItem('id')
console.log(inicio)
URLPost = `https://saveh.herokuapp.com/cirugia-edit/${id}`

//separando a data

ano = inicio.substring(6, 10)
mes = inicio.substring(3, 5)
dia = inicio.substring(0, 2)
hora = inicio.substring(11)

anoF = final.substring(6, 10)
mesF = final.substring(3, 5)
diaF = final.substring(0, 2)
horaF = final.substring(11)

dataFormatadaInicio = `${ano}-${mes}-${dia}T${hora}.000Z`
dataFormatadaFinal = `${anoF}-${mesF}-${diaF}T${horaF}.000Z`

fetch(URLPost, {
    method: 'Post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        "inicio_cirurgia": dataFormatadaInicio,
        "final_cirurgia": dataFormatadaFinal,
    })
})
    .then((response) => {

        response.json().then(function (data) {


            console.log('data')
        });


    })
    .catch((err) => { console.log(err); });