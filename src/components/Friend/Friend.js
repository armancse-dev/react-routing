import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
   const {id, name, phone, website, address} = props.friend;
   const navigate = useNavigate();
   const friendStyle = {
      border: '3px solid goldenrod',
      padding: '10px',
      borderRadius: '10px'
   };
   const url = `/friend/${id}`;
   const handleClick = () =>{
      navigate(`/friend/${id}`)
   }
   return (
      <div style={friendStyle}>
         <h2>I am: {name} {id}</h2>
         <h5>Call me: {phone}</h5>
         <p>Visit Me: {website}</p>
         <p><small>I live in: {address.city}</small></p>
         <Link to={url}>Visti Me</Link>
         <br />
         <Link to={url}>
            <button>Visit Me</button>
         </Link>
         <br />
         <button onClick={handleClick}>Visit Me 2</button>
      </div>
   );
};

export default Friend;