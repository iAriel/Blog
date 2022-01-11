import React from 'react'
import './index.css'
import Heart from '../../assets/icons/heart.svg'
export default function Card() {
    return (
        <main className="blogContent">
            <div className="post">
                <div className="postDetails">
                    <span className="postDate">02 de jul, 2021</span>
                    <img src={Heart} />
                </div>
                <div className="cardContent">
                    <p className="titlePost">Agora é oficial: o Windows 11 está vindo</p>
                    <p className="postContent"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
                </div>

            </div>
        </main>
    )
}