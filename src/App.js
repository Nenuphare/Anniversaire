import { Grid } from '@mui/material';
import './App.css';
import Anniv from './components/Anniv.jsx';
import Header from './components/Header.jsx';
import Citation from './components/Citation.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item xs={6} >
          <Anniv/>
        </Grid>

        <Grid item xs={6}>
          <Citation />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
