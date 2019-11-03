import React from 'react';
import './contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  render() {
    return (
      <div className="contact_wrapper">

        <h2> Get In Touch </h2>

        <div className="name_form " >
          <p> Name </p>
          <input type="text" name="name" className="contact"
                 onChange={e => this.setState({ name: e.target.value })}/>
        </div>

        <div className="email_form " >
          <p> Email </p>
          <input type="text" name="email" className="contact" 
                 onChange={e => this.setState({ email: e.target.value })}/>
        </div>

        <div className="message_form " >
          <p> Message </p>
          <textarea className="contact big_text" rows="6"
                    onChange={e => this.setState({ message: e.target.value })}></textarea>
        </div>

        <button className="round_button" > Send Message </button>

      </div>
    );
  }
}

export default Contact;
