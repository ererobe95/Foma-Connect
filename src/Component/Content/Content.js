import React from 'react';
import { Grid } from '@mui/material';
import LeftBar from '../Leftbar/LeftBar';
import Feed from '../Feed/Feed';
import Add from '../Add/Add';
import RightBar from '../RightBar/RightBar';

function Content() {
  return (
    <>
    <Grid container>
        <Grid item sm={2} xs={2}><LeftBar /></Grid>
        <Grid item sm={7} xs={10}><Feed /></Grid>
        <Grid item sm={3}><RightBar /></Grid>
    </Grid>
    <Add />
    </>
  )
}

export default Content