const validarFechas = ( req, res, next ) => {

    const { desde, hasta } = req.params;

    req.params.desde = new Date( desde ).getTime();
    req.params.hasta = new Date( hasta ).getTime() + 86399999;

    if ( desde > hasta ) {
        return res.json( {
            value: 0,
            msg: 'Verificar rango de fechas.'
        } );
    }

    next();
}

module.exports = {
    validarFechas
}