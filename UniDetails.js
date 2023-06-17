import axios from "axios";
import { useState, useEffect } from 'react';

function UniDetails() {

    const [count, setCount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [Details, setDetails] = useState('');
    const [UniDetails, setUnidetails] = useState([]);

    const setUniDetails = () => {}


    if (!Details) {
        axios.get('http://universities.hipolabs.com/search?country=United+States').then((response) => {
            // console.log (response.data) // setDetails(response.data.fact)
        })
    }

    if (!UniDetails || UniDetails.length === 0) {
        axios.get('http://universities.hipolabs.com/search?country=United+States').then((response) => {
            // setUniDetails(response.data.data)
        })
    }

    console.log('------Outside the useEffect------')

    return (
        <div className="container">
            Uni Details goes here
            
        </div>
    )
}

export default UniDetails;