import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import OrganizationPage from '../components/organization'

export default function organization() {
    return (
        <>
            <Layout>
                <Seo title={'Organization'} />
                <OrganizationPage />
            </Layout>
        </>
    )
}