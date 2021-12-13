
import React from 'react';
import { Button } from '@material-ui/core';
import './help-contact.scss'


function HelpContact() {
  return (
    <div className="help-contact-container">
          <div className="help-contact-container-wrapper">
              <p className="help-contact-text">Having Troubles?</p>
              <Button variant="contained" size="lg" className="help-contact-button">Contact Us</Button>
          </div>
    </div>
  );
}

export default HelpContact;
