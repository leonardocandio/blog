import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AccountingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Accounting" />
      <Bio />
      <h1>Pavlina Academy</h1>
      <p>
        Professor Peter Pavlina, former Professor of Harvard Extension School,
        provides the pillars for beginners. Here you will find an outstanding
        course on financial statements, covering the secrets to the “juice” in
        these financial reports.
        <br />

        <a href="https://www.pavlinaacademy.com" target={`_blank`}>Learn More</a>

      </p>
    </Layout>
  );
};

export default AccountingPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
