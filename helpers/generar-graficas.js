const generarGraficas = ( preguntas ) => {

    let pregunta1True= 0;
    let pregunta2True= 0;
    let pregunta3True= 0;
    let pregunta4True= 0;
    let pregunta5True= 0;
    let pregunta6True= 0;
    let pregunta7True= 0;
    let pregunta8True= 0;
    let pregunta9True= 0;
    let pregunta10True= 0;
    let pregunta11True= 0;
    let pregunta12True= 0;
    let pregunta13True= 0;
    let pregunta14True= 0;

    let pregunta1False= 0;
    let pregunta2False= 0;
    let pregunta3False= 0;
    let pregunta4False= 0;
    let pregunta5False= 0;
    let pregunta6False= 0;
    let pregunta7False= 0;
    let pregunta8False= 0;
    let pregunta9False= 0;
    let pregunta10False= 0;
    let pregunta11False= 0;
    let pregunta12False= 0;
    let pregunta13False= 0;
    let pregunta14False= 0;
    
    preguntas.forEach( pregunta => {

        if( pregunta.pregunta1 ) {
            pregunta1True++;
        } else{
            pregunta1False++;
        }

        if( pregunta.pregunta2 ) {
            pregunta2True++;
        } else{
            pregunta2False++;
        }

        if( pregunta.pregunta3 ) {
            pregunta3True++;
        } else{
            pregunta3False++;
        }

        if( pregunta.pregunta4 ) {
            pregunta4True++;
        } else{
            pregunta4False++;
        }

        if( pregunta.pregunta5 ) {
            pregunta5True++;
        } else{
            pregunta5False++;
        }

        if( pregunta.pregunta6 ) {
            pregunta6True++;
        } else{
            pregunta6False++;
        }

        if( pregunta.pregunta7 ) {
            pregunta7True++;
        } else{
            pregunta7False++;
        }

        if( pregunta.pregunta8 ) {
            pregunta8True++;
        } else{
            pregunta8False++;
        }

        if( pregunta.pregunta9 ) {
            pregunta9True++;
        } else{
            pregunta9False++;
        }

        if( pregunta.pregunta10 ) {
            pregunta10True++;
        } else{
            pregunta10False++;
        }

        if( pregunta.pregunta11 ) {
            pregunta11True++;
        } else{
            pregunta11False++;
        }

        if( pregunta.pregunta12 ) {
            pregunta12True++;
        } else{
            pregunta12False++;
        }

        if( pregunta.pregunta13 ) {
            pregunta13True++;
        } else{
            pregunta13False++;
        }

        if( pregunta.pregunta14 ) {
            pregunta14True++;
        } else{
            pregunta14False++;
        }
    });

    return {
        totalRegistros: preguntas.length,
        pregunta1True,
        pregunta2True,
        pregunta3True,
        pregunta4True,
        pregunta5True,
        pregunta6True,
        pregunta7True,
        pregunta8True,
        pregunta9True,
        pregunta10True,
        pregunta11True,
        pregunta12True,
        pregunta13True,
        pregunta14True,
        pregunta1False,
        pregunta2False,
        pregunta3False,
        pregunta4False,
        pregunta5False,
        pregunta6False,
        pregunta7False,
        pregunta8False,
        pregunta9False,
        pregunta10False,
        pregunta11False,
        pregunta12False,
        pregunta13False,
        pregunta14False
    }
}

module.exports = {
    generarGraficas
}