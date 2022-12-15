import Button from "../../ui/Button/Button.jsx";
import Counters from './../../ui/Counters/Counters';
import styles from './Home.modules.scss';

const Home = () => {
    return(    
        
          <div className="butt"> 
            <Button text='New' style='main' callback ={() => {}} />
            <h1>EXERCISES FOR
THE SHOULDERS</h1>
            <Counters />
          </div>
           
          
    )
}

export default Home;