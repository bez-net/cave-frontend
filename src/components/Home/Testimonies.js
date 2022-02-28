import testifier from '../../images/testimony.jpg';
import testifier2 from '../../images/testimony2.jpeg';
import testifier3 from '../../images/testimony3.jpeg';

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
                        <img src={testifier2} alt="testifier" />
                    </div>
                    <div className="testimony-text">
                        <p>I had had previous experiences that made me believe God hated me and was trying to kill me. I was always afraid trying so hard to please him and know. At Adullam, I learned so much about God that I knew I was being lied to. I learned that God is love and he truly desires us to know him and fellowship with him. Adullam was truly life-changing</p>

                        <p><strong><em>Nicole,</em></strong> Texas</p>
                    </div>
                </div> 
                {/* <!-- end of card --> */}
                <div className="testimony-card">
                    <div className="testifier-img-container">
                        <img src={testifier}  alt="testifier" />
                    </div>
                    <div className="testimony-text">
                        <p>Adullam for me was more than a school of ministry, it was a school of life. I was totally transformed. I learnt love, forgiveness, wisdom and how to live by Faith. Ancestral covenants and chains of limitations were destroyed. God blessed me with one of His choicest sons as a husband. </p>
                        
                        <p><strong><em>Oluwabunmi Israel,</em></strong> Ibadan, Nigeria</p>
                    </div>
                </div> 
                {/* <!-- end of card --> */}

                <div className="testimony-card">
                    <div className="testifier-img-container">
                        <img src={ testifier3 }  alt="testifier" />
                    </div>
                    <div className="testimony-text">
                        <p>Fulfilling my calling would have been a nightmare without the kind of training I received at Adullam. I have been ministering part-time for 2 years when I realized I was not prepared for ministry. I have learnt Theology and been trained for ministry. The principles of prayer, interpretation and application of scriptures, territorial invasion, and establishment of the reign of God's Kingdom in any culture.</p>
                        
                        <p><strong><em>Lesley Uzohuo,</em></strong> California, USA</p>
                    </div>
                </div> 
                {/* <!-- end of card --> */}
            </div>
            {/* <!-- end of testimonies-container --> */}
        </section>
    );
}
 
export default Testimonies;