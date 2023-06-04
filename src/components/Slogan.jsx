import pc1 from '../assets/pc-1.png';
import './Slogan.css';

const Slogan = () => {

    return (
        <>
        <div className="home">
            <div className="container">

                <section className="section-with-columns">
                    <div className="col">
                        <h1 className="section-h1 enter-from-left hidden">
                            free, collaborative & open-source encyclopedia
                        </h1>
                        <h2 className="section-h2 enter-from-left hidden">WikiIdeas</h2>
                        <p className="enter-from-left hidden">
                            Our mission is to provide a platform so everyone in the world can share their knowledge with each
                            other.
                        </p>
                    </div>
                    <div className="col enter-from-right hidden">
                        <img src={pc1} />
                    </div>
                </section>
            </div>
        </div>

            </>
            );
};

export default Slogan;