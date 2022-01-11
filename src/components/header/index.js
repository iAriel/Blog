import React from 'react';
import './index.css';
import magnifying_glass from '../../assets/icons/magnifying_glass.svg';

export default function Header(){
    return(
        <header className="headerContent">
            <div className="headerInfo">
                <p>Codelândia</p>
                <p>blog</p>
            </div>
            <div className="searchInput">
                <label for="searchBlog"><img src={magnifying_glass} /></label>
                <input type="text" id="searchBlog" className="search" placeholder="Pesquisar no blog" />
            </div>

        </header>
    )
}