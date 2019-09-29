import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"

import styles from "../css/postTemplate.module.css"

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const mainImage = image.childImageSharp.fluid

  return (
    <Layout>
      <section className={styles.template}>
        <AniLink fade to="/" className={styles.link}>
          Back to all posts
        </AniLink>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>By {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <Image fluid={mainImage} alt="article main picture" />
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
