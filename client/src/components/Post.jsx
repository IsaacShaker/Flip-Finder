import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// supabase stuff
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

import styles from "./Post.module.css"; // Import CSS module

const Post = () => {
  const params = useParams(); // Get post ID from URL parameters
  let postId = params.id;
  const [post, setPost] = useState(null); // State to store post data
  const [newComment, setNewComment] = useState(""); // State to store new comment
  const [commentsArr, setCommentsArr] = useState([]); // State to store comments
  const [currUpvotes, setCurrUpvotes] = useState(0); // State to store upvotes

  // console.log(postId);
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
  //     } catch (error) {
  //       console.error("Error fetching post:", error.message);
  //     }
  //   };
  //   fetchPost(); // Call fetchPost function when component mounts
  // }, [postId, commentsArr, currUpvotes]); // Dependency array to re-run effect when postId changes

  // Function to handle comment input change
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // Function to handle comment submission
  const handleSubmitComment = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // update comments string in Supabase database
      const { data, error } = await supabase
        .from("posts")
        .update({ comments: comments + "," + newComment })
        .eq("id", postId);

      if (error) {
        throw error;
      }

      // Add new comment to comments state
      setCommentsArr([...commentsArr, newComment]);

      // Clear comment input
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error.message);
    }
  };

  const handleUpvote = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .update({ upvotes: upvotes + 1 })
        .eq("id", postId);

      if (error) {
        throw error;
      }

      // Add increment upvotes by 1
      setCurrUpvotes(currUpvotes + 1);
    } catch (error) {
      console.error("Error Upvoting:", error.message);
    }
  };

  // Function to handle delete post action
  const handleDeletePost = async () => {
    try {
      // Delete post from Supabase database using post ID
      await supabase.from("posts").delete().eq("id", postId);
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  // If post is still loading, display a loading message
  if (!post) {
    return <p>Loading post...</p>;
  }

  // Destructuring post object to extract individual data fields
  const { created_at, title, content, image_url, upvotes, comments } = post;

  return (
    <div className={styles.post}>
      {/* Post meta information */}
      <p className={styles.post_meta}>
        Posted On: {new Date(created_at).toLocaleString()}
      </p>
      {/* Post title */}
      <h2 className={styles.post_title}>{title}</h2>
      {/* Post content (if available) */}
      {content && <p className={styles.post_content}>{content}</p>}
      {/* Post image (if available) */}
      {image_url && (
        <img src={image_url} alt="Post Image" className={styles.post_image} />
      )}
      <div className={styles.post_footer}>
        {/* Number of upvotes */}
        <div className={styles.buttons_container}>
          <lablel>Upvotes: {upvotes}</lablel>
          <button
            className={styles.button + " " + styles.orange}
            onClick={handleUpvote}
          >
            Upvote
          </button>
        </div>

        <div className={styles.comments}>
          {/* Comments section */}
          <p>Comments:</p>
          <ul>
            {/* Display each comment in a list */}
            {comments
              .split(",")
              .filter((str) => str !== "")
              .map((comment, index) => (
                <li key={index}>- {comment}</li>
              ))}
          </ul>

          {/* Comment form */}
          <form onSubmit={handleSubmitComment} className={styles.comments_form}>
            <textarea
              id="comment"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Leave a comment:"
              rows={2}
              cols={50}
            />
            <button
              className={styles.button + " " + styles.orange}
              type="submit"
            >
              Comment
            </button>
          </form>
        </div>

        {/* Buttons for editing and deleting post */}
        <div className={styles.buttons_container}>
          <Link to={"/edit-post/" + postId}>
            <button className={styles.button}>Edit</button>
          </Link>
          <Link to={"/"}>
            <button className={styles.button} onClick={handleDeletePost}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
