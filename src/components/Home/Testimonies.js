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
                        <p>My experience in Adullam is incomplete without the mention of my super intellectual, Holy Ghost-filled Lecturers. I'm forever grateful. To the one in whom wisdom has found a home, in person of the provost Rev Daniel O. In you millions of lives are being groomed and transformed, I say thank you.</p>

                        <p><strong><em>Kadeema Blessing,</em></strong> Makurdi, Nigeria</p>
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
                        <p>I hated Theological Schools before now but Adullam changed my orientation entirely, the daily Bible Reading and praying in Tongue Exercise have become my culture and lifestyle. I began praying for 5 hours streched in Adullam. Adullam also groomed me in Evangelism. Glory to God.</p>
                        
                        <p><strong><em>Ukpa Nwanneka Chukwuma,</em></strong> Owerri, Nigeria</p>
                    </div>
                </div> 
                {/* <!-- end of card --> */}
            </div>
            {/* <!-- end of testimonies-container --> */}
        </section>
    );
}
 
export default Testimonies;