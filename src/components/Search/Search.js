import React from 'react';

import './Search.scss';

function Search() {
    return (
        <div className="search">
            <form action="/search" method="GET" autoComplete="off" spellCheck="false">
                <div className="search__wrap">
                    <input className="search__input" name="search" type="search" placeholder="Search..."/>
                </div>
            </form>
        </div>
    );
}

export default Search;