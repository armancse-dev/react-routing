import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FriendDetail = () => {
   const {friendId} = useParams();
   const [friend, setFriend] = useState({});
   const navigate = useNavigate();
   useEffect(() =>{
      const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

      fetch(url)
         .then(res => res.json())
         .then(data => setFriend(data));
   }, []);
   const url = `/friends`;
   const handleFrdClick = () => {
      navigate('/friends');
   }
   return (
      <div>
         <h3>Friend Detail of: {friendId}</h3>
         <h1>{friend.name}</h1>
         <h2>{friend.phone}</h2>
         <h4>{friend.website}</h4>
         <p>Works at: {friend.company?.name}</p>
         <Link to={url}>
            <button>See All Friends</button>
         </Link>
         {/* <button onClick={handleFrdClick}>See All Friends</button> */}
      </div>
   );
};

export default FriendDetail;