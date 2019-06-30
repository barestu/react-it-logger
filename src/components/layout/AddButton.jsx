import React from 'react';

const AddButton = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#log-modal-add" className="btn-floating btn-large green darken-2 modal-trigger">
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-modal-list" className="btn-floating green modal-trigger">
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#tech-modal-add" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;
