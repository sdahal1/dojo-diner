import React from 'react';
import {Link} from '@reach/router';


const Entrees = () => {
    return (
        <div className= "col-sm-8 offset-sm-2">
            <ul className= "list-group">
                <li className="list-group-item bg-warning text-light mt-3">Entrrees</li>
                <li className="list-group-item">Shrimp Alfredo</li>
                <li className="list-group-item">Ramen</li>
                <li className="list-group-item">Gyros</li>
                <li className="list-group-item">Grilled Salmon</li>
                <li className="list-group-item">Sea Bass</li>
                <li className="list-group-item">Lobster</li>
        

            </ul>
            <Link className = "btn btn-primary"to="/appetisers">Next</Link>
        </div>
    );
};

export default Entrees;