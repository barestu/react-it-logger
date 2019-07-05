import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTech } from '../../redux/tech/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechModalAdd = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please enter the first and last name'});
    } else {
      addTech({ firstname, lastname });
      setFirstname('');
      setLastname('');
    }
  };

  return (
    <div id="tech-modal-add" className="modal" style={modalStyle}>
      <form onSubmit={onSubmit}>
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
          <button type="submit" className="modal-close waves-effect waves-light btn green">
            Enter
          </button>
        </div>
      </form>
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

TechModalAdd.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addTech },
)(TechModalAdd);
