import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// supabase stuff
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

import styles from "./InstanceUpdate.module.css";

const EditPost = () => {
  const params = useParams(); // Get post ID from URL parameters
  let postId = params.id;
  const navigate = useNavigate();
  const [post, setPost] = useState(null); // State to store post data
  const [title, setTitle] = useState(""); // State to store updated title
  const [content, setContent] = useState(""); // State to store updated content
  const [imageURL, setImageURL] = useState(""); // State to store updated image URL

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       // Fetch post data from Supabase database using post ID
  //       const { data, error } = await supabase
  //         .from("posts")
  //         .select("*")
  //         .eq("id", postId)
  //         .single();

  //       if (error) {
  //         throw error;
  //       }

  //       // Set post data in state
  //       setPost(data);
  //       // Set title and content in state
  //       setTitle(data.title);
  //       setContent(data.content);
  //       setImageURL(data.image_url);
  //     } catch (error) {
  //       console.error("Error fetching post:", error.message);
  //     }
  //   };

  //   fetchPost(); // Call fetchPost function when component mounts
  // }, [postId]); // Dependency array to re-run effect when postId changes

  // Function to handle title input change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Function to handle content input change
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Function to handle content input change
  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Update post in Supabase database
      const { error } = await supabase
        .from("posts")
        .update({ title: title, content: content, image_url: imageURL })
        .eq("id", postId);

      if (error) {
        throw error;
      }

      navigate("/post/" + postId);
    } catch (error) {
      console.error("Error updating post:", error.message);
    }
  };

  // If post is still loading, display a loading message
  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div className={styles.edit_post}>
      <h2>Edit Post</h2>
      <div className={styles.form}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange} />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={imageURL}
          onChange={handleImageURLChange}
        />

        <button onClick={handleSubmit}>Update Post</button>
      </div>
    </div>
  );
};

export default EditPost;
