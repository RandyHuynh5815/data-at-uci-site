import React from 'react';
import "./title.scss"

export default function Title() {
    const handleClick = () => {
        let url = "https://docs.google.com/forms/d/e/1FAIpQLSclueO-3bwhLinPvt3JQIwkLfa4t-OknV6PHS6esMaFertaKQ/viewform"
        window.location.href = url;
    }

    return (
        <div class="title">
            <h1>Data @ UCI</h1>
            <p>A community for Anteaters to explore the world of data and their place in it</p>
            <button id="involve" onClick={handleClick}>Get Involved</button>
        </div>
    )
}
