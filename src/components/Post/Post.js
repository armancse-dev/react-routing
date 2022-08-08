import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = (props) => {
   const {title,id} = props.post;
   const navigate = useNavigate();
   const handleCick = () =>{
      navigate(`/post/${id}`);
   }

   return (
      <div>
         <h2>{title}</h2>
         <Link to={`/post/${id}`}>Post Detail</Link>
         <br />
         <button onClick={handleCick}>Click to See Detail</button>
      </div>
   );
};

export default Post;