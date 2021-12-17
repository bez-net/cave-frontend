import { Link } from 'react-router-dom';
import sliderImg from '../../images/Adullam-provost.jpg';
// import sliderImg2 from '../images/slider-image2.jpg';
// import sliderImg3 from '../images/slider-image3.jpg';


const Slider = () => {

    
    return ( 
        <div className="slider">            
        <div className="myslider fade">
            <div className="txt">
                <h1>ADULLAM - RCN Bible Seminary</h1>
                <p>January 2022 Session</p>
                <Link to="/register" className="apply-btn">Apply Now</Link>

                {/* <Link to="/registerGhana" className="apply-btn">Ghana Campus</Link> */}
            </div>
            <img src={sliderImg} alt="slider display gallery" className="slider-img" />
        </div>
        {/* <!-- end of slider --> */}

        {/* <div className="myslider second-slide fade">
            <div className="txt">
                <h1>ADULLAM - RCN Bible Seminary</h1>
                <p>Apply for Febuary Session</p>
                <Link to="/register" className="apply-btn">Apply Now</Link>
            </div>
            <img src={sliderImg2} alt="adullam image" className="slider-img" />
        </div> */}
        {/* <!-- end of slider --> */}

        {/* <div className="myslider fade">
            <div className="txt">
                <h1>ADULLAM - RCN Bible Seminary</h1>
                <p>Apply for Febuary Session</p>
                <Link to="/register" className="apply-btn">Apply Now</Link>
            </div>
            <img src={sliderImg3} alt="adullam image" className="slider-img" />
        </div> */}
        {/* <!-- end of slider --> */}

        {/* <!-- prev and next --> */}
            {/* <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>
           
            <div className="dotsbox">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div> */}
        
    </div>

     );
 
    //  const myslide = document.querySelectorAll('.myslider');
    //  let dot = document.querySelectorAll('.dot');
     
    //  let counter = 1;
    //  slidefun(counter);
     
    //  let timer = setInterval(autoslide, 8000);
    //  function autoslide(){
    //      counter +=1;
    //      slidefun(counter);
    //  }
    //  function plusSlides(n){
    //      counter += n;
    //      slidefun(counter);
    //      resetTimer();
    //  }
    //  function currentSlide(n){
    //      counter = n;
    //      slidefun(counter);
    //      resetTimer();
    //  }
    //  function resetTimer(){
    //      clearInterval(timer);
    //      timer = setInterval(autoslide, 8000);
    //  }
     
    //  function slidefun(n){
    //      let i;
    //      for(i=0; i < myslide.length; i++){
    //          myslide[i].style.display = "none";
    //      }
    //      for(i = 0; i < dot.length; i++){
    //          dot[i].classList.remove('active');
    //      }
    //      if(n > myslide.length) {
    //          counter = 1;
    //      }
    //      if(n<1) {
    //          counter = myslide.length;
    //      }
    //      myslide[counter - 1].style.display = "block";
    //      dot[counter - 1].classList.add('active');
    //  }
}
 
export default Slider;