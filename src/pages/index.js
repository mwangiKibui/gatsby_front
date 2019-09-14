import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo";
import News from "../components/main/news";
import Home from "../components/main/Home";

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/components.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <Home />
        <News />
  </Layout>
)

export default IndexPage
