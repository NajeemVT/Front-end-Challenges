import { Link } from "react-router-dom";
import QRDesign from "./assets/qr-design.jpg";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.appContainer}>
      <h1>Front-end Challenges</h1>
      <div className={classes.gridContainer}>
        <div className={classes.card}>
          <img
            className={classes.cardImg}
            src={QRDesign}
            alt="QR Design"
            aria-placeholder="QR Design"
          />
          <div className={classes.cardBody}>
            <h1>QR Component</h1>
            <Link to={`qr`} className={classes.button}>
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
