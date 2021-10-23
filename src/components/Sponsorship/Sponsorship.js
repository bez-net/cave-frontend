import React from "react";
import "./sponsorship.css";
import Pounds from "../../images/pound.svg";
import Dollars from "../../images/dollar.svg";
import Euro from "../../images/euro.svg";
import Naira from "../../images/naira.svg";

export const Sponsor = () => {
  return (
    <main>
      {/* Header Banner */}
      <div className="sponsor__header">
        <header className="section-header">
          <h1>SPONSORSHIP / PARTNERSHIP</h1>
        </header>
      </div>

      {/* more info section */}
      <section id="more-info">
        <header className="section-header">
          <h2>Donation Details</h2>
        </header>
        <div className="more__info container">
          <div className="more__info--content">
            <div className="info__img--container">
              {/* <img src={provost} alt="adullam provost" /> */}
            </div>
            <div className="more__info--text">
              <p>
                Due to the demography of applicants at Adullam, such demography
                is barely transiting from being dependants and may not be able
                to bear the cost of the program. We have largely had to make
                full or partial scholarships (as high as 86%) available to as
                many that would need, depending on the generosity of kindhearted
                partners.
              </p>

              <p>
                We, therefore, call on like-minded partners to support us
                financially that we may keep this vision alive and accessible to
                as many that would desire it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Donation in Pounds</h2>
          <p>
            Correspondent Bank: <strong>Citibank London</strong>
          </p>

          <p>
            Swift Code: <strong>CITIGB2L</strong>
          </p>
          <p>
            For Credit To:<strong> United Bank for Africa Plc</strong>
          </p>
          <p>
            Account No: <strong> 13664090</strong>
          </p>
          <p>
            SWIFT CODE: <strong> UNAFNGLA</strong>
          </p>
          <p>
            For Final Credit to:{" "}
            <strong> Remnant Christian Network Bible Seminary Adullam.</strong>
          </p>
          <p>
            Beneficiary Account No: <strong>3003413095</strong>
          </p>
          <img src={Pounds} alt="Pounds" />
        </div>

        <div className="box red">
          <h2>Donation in Dollar</h2>
          <p>
            Correspondent Bank: <strong>Citibank New York</strong>
          </p>

          <p>
            Swift Code: <strong>CITIUS33</strong>
          </p>
          <p>
            Routing or ABA No: <strong>021000089</strong>
          </p>
          <p>
            For Credit To:<strong> United Bank for Africa Plc</strong>
          </p>
          <p>
            Account No: <strong> 36320321</strong>
          </p>
          <p>
            SWIFT CODE: <strong> UNAFNGLA</strong>
          </p>
          <p>
            For Final Credit to:{" "}
            <strong> Remnant Christian Network Bible Seminary Adullam.</strong>
          </p>
          <p>
            Beneficiary Account No: <strong> 3003413033</strong>
          </p>
          <img src={Dollars} alt="Dollars" />
        </div>

        <div className="box box-down blue">
          <h2>Donation in Euro</h2>
          <p>
            Correspondent Bank: <strong>Citibank London</strong>
          </p>

          <p>
            Swift Code: <strong>CITIGB2L</strong>
          </p>
          <p>
            Sort Code: <strong>18 50 08</strong>
          </p>
          <p>
            For Credit To:<strong> United Bank for Africa Plc</strong>
          </p>
          <p>
            IBAN: <strong>GB29CITI18500813664082</strong>{" "}
          </p>
          <p>
            Account No: <strong>13664082</strong>
          </p>
          <p>
            SWIFT CODE: <strong> UNAFNGLA</strong>
          </p>
          <p>
            For Final Credit to:{" "}
            <strong> Remnant Christian Network Bible Seminary Adullam.</strong>
          </p>
          <p>
            Beneficiary Account No: <strong>3003413088</strong>
          </p>
          <img src={Euro} alt="euro" />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Donation in Naira</h2>
          <p>
            Account Name:
            <strong>Remnant Christian Network Bible Seminary Adullam</strong>
          </p>

          <p>
            Account Number: <strong>1024318850</strong>
          </p>
          <p>
            Bank Name: <strong>United Bank for Africa</strong>
          </p>
          <img src={Naira} alt="naira" />
        </div>
      </div>

      {window.scrollTo(0, 0)}
    </main>
  );
};
