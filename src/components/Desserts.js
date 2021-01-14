import React from 'react';
import {Link} from '@reach/router';



const Desserts = () => {
    return (
        <div className= "col-sm-8 offset-sm-2">
            <ul className= "list-group">
                <li className="list-group-item bg-danger text-light mt-3">Desserts</li>
                <li className="list-group-item">Wedding Cake</li>
                <li className="list-group-item">Lava Cake</li>
                <li className="list-group-item">Mochi</li>
                <li className="list-group-item">Red Velvet Cake</li>
                <li className="list-group-item">Tres Leches</li>
            </ul>
            <Link className = "btn btn-primary mr-3"to="/appetisers">Previous</Link>
            <Link className = "btn btn-primary mr-3"to="/entrees">Next</Link>

        </div>
    );
};


export default Desserts;