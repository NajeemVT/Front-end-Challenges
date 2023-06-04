import classes from "./styles.module.scss";

import QRImage from "./images/image-qr-code.png";
const QR = () => {
  return (
    <div className={classes.cardContainer}>
      <section className={classes.card}>
        <img src={QRImage} aria-placeholder="QR Code" alt="QR Code" />
        <section>
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </section>
    </div>
  );
};

export default QR;
