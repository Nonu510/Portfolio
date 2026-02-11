import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './contact.scss'

function Contact() {

  return (
    <section className="contact-section" id="contact">
      <h2>Contactez-moi</h2>
      <p className="contact-intro">Vous avez un projet en tête ou souhaitez simplement discuter ? N'hésitez pas à me contacter !</p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Email</h3>
          <a href="mailto:nolwenn.dubourg@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> nolwenn.dubourg@gmail.com</a>
        </div>
        <div className="contact-phone">
          <h3>Téléphone</h3>
          <a href="tel:+33626663305"><FontAwesomeIcon icon={faPhone} /> +33 6 26 66 33 05</a>
        </div>
        <div className='contact-linkedin'>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/nolwenn-dubourg-224606348/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> Nolwenn Dubourg</a>
        </div>
      </div>
    </section>
  )
}

export default Contact