import { Grid } from "@mui/material";
import "./App.css";
import Anniv from "./components/Anniv.jsx";
import Citation from "./components/Citation.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Grid container>
        {/* La hauteur de chaque Grid est définie à 100% de la hauteur de la vue, en soustrayant la hauteur du Header (64px) */}
        <Grid
          item
          xs={6}
          style={{ height: "600px", backgroundColor: "#DF80AC" }}
        >
          {/* Contenu du composant Citation */}
          <Anniv />
        </Grid>

        <Grid item xs={6}>
          {/* Contenu du composant Anniv */}
          <Citation />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;