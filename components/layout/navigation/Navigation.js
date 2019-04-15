import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { StyledLink } from 'components/utils/link'

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.navPosition
    }
  }

  render () {
    const { value } = this.state

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Button variant={value === 0 ? 'outlined' : 'text'} color='inherit'>
              <StyledLink href='/'>Sign Guest Book</StyledLink>
            </Button>
            <Button variant={value === 1 ? 'outlined' : 'text'} color='inherit'>
              <StyledLink href='/guestbook'>View Guest Book</StyledLink>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navigation.propTypes = {
  navPosition: PropTypes.number.isRequired
}

export default Navigation
