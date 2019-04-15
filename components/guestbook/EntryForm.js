import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Notify from 'components/utils/Notify'

class EntryForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      guestName: '',
      guestMessage: '',
      validResponse: true,
      validForm: true
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  async handleSubmit (event) {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      this.setState({
        validForm: false
      })
      return
    }

    const entry = JSON.stringify({
      guestName: this.state.guestName,
      guestMessage: this.state.guestMessage
    })

    this.setState({
      validForm: true,
      validResponse: true
    })

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: entry
      })

      if (!response.ok) {
        this.setState({
          validResponse: false
        })

        return
      }

      if (response.ok) {
        this.setState({
          entry,
          guestName: '',
          guestMessage: ''
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { entry, validForm, validResponse } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <FormControl component='fieldset' className='entryForm_formControl'>
            <FormGroup>
              <TextField
                margin='normal'
                inputProps={{ maxLength: 29 }}
                label='Name'
                type='text'
                id='guestName'
                name='guestName'
                value={this.state.guestName}
                onChange={this.handleInputChange}
                required
                variant='outlined'
              />

              <TextField
                margin='normal'
                multiline
                rows={4}
                inputProps={{ maxLength: 120 }}
                label='Message'
                id='guestMessage'
                name='guestMessage'
                value={this.state.guestMessage}
                onChange={this.handleInputChange}
                required
                variant='outlined'
              />
              <Button
                style={{
                  padding: '1em auto',
                  margin: '1em auto'
                }}
                variant='contained'
                color='primary'
                type='submit'
              >
                Submit
              </Button>
            </FormGroup>
          </FormControl>
        </form>

        <div>
          {!validResponse && (
            <Notify
              title='Internal Error!'
              text='Form failed to post the guest book message'
            />
          )}
          {!validForm && <Notify title='Error!' text='Form is not valid' />}
          {validForm && entry && (
            <Notify title='Good News!' text='Your message was posted!' />
          )}
        </div>
      </div>
    )
  }
}

export default EntryForm
