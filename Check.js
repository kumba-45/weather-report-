import "./Check.css";
import React, {useState} from "react";

const Check = ()=>{
    const [city, setCity] =useState("");
    const [tem, setTem] = useState("");
    const nameChangeHandler = (event) =>{
        setCity(event.target.value);
    }
    const submitHandler = e=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response => response.json()
        ).then(data=> {
            const kelvin = data.main.temp;
            const celsius = kelvin - 273.15;
            setTem( city +" " + "at" + " "  + celsius + " " + "Degree Celsius" );
            setCity('');
        })
    }
    return(
        <div class="card">
        <h1 class="h1">Weather Report Check</h1>
        <form onClick={submitHandler} class="input">
            <input class="input1" type="text" value={city} placeholder="Enter City Name" onChange={nameChangeHandler}/><br/>
            <input class="input2" type="submit" value="getTemprature"/>
        </form>
        <p class="para">{tem}</p>
        </div>

    );

};
export default Check;