import About from './Home/About';
import Testimonies from './Home/Testimonies';
import Courses from './Home/Courses';
import Slider from './Home/Slider';

const Home = () => {
    return ( 
        <div>
            <Slider />
            <About />
            <Testimonies />
            <Courses />
        </div>
     );
}
 
export default Home;