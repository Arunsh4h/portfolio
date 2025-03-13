/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/

import { config } from '../../theme.config'
import SibApiV3Sdk from 'sib-api-v3-sdk'

const contact = async (req, res) => {
  // Extract email from the form data
  const { email } = req.body
  const { recipient, sender, subject } = config.contactForm || {}

  if (!recipient) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.recipient] property in theme options.' })
  }
  if (!sender) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.sender] property in theme options.' })
  }
  if (!email) {
    return res
      .status(400)
      .json({ error: 'Missing email address. Please provide a correct email address.' })
  }

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  const getHtmlBody = (body) => {
    return Object.entries(body).map(([key, value]) => {
      if (typeof value === 'string') {
        return `<b>${key}</b>: ${value}`
      }
      if (typeof value === 'boolean') {
        return value === true ? key : false
      }
      if (typeof value === 'object') {
        return `<b>${key}</b>: ${getHtmlBody(value)?.filter(Boolean).join(', ')}`
      }
      return false
    })
  }

  let html = getHtmlBody(req.body)
  if (Array.isArray(html)) {
    html = html.filter(Boolean).join('<br />')
  }

  try {
    // Setup Brevo SDK client
    const defaultClient = SibApiV3Sdk.ApiClient.instance
    const apiKey = defaultClient.authentications['api-key']
    apiKey.apiKey = process.env.BREVO_API_KEY  
    // Create transactional email API instance
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    
    // Set up sender
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
    
    sendSmtpEmail.subject = req.body.subject || subject || 'Contact form entry'
    sendSmtpEmail.htmlContent = html
    sendSmtpEmail.sender = {
      name: 'Contact Form',
      email: sender
    }
    sendSmtpEmail.to = [{
      email: recipient,
      name: 'Recipient'
    }]
    sendSmtpEmail.replyTo = {
      email: email
    }
    
    // Send the email
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail)
    console.log('Email sent successfully. MessageId:', data.messageId)
    
    // Return status 201 to match what the form expects
    return res.status(201).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    return res.status(error.status || 500).json({ error: error.message || 'Failed to send email' })
  }
}

export default contact