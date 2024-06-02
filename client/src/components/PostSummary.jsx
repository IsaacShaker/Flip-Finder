import React from "react";
import styles from "./PostSummary.module.css"; // Import CSS module

const PostSummary = ({ post }) => {
  const { created_at, title, upvotes } = post;

  return (
    <div className={styles.postSummary_container}>
      <div className={styles.postSummary}>
        <p className={styles.postTime}>{getTimeString(created_at)}</p>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className={styles.postUpvotes}>Upvotes: {upvotes}</p>
      </div>
    </div>
  );
};

function getTimeString(timestamp) {
  const now = new Date();
  const postDate = new Date(timestamp);
  const elapsedTime = now - postDate;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `Posted: ${days} days ago`;
  } else if (hours > 0) {
    return `Posted: ${hours} hours ago`;
  } else {
    return `Posted: less than an hour ago`;
  }
}

export default PostSummary;
