import React from 'react'
import PropTypes from 'prop-types'
import * as Layout from 'components/layout'

const Page = props => (
  <div>
    <Layout.Navigation navPosition={props.navPosition} />
    <Layout.Content>{props.children}</Layout.Content>
  </div>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  navPosition: PropTypes.number.isRequired
}

export default Page
