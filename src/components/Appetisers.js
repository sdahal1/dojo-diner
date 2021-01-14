import React from 'react';
import {Link} from '@reach/router';


const Appetisers = () => {
    return (
        <div className= "col-sm-8 offset-sm-2">
            <ul className= "list-group">
                <li className="list-group-item bg-danger text-light mt-3">Appetisers</li>
                <li className="list-group-item">Nachos</li>
                <li className="list-group-item">Hot Wings</li>
                <li className="list-group-item">Gator Bites</li>
                <li className="list-group-item">Tostones</li>
                <li className="list-group-item">Fried Pickles</li>
            </ul>
            <Link className = "btn btn-primary mr-3"to="/entrees">Previous</Link>
            <Link className = "btn btn-primary"to="/desserts">Next</Link>

        </div>

    );
};


export default Appetisers;