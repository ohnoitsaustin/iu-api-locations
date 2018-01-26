export type Name = string;
export type Building = string;
export type Campus = string;
export type Latitude = number;
export type Longitude = number;
export class Geolocation {
    Latitude: Latitude;
    Longitude: Longitude;
}

export type Hours = {
    Open: Date,
    Close: Date;
}

export enum LocationType {
    DiningHall,
    Library,
}

export type Location = {
    Name: Name; // Gresham
    Campus: Name; // Bloomington
    Type: LocationType; // Dining Hall
    Geolocation: Geolocation;
    Hours: Hours[];
}

export enum ServiceType { 
    Cafe        = 1 << 0,    // 0b0001
    Restaurant  = 1 << 1,    // 0b0010
    ComputerLab = 1 << 2,    // 0b0100
    
    Food = Cafe | Restaurant // 0b0011  
}


export type Service = {
    Name: Name; // Antonini's
    Type: ServiceType; // Restaurant
    Location: Location; // Gresham
    Hours: Hours[];
}