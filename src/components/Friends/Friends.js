import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
   const [friends, setFriends] = useState([]);
   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => setFriends(data));
   }, [])

   return (
      <div>
         <h2>This is Friends: {friends.length} </h2>
         <div className='friend-container'>
            {
               friends.map(friend => <Friend
                  key={friend.id}
                  friend = {friend}
               ></Friend>)
            }
         </div>
         
      </div>
   );
};

export default Friends;