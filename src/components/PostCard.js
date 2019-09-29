import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/postcard.module.css"

const PostCard = ({ post }) => {
  const { title, date, author, slug } = post.frontmatter
  const mainImage = post.frontmatter.image.childImageSharp.fluid

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={mainImage} alt="article" />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>By {author}</span> / <span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <AniLink fade to={`/${slug}`} className={styles.link}>
            Read More
          </AniLink>
        </div>
      </div>
    </article>
  )
}

export default PostCard
