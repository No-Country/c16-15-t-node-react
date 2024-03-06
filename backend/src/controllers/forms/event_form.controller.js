
export const createEvent = ( req, res ) => {
  console.log( req.body );
  
  const { nombre, direccion, fecha, latitud, longitud } = req.body;
  const name = nombre, address = direccion, date = fecha, lat = latitud, lng = longitud;
  // const { name: nombre, address: direccion, date: fecha, lat: latitud, lng: longitud } = req.body;
  // const { nombre: {name}, direccion: {address}, fecha: {date}, latitud: {lat}, longitud: {lng} } = req.body;
  
  // const date = new Date();
  console.log({ nombre, direccion, fecha, latitud, longitud });
  console.log({ name, address, date, lat, lng });
  if ( !name || !address || !date ){
    return res.status(400).json({"msg":"name, address and date are required"})
  }

  try {
    const toDate = new Date(date);
  } catch (e) {
    console.log('error en date', e);
    return res.status(400).json({"msg": "date must be a valid Date type"})
  }

  if ( typeof date !== Date ){
    console.log(typeof date);
    const toDate = new Date(date);
    console.log(typeof toDate);
    console.log(toDate);
  }
  console.log( {name, address, date, lat, lng} );
  
  return res.json({ 'event-post': name, address, date, lat, lng });

}



