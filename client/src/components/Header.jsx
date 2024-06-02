import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Flip Finder</h1>
      <input type="text" placeholder="Search..." className={styles.searchBar} />
      <Link to={"/"}>
        <button className={styles.homeButton}>Home</button>
      </Link>
      {/* <Link to={"/create"}>
        <button className={styles.createPostButton}>Create Instance</button>
      </Link> */}
    </div>
  );
};

export default Header;

// import React, { useState } from 'react';

// const Header = ({ posts, onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState(''); // State to store search query

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     const query = e.target.value.toLowerCase(); // Convert search query to lowercase
//     setSearchQuery(query);
//     performSearch(query); // Perform search when search input changes
//   };

//   // Function to perform fuzzy search
//   const performSearch = (query) => {
//     const results = posts.filter(post =>
//       post.title.toLowerCase().includes(query) // Check if post title includes search query
//     );
//     onSearch(results); // Call onSearch callback with search results
//   };

//   return (
//     <div className="header">
//       <h1>Title</h1>
//       {/* Search bar */}
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Search by title..."
//       />
//       {/* Other header elements */}
//     </div>
//   );
// };

// export default Header;
