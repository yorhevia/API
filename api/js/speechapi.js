const microfono = document.querySelector('#microfono')
const salida = document.querySelector('#salida');

microfono.addEventListener('click',ejecutarSpeech)

function ejecutarSpeech(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();


    recognition.start();

    recognition.onstart = function(){
        //console.log('comence la funcion')
        salida.classList.add('mostrar')
        salida.innerHTML = 'Estoy escuchando..';
    }

    //retornar lo que haya reconocido al momento de inicializar el speechAPI

    recognition.onspeechend = function(){
            //console.log(e.results)
            salida.innerHTML = 'se termino de ejecutar el reconocimiento';
             recognition.stop();
           

    }

        recognition.onresult = function(e){
            console.log(e.result)

            var transcript = e.results[0][0].transcript;
            var confidence = e.results[0][0].confidence;

            const speech = document.createElement('p');
            speech.innerHTML = `Lo que grabe: ${transcript}`;

            const confianza = document.createElement('p')
            confianza.innerHTML = `confianza: ${parseInt(confidence*100)}%`;

            salida.appendChild(speech)
            salida.appendChild(confianza);
        }

}