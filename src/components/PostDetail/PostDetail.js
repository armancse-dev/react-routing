import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
   const {postId} = useParams();
   const [post, setPost] = useState({});
   useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setPost(data))
   }, []);
   return (
      <div>
         <h2>Post Detail: {postId}</h2>
         <h4>{post.title}</h4>
         <p>{post.body}</p>

         
      </div>
   );
};

export default PostDetail;