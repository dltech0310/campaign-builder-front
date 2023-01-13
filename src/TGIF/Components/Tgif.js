
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Tgif.css'
import Edm from './Edm/Edm';

const Tgif = () => {
    return (
        <>
        <div className='mainContainerBackground'>
            <div className='MainContainerTgif'>
                <Header />
                <Edm />
                <Footer />

            </div>
        </div>
        
        </>
        
        );
};

export default Tgif;
