import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';


const Blogs = ({handleBookmark,handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    }, [])

    return (
        <div className='md:w-2/3'>
           {
            blogs.map(blog => <Blog
                 blog={blog}
                 handleBookmark ={handleBookmark}
                 handleMarkAsRead ={handleMarkAsRead}
                 ></Blog>)
           } 
        </div>
    );
};

export default Blogs;