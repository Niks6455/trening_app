import Layout from "../../common/Layout.jsx";
import Button from "../../ui/Button/Button.jsx";
import Counters from './../../ui/Counters/Counters';
import bgImage from './../../images/i.jpg';
import './Home.modules.scss';


const Home = () => {
    return(    
        
        <Layout bgImage={bgImage}>
            <div className="position">
                <Button text='New' type='main' callback ={() => {}} />
                <h1 className='heading'>EXERCISES FOR THE SHOULDERS</h1>
                <Counters />
            </div>
         </Layout>
           
          
    )
}

export default Home;