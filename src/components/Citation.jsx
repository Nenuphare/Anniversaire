import React from 'react';
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
}));

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
    flexDirection: 'column',
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
          <Item style={white_back}>
            <p>There is a Japan legend that said ...
              <br />
              -Japanese Legend
            </p>
          </Item>
        </Grid>
        <Grid style={borderedGridStyle}>
          <Item item style={white_back}>
            <p>There is a Japan legend that said ...
              <br />
              -Japanese Legend
            </p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Citation;
