import slider1 from '../Afisha/img/slider1.jpg';
import slider2 from '../Afisha/img/slider2.jpg';
import slider3 from '../Afisha/img/slider3.jpg';
import '../Afisha/sliderstyle.css';
function Slider(){
    return(
     <div className="container">
         <div className="carousel">
             <input type="radio" id="carousel-1" name="carousel[]"checked></input>
             <input type="radio" id="carousel-2" name="carousel[]"checked></input>
             <input type="radio" id="carousel-3" name="carousel[]"checked></input>
             
                <ul className="carousel__items">
                    
                    <li className="carousel__item">
                    <p className="slider1__name">Годзила против конга</p>
                    <img className="slider1" src={slider1} alt="my-logo" />
                    </li>
                    <li className="carousel__item">
                    <img className="slider2" src={slider2} alt="my-logo" />
                    </li>
                    <li className="carousel__item">
                    <img className="slider3" src={slider3} alt="my-logo" />
                    </li>
                </ul>
                <div className="carousel__prev">
                    <label for="carousel-1"></label>
                    <label for="carousel-2"></label>
                    <label for="carousel-3"></label>
                </div>
                <div className="carousel__nav">
                    <label for="carousel-1"></label>
                    <label for="carousel-2"></label>
                    <label for="carousel-3"></label>
                </div>
         </div>
     </div>
    )
}






export default Slider;