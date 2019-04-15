import React from 'react'
import * as GuestBook from 'components/guestbook'
import { Page } from 'components/page'

const IndexPage = () => (
  <Page title='Welcome!' navPosition={0}>
    <GuestBook.EntryForm />
  </Page>
)

export default IndexPage
