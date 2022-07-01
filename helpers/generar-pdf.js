const path = require( 'path' );

const PDFDocument = require( 'pdfkit-table' );

const generarPDF = ( res, preguntas, cabecera ) => {

    const doc = new PDFDocument( {
        size: 'A4',
        bufferPages: true,
        autoFirstPage: true
    } );

    if ( preguntas.length === 0 ) {
        doc.text( 'La búsqueda no generó resultados.' );
    }

    const preguntasAux = JSON.parse( JSON.stringify( preguntas ) );

    preguntasAux.forEach( pregunta => {

        pregunta.usuario = `${ pregunta.usuario.nombre } ${ pregunta.usuario.apellidos }`;
        pregunta.createdAt = `${ pregunta.createdAt.substring( 0, 10 ) }`;

        if ( pregunta.pregunta1 ) {
            pregunta.pregunta1 = 'SI';
        } else {
            pregunta.pregunta1 = 'NO';
        }

        if ( pregunta.pregunta2 ) {
              pregunta.pregunta2 = 'SI';
        } else {
            pregunta.pregunta2 = 'NO';
        }
        
        if ( pregunta.pregunta3 ) {
              pregunta.pregunta3 = 'SI';
        } else {
            pregunta.pregunta3 = 'NO';
        }

        if ( pregunta.pregunta4 ) {
              pregunta.pregunta4 = 'SI';
        } else {
            pregunta.pregunta4 = 'NO';
        }

        if ( pregunta.pregunta5 ) {
              pregunta.pregunta5 = 'SI';
        } else {
            pregunta.pregunta5 = 'NO';
        }

        if ( pregunta.pregunta6 ) {
              pregunta.pregunta6 = 'SI';
        } else {
            pregunta.pregunta6 = 'NO';
        }

        if ( pregunta.pregunta7 ) {
              pregunta.pregunta7 = 'SI';
        } else {
            pregunta.pregunta7 = 'NO';
        }

        if ( pregunta.pregunta8 ) {
              pregunta.pregunta8 = 'SI';
        } else {
            pregunta.pregunta8 = 'NO';
        }

        if ( pregunta.pregunta9 ) {
              pregunta.pregunta9 = 'SI';
        } else {
            pregunta.pregunta9 = 'NO';
        }

        if ( pregunta.pregunta10 ) {
              pregunta.pregunta10 = 'SI';
        } else {
            pregunta.pregunta10 = 'NO';
        }

        if ( pregunta.pregunta11 ) {
              pregunta.pregunta11 = 'SI';
        } else {
            pregunta.pregunta11 = 'NO';
        }

        if ( pregunta.pregunta12 ) {
              pregunta.pregunta12 = 'SI';
        } else {
            pregunta.pregunta12 = 'NO';
        }

        if ( pregunta.pregunta13 ) {
              pregunta.pregunta13 = 'SI';
        } else {
            pregunta.pregunta13 = 'NO';
        }

        if ( pregunta.pregunta14 ) {
              pregunta.pregunta14 = 'SI';
        } else {
            pregunta.pregunta14 = 'NO';
        }
    } );

    let table;

    switch ( cabecera ) {

        case 'seccion1':
            table = generarTablaSeccion1( preguntasAux );
            break;

        case 'seccion2':
            table = generarTablaSeccion2( preguntasAux );
            break;

        case 'seccion3':
            doc.opt.layout = 'landscape';
            table = generarTablaSeccion3( preguntasAux );
            break;
    }

    doc.pipe( res );

    doc.image( path.join( __dirname, '/../assets/geroma.jpg'), 530, 10, { width: 50, align: 'right' } );
    doc.image( path.join( __dirname, '/../assets/logo-geroma.jpeg'), 150, 150, { width: 300, align: 'center' } );
    
    doc.on( 'pageAdded', () => {
        doc.image( path.join( __dirname, '/../assets/geroma.jpg'), 530, 10, { width: 50, align: 'right' } );
        doc.image( path.join( __dirname, '/../assets/logo-geroma.jpeg'), 150, 150, { width: 300, align: 'center' } );
    } );

    doc.table( table );

    const range = doc.bufferedPageRange();

    for ( i = range.start, end = range.start + range.count, range.start <= end; i < end; i++ ) {
        doc.switchToPage(i);
        doc.text( `Página ${i + 1} de ${ range.count }`, 0, 750, {
            align: 'right',
        } );
    }

    doc.flushPages();
    doc.end();
}

const generarTablaSeccion1 = ( preguntasAux ) => {

    const table = {

        headers: [
            { label: 'Usuario', property: 'usuario', align: 'center' },
            { label: '¿Ha estado en contacto con un caso confirmado de COVID-19 en los últimos 7 días?', 
              property: 'pregunta1', align: 'center' },
            { label: 'Fecha', property: 'createdAt', align: 'center' },
        ],

        datas: preguntasAux
    }

    return table;
}

const generarTablaSeccion2 = ( preguntasAux ) => {

    const table = {

        headers: [
            { label: 'Usuario', property: 'usuario', align: 'center' },
            { label: 'Temperatura mayor a 38°C', property: 'pregunta2', align: 'center' },
            { label: 'Tos y Estornudos Frecuentes', property: 'pregunta3', align: 'center' },
            { label: 'Malestar General', property: 'pregunta4', align: 'center' },
            { label: 'Dificultad Respiratoria', property: 'pregunta5', align: 'center' },
            { label: 'Vómito o Diarrea', property: 'pregunta6', align: 'center' },
            { label: 'Fecha', property: 'createdAt', align: 'center' },
        ],

        datas: preguntasAux
    }

    return table;
}

const generarTablaSeccion3 = ( preguntasAux ) => {

    const table = {

        headers: [
            { label: 'Usuario', property: 'usuario', align: 'center' },
            { label: 'Diabetes', property: 'pregunta7', align: 'center' },
            { label: 'Presión Alta', property: 'pregunta8', align: 'center' },
            { label: 'Enfermedades del Corazón', property: 'pregunta9', align: 'center' },
            { label: 'Enfermedad Renal', property: 'pregunta10', align: 'center' },
            { label: 'Enfermedades Pulmonares Crónicas', property: 'pregunta11', align: 'center' },
            { label: 'Cáncer', property: 'pregunta12', align: 'center' },
            { label: 'Inmunocompromiso', property: 'pregunta13', align: 'center' },
            { label: 'VIH', property: 'pregunta14', align: 'center' },
            { label: 'Fecha', property: 'createdAt', align: 'center' },
        ],

        datas: preguntasAux
    }

    return table;
}

module.exports = {
    generarPDF
}