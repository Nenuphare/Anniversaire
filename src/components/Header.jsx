import { Grid } from '@mui/material';
import React from 'react';

const Header = () => {
  const borderedGridStyleLeft = {
    borderBottom: '2px solid #000',
    padding: '10px',
    textAlign: 'left', // Alignez le texte à gauche
  };

  const borderedGridStyleRight = {
    borderBottom: '2px solid #000',
    padding: '10px',
    textAlign: 'right', // Alignez le texte à droite
  };

  return (
    <div>
      <Grid container spacing={0}>
        {/* Premier élément avec bordure et aligné à gauche */}
        <Grid item xs={6} style={borderedGridStyleLeft}>
          <h1>CITATION ET ANNIVERSAIRES</h1>
        </Grid>

        {/* Espacement */}
        <Grid item xs={0} />

        {/* Deuxième élément avec bordure et aligné à droite */}
        <Grid item xs={6} style={borderedGridStyleRight}>
          <h1>DATE D'AJOURD'HUI</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
