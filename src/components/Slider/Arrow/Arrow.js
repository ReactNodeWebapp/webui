import React from 'react';

import './Arrow.scss';

function Arrow({direction, handleClick}) {
    return (
        <div
            onClick={handleClick}
            className="arrow"
            style={direction === "right" ? { right : "0"} : {left: "0"}}
        >
            {direction === "right" ?
                <svg xmlns='http://www.w3.org/2000/svg' width='5' height='9'>
                    <path d='M.221 8.81a.668.668 0 010-.945l3.236-3.222a.181.181 0 000-.26L.195 1.135A.67.67 0 01.202.184a.65.65 0 01.913.006l3.564 3.55a1.093 1.093 0 010 1.548L1.14 8.81a.65.65 0 01-.918 0l.156-.171-.157.17z'/>
                </svg>
                :
                <svg xmlns='http://www.w3.org/2000/svg' width='5' height='9'>
                    <path d='M4.779.19a.668.668 0 010 .945L1.543 4.357a.181.181 0 000 .26l3.262 3.248a.67.67 0 01-.007.951.65.65 0 01-.913-.006L.321 5.26a1.093 1.093 0 010-1.548L3.86.19a.65.65 0 01.918 0l-.156.171.157-.17z'/>
                </svg>
            }
        </div>
    )
}

export default Arrow;