import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechModalAdd = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please enter a message and tech'});
    } else {
      console.log('object', { firstname, lastname });
      clearForm();
    }
  };

  const clearForm = () => {
    setFirstname('');
    setLastname('');
  };

  return (
    <div id="tech-modal-add" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              autoFocus
            />
            <label htmlFor="firstname" className="active">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              autoFocus
            />
            <label htmlFor="lastname" className="active">Last Name</label>
          </div>
        </div>

      </div>
      <div className="modal-footer" style={footerStyle}>
        <a
          href="#!"
          className="modal-close waves-effect waves-light btn green"
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

const footerStyle = {
  paddingRight: 20,
};

export default TechModalAdd;
