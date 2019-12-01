import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from '../../CardList/index';
import { useGameCollectionRSS } from '../../Hook/index';

const useStyles = makeStyles(theme => ({
    root: {
        overflow: "hidden",
        background: "black",
        width: "100%",
        height: "100%"
    }
}));

function Several(props) {

    const classes = useStyles();
    const { root } = classes;

    const { data } = props;
    const { game } = data;

    const collection = useGameCollectionRSS(game);

    return (
        <div className={root}>
            <List collection={collection} />
        </div>
    );
}


export default Several;
