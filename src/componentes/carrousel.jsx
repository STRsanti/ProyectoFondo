import Carousel from 'react-bootstrap/Carousel';
import '../App.css'; 
import image1 from '../imgs/imagen1';
import image2 from '../imgs/imagen2';

function Carrousel() {
  return (
    <Carousel
    style={
      {
        marginLeft: '-7%',
        marginTop: '10%',
        height: '450px',
        width: '85%'
      }
    }
    
    fade controls={false}>
      <Carousel.Item interval={8000}>
        <img src={image1} className='imgcarrousel' alt="First slide" /> 
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img src={image2} className='imgcarrousel' alt="Second slide" /> 
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
