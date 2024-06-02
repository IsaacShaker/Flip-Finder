import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostSummary from "./components/PostSummary";

// supabase stuff
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]); // State to store posts data
  const [sortBy, setSortBy] = useState("newest"); // State to manage sorting option

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       // Fetch posts data from Supabase database
  //       const { data, error } = await supabase.from("posts").select("*");

  //       if (error) {
  //         throw error;
  //       }

  //       // Set posts data in state
  //       setPosts(data);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error.message);
  //     }
  //   };

  //   fetchPosts(); // Call fetchPosts function when component mounts
  // }, []);

  // Function to sort posts by newest or most popular (most upvotes)
  const sortPosts = () => {
    if (sortBy === "newest") {
      return posts
        .slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortBy === "popular") {
      return posts.slice().sort((a, b) => b.upvotes - a.upvotes);
    }
    return posts;
  };

  // Event handler for sorting option change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      {/* Sorting options */}
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="newest">Newest</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
      <div className="post-container">
        {/* Render posts based on sorting option */}
        {sortPosts().map((post) => (
          <Link to={"/post/" + post.id}>
            <PostSummary key={post.id} post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;
