import React from "react"
import { Link, graphql } from 'gatsby';


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/Backgroundsection'
import Info from '../components/Home/Info';
import Menu from '../components/Home/Menu';
import Contact from '../components/Home/Contact';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Caffe Pietro - Home" keywords={[`gatsby`, `application`, `react`]} />
   <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Get a taste of the real Italy!" 
   />
   <Info />
   <Menu items={data.menu}/>
   <Contact />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu: allContentfulMenuItem {
    edges {
      node {
        id
        title
        price
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;



export default IndexPage;
