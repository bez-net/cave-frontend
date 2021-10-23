import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      {/* <!-- ABOUT TEXTAREA --> */}
      <header className="section-header">
        <h1>ABOUT ADULLAM</h1>
      </header>
      <div className="about-content">
        <div className="about-text">
          <h2>RCN Bible Seminary - ADULLAM</h2>
          <p>
            The RCN Bible Seminary – Adullam, is a ministry training program
            designed with a learning environment that has an intense atmosphere
            of Heaven, accompanied with Spiritual impartations. It is a training
            and equipping that is imparting, intellectual, and rigorous. A
            program characteristic of an intense academic rigor alongside a high
            spiritual engagement.
          </p>

          {/* <p>Adullam means Justice of the people. It was mentioned eight (8) times in scriptures. The Cave of Adullam stood on the old Roman road in the valley of Elah, not far from Gath, which was the scene of David's memorable victory over Goliath (1Samuel 17:2). The Cave of Adullam became a place of resort for David. It was the location where all that were stranded, discourage and had given up on life resorted to David to find meaning (1Sam. 22:1-2). Adullam became a forge where charlatans are turned into champions, the PLACE, both for the apprentice and the veteran, and a retreat center for refreshing and retooling (2Sam.23:13-17). It was called "the glory of Israel" (Micah 1:15).</p>  */}

          <h2>Academic Programs</h2>
          <p>
            The programs are designed to establish the believer in the
            foundations of the Christian Faith. It begins to expose the believer
            to the realities of the Kingdom of God, Truths about Spirit Life,
            the Government of God and the implications of these realities in
            natural existence in their various ramifications in everyday life
            situations.
          </p>

          <p>The RCN Bible Seminary - Adullam, offers two program options:</p>
          <ul>
            <li>
              <p>On-Campus Option</p>
            </li>
            <li>
              <p>Online Option</p>
            </li>
          </ul>
          {/* <!-- read more button --> */}
          <Link to="/about" className="readmore-btn">
            Read More
          </Link>
        </div>

        {/* <!-- YOUTUBE VIDEO --> */}

        <div className="youtube">
          <iframe
            className="about-video"
            src="https://www.youtube.com/embed/zJCMsVr434o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="about-video"
            width="450"
            height="315"
            src="https://www.youtube.com/embed/S83ZK3jy_OE?start=6929"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
