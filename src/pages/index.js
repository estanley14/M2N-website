import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePage from '../components/home'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomePage />   
  </Layout>
)

export default IndexPage
