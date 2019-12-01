import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { useCard } from '../Hook/index';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import './style.css'
const useStyles = makeStyles(theme => ({
    item: {
        color: "white",
        font: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        background: "black",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        margin: 15,
        overflow: 'hidden',
        maxHeight: "150px",
        position: "relative",
        "&:hover": {
            cursor: 'pointer'
        },
        "& > img": {
            width: "100%",
            height: "100%",

            
        },
        
    },
    header: {
        background: "radial-gradient(transparent 0%, black 100%)",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    buttons: {
        width: '165px',
        height: '45px',
        border: '2px solid white',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginRight: 15,
        borderRadius: 2,
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    }
}));

const Card = props => {
    const classes = useStyles();
    const { item, image, header } = classes;

    const { data } = props;
    const card = useCard(data);

    const [url, setUrl] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        const {url,header} = card;
        setUrl(url);
        setTitle(header);
    }, [card]);

    return (
        <div className={item} >
            <img className={image} src={url} />
            <div className={header}>
                <div className={classes.buttons+ " neonButton"}><span><a className={classes.link} href={url}>{title}</a></span></div>
            </div>
        </div>
    )
}

export default Card;