import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { useGameCollection } from '../Hook/index';
import { Card } from '../Card/index';

const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center",
    }
}));

const List = props => {
    const classes = useStyles();
    const { box } = classes;

    const { collection } = props;
    const list = useGameCollection(collection);

    return (
        <div className={box} >

            {
                list.map((item, index) => <Card data={item} key={index} />)
            }

        </div>
    )
}

export default List;