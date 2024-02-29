import { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '/src/styles/Pointsmap.css';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


/** Solución a problema de iconos => ( https://github.com/PaulLeCam/react-leaflet/issues/453 )  */

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const urlApi = 'https://ecofinder.onrender.com/api';

const request = async( url ) => {
  const resp = await fetch( url );
  const data = await resp.json();
  return data.places;
}

const Pointsmap = () => {
  
  const [points, setPoints] = useState( null );
  
  useEffect(() => {
    ( async() => {
      const pnts = await request( urlApi );
      const latYLong = pnts.map( ({ _id, nombre, municipio, latitud: lat, longitud: lng }) => {
        const ret = { _id, nombre, municipio, lat, lng };
        return {...ret};
      } )
      latYLong.splice(0, 2)
      console.log({latYLong});
      setPoints( latYLong );
    })();
  }, [])

  return (
    
    <div>
      <MapContainer center={ [-32.9575, -60.639444444444] } zoom={ 13 } >
        <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {points ? (
           points.map( point => {
            return (
              <Marker key={point._id} position={ point } >
                <Popup>
                  Nombre: { point.nombre }
                  <br />
                  Municipio: { point.municipio }
                </Popup>
              </Marker>
            )
           } ) 
        ) : (
          'kjdsfaluinajdsnaasdfj'
        )}

      </MapContainer>
    </div>
  )
}

export default Pointsmap;
