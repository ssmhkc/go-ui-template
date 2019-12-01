import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from "@material-ui/core";
import { useGameCollection } from '../Hook/index';
import { Card } from '../CardMultiple/index';


const useStyles = makeStyles(theme => ({
    
}));

const List = props => {
    const classes = useStyles();
    const { box } = classes;

    const { collection } = props;
    const list = useGameCollection(collection);
    console.log(list)


    return (
        <Grid container>

            {
                list.map((item, index) => <Grid item xs={3}> <Card data={item} key={index} /> </Grid>)
            }

        </Grid>
    )
}

export default List;