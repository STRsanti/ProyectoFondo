import '../App.css';
import CarrouselInfo from '../componentes/carrouselInfo' 
import { Calendario } from '../componentes/calendario';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Noticias() {
    return (
      <div className="App">
        <CarrouselInfo/>
        <Calendario />
      </div>
    );
  }

  

