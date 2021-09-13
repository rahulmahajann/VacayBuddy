import { useMediaQuery, Paper, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import GoogleMapReact from 'google-map-react';
import React from 'react';

import useStyles from './styles';

const Map = () => {
    
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 0, lng: 0};

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = { { key: 'AIzaSyCJSDkyF_27yqsSq-AirmVf-5oF-vMKuvs'}}
                defualtCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                options = {''}
                onChange = {''}
                onChildClick= {''}
            >
                   
            </GoogleMapReact> 
        </div>
    );
}

export default Map;