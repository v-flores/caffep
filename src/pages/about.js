import React from "react"
import { Link, graphql } from 'gatsby';


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/Backgroundsection'


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="About Us" 
    styleClass="about-background"
   />
   
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;



export default AboutPage;
