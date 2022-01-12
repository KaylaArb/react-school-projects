import React from 'react';
import '../styles/BookDisplay.css';

function BookDisplay({ Data }) {

    return (
        <div className="Block">
            {Data.volumeInfo.imageLinks.thumbnail ? <img src={Data.volumeInfo.imageLinks.thumbnail } className="PosterImage" alt=''/> : <p className="NoImage">No Image</p>}
            <div className="TextContainer">
            <a target='_blank' href={Data.volumeInfo.previewLink} rel="noreferrer">
                <h3 className="Title">{Data.volumeInfo.title}</h3>
            </a>
                <p className="Description">Description: {Data.volumeInfo.description}</p>
            </div>
        </div>
    )
}

export default BookDisplay;
