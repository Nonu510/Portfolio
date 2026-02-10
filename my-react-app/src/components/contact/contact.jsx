import React, { useState } from 'react'
import './contact.scss'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pourrez connecter un service d'envoi d'email (comme EmailJS) plus tard.
    console.log('Formulaire envoyé :', formData)
    alert(`Merci ${formData.name}, votre message a bien été envoyé !`)
    
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message..."
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">Envoyer</button>
    </form>
  )
}

export default Contact