import React, { useState, useEffect } from 'react';
import Carousel from '../slideshow/controls';
import SearchBar from '../SearchBar/components/searchBar';

function MyAccount() {

    const [user, setUser] = useState([])
    console.log(user)
    useEffect(() => {
        fetch("http://localhost:7080/users")
            .then(response => response.json())
            .then(json => setUser(json));
    }, []);




// use effect 
// inside the use effect you will make an api call/fetch call
// you will fetch the data of the use that is currently logged in
// you will create a state using the use state hook 
// set the user info to that state 




    return(
        <div>
            <SearchBar />
            {/* once your state has data you can refference it here, inside of the the h2 tags */}
            <h2>
            Hello {user.firstName}
            
            </h2>
            <Carousel />

        </div>
    )
}

export default MyAccount;