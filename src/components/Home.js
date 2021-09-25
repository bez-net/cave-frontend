import About from './Home/About';
import Testimonies from './Home/Testimonies';
import Courses from './Home/Courses';
import Slider from './Home/Slider';
import ScrollToTop from './ScrollToTop';

const Home = () => {
    return ( 
        <div>
            <ScrollToTop />
            <Slider />
            <About />
            <Testimonies />
            <Courses />
        </div>
        
     );
}
 
export default Home;