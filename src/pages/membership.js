import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import MembershipPage from '../components/membership'

export default function membership() {
    return (
        <Layout>
            <Seo title={'Membership'} />
            <MembershipPage />
        </Layout>
    )
}
