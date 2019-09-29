import React from "react"

import PostCard from "./PostCard"

import styles from "../css/postlist.module.css"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>The Art of Coding</h1>
      <h4>Personal blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard post={node} key={index} />
        })}
      </div>
    </section>
  )
}

export default PostList
