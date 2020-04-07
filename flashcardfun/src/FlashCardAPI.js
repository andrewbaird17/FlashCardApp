import React from 'react';
import axios from 'axios';

var CardsAPI = [];

axios.get('https://localhost:44393/api/collection').then((response) => {
    CardsAPI = response.data;
});

export default CardsAPI;