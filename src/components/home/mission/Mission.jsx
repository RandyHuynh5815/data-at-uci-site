import React from 'react'
import "./mission.scss"

export default function Mission() {

    const handleClick = () => {
        let url = "https://docs.google.com/forms/d/e/1FAIpQLSclueO-3bwhLinPvt3JQIwkLfa4t-OknV6PHS6esMaFertaKQ/viewform"
        window.location.href = url;
      }
    return (
    <div className="mission">
        <h2>Our Mission</h2>
        <p>
            Data@UCI aims to nurture a community of Anteaters exploring
            their place in an increasingly data-driven world. 
            Through workshops, professional panels, and speaker events, 
            we provide resources and a network for students to grow their 
            analytical skills and gain a deeper appreciation for data 
            — helping them to succeed in college and in their careers. 
            We are a student-run organization ultimately dedicated to the 
            UCI and larger Orange County communities.
        </p>
        <button id="involve" onClick={handleClick}>Learn More About the Club</button>
    </div>
    )
}
