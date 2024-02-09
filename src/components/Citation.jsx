import React from 'react';
import { Grid } from "@mui/material";

const Citation = () => {
  const border = {
    borderLeft: '2px solid #000',
  };
  const white_back = {
    backgroundColor: "#FFFFFF",
    borderRadius: '10px',
    height: "100px"
  };
  const centeredGrid = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    position: 'relative', // Ajout de position relative pour le conteneur parent
    margin: '10px',
  };
  const borderedGridStyle = {
    border: '2px solid #000',
    borderRadius: '5px',
    backgroundColor: '#DF80AC',
    padding: '5px',

  };

  return (
    <div style={border}>
      <Grid container style={centeredGrid}>
        <Grid style={borderedGridStyle}>
          <Grid item style={white_back}>
            <p>There is a Japan legend that said ...
              <br />
              -Japanese Legend
            </p>
          </Grid>
        </Grid>
        <Grid style={borderedGridStyle}>
          <Grid item style={white_back}>
            <p>There is a Japan legend that said ...
              <br />
              -Japanese Legend
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Citation;
