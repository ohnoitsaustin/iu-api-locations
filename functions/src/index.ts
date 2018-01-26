/*jslint node: true */
'use strict';

import functions = require('firebase-functions');

import * as d from './domain';

const gresham : d.Location = {
    Name:"Gresham",
    Campus:"Bloomington",
    Geolocation:{ Latitude:39.176520, Longitude:-86.519733 },
    Type:d.LocationType.DiningHall,
    Hours:[]
}

const allLocations  = () : d.Location[] => 
    [
        gresham
    ]  

const antoninis : d.Service = {
    Name:"Antonini's",
    Type:d.ServiceType.Restaurant,
    Location:gresham,
    Hours:[]
}

const allServices = () : d.Service[] =>
    [
        antoninis
    ]

exports.locations = functions.https.onRequest((request, response) => {
    response.json(allLocations())
});

exports.services = functions.https.onRequest((request, response) => {
    response.json(allServices())
});