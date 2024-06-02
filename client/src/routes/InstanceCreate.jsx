import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// supabase stuff
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

import styles from "./InstanceUpdate.module.css";

const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // State to store updated title
  const [content, setContent] = useState(""); // State to store updated content
  const [imageURL, setImageURL] = useState(""); // State to store updated image URL

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
    // e.preventDefault(); // Prevent default form submission behavior
    // try {
    //   // Update post in Supabase database
    //   const { error } = await supabase.from("posts").insert({
    //     title: title,
    //     content: content,
    //     image_url: imageURL,
    //     upvotes: 0,
    //   });
    //   if (error) {
    //     throw error;
    //   }
    //   navigate("/");
    // } catch (error) {
    //   console.error("Error creating post:", error.message);
    // }
  };

  return (
    <div className={styles.edit_post}>
      <h2>Create Post</h2>
      <div className={styles.form}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title ..."
          onChange={handleTitleChange}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          placeholder="Enter Content ..."
          onChange={handleContentChange}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          placeholder="Enter Image URL ..."
          onChange={handleImageURLChange}
        />

        <button onClick={handleSubmit}>Create Post</button>
      </div>
    </div>
  );
};

export default EditPost;
