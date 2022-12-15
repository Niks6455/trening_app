import Layout from "../../common/Layout.jsx";
import Button from "../../ui/Button/Button.jsx";
import Counters from './../../ui/Counters/Counters';
import bgImage from './../../images/i.jpg';
import styles from './Home.modules.scss';

const Home = () => {
    return(    
        
        <Layout height ='100%' bgImage={bgImage}>
            <Button text='New' type='main' callback ={() => {}} />
            <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
            <Counters />
         </Layout>
           
          
    )
}

export default Home;