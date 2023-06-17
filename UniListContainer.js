import axios from "axios";
import { useEffect, useState} from "react";


function UniListContainer() {

    const [uniList, setuniList] = useState([])

    useEffect (() => { 
        axios.get('http://universities.hipolabs.com/search?country=United+States').then(
        (response) => {
            setuniList(response.data)
        }
        )

    }, []); 
    console.log(uniList)
    return (
        <div className="container">
            Uni List container goes here

            <div>
                When you select an item from the list, it should display in the box above
            </div>
        </div>
    )
}

export default UniListContainer;
