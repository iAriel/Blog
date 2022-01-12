import React from 'react'
import './index.css'
import Heart from '../../assets/icons/heart.svg'
export default function Card(props) {
    return (
        <main className="blogContent">
            <div className="post">
                <div className="postDetails">
                    <span className="postDate">{props.date}</span>
                    <img src={Heart} />
                </div>
                <div className="cardContent">
                    <p className="titlePost">{props.title}</p>
                    <p className="postContent">{props.content}</p>
                </div>

            </div>
        </main>
    )
}