import testifier from '../../images/testimony.jpg';

const Testimonies = () => {

    const inlineStyle = {
        color: '#fff'
    }

    return (
        <section id="testimonies">
            <header className="section-header">
                <h1 style={ inlineStyle}>Testimonies</h1>
            </header>

            <div className="container testimonies-card">
                <div className="testimony-card">
                    <div className="testifier-img-container">
                        <img src={testifier} alt="testifier" />
                    </div>
                    <div className="testimony-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. </p>

                        <p><strong><em>Adebare Amos,</em></strong> Lagos, Nigeria</p>
                    </div>
                </div> 
                {/* <!-- end of card --> */}
                <div className="testimony-card">
                    <div className="testifier-img-container">
                        <img src={testifier}  alt="testifier" />
                    </div>
                    <div className="testimony-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius nulla cum officia dolor sunt nemo eaque quia, itaque et ut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ipsa.</p>
                        
                        <p><strong><em>Adebare Amos,</em></strong> Lagos, Nigeria</p>
                    </div>
                </div> 
                {/* <!-- end of card --> */}

                <div className="testimony-card">
                    <div className="testifier-img-container">
                        <img src={testifier}  alt="testifier" />
                    </div>
                    <div className="testimony-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius nulla cum officia dolor sunt nemo eaque quia, itaque et</p>
                        
                        <p><strong><em>Adebare Amos,</em></strong> Lagos, Nigeria</p>
                    </div>
                </div> 
                {/* <!-- end of card --> */}
            </div>
            {/* <!-- end of testimonies-container --> */}
        </section>
    );
}
 
export default Testimonies;