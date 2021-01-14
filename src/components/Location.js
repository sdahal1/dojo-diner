import React, {useState} from 'react';

const Location = (props) => {
    // const [cubanFood, setCubanFood] = useState(false)
    // if(props.place == "miami"){
    //     setCubanFood(true)
    // }


    return (
        <div className = "col-sm-8 offset-sm-2">
            {isNaN(props.place)? 
            <h1>Welcome to the {props.place} location</h1>:
            <h3>The location you entered seems to be number, wassup with that?</h3>
            }
            {props.place =="miami"? <h3>Time to load up the cuban food!</h3>: ""}
            {props.place =="dc"? <h3>Time to load up the mambo sauce!</h3>: ""}
            {props.place =="bali"? <h3>Time to load up the pad thai!</h3>: ""}



           
{/* 
            if (isNan(props.place)){
                <h1>Welcome to the {props.place} location</h1>
                if(props.place == "miami"){
                    <h3>Time to get some cuban food!</h3>
                }
            }
            else{
                 <h3>The location you entered seems to be number, wassup with that?</h3>
            }
             */}
            
        </div>
    );
};


export default Location;