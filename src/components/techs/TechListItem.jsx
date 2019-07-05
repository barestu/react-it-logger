import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../redux/tech/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechListItem = ({ tech: { id, firstname, lastname }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: `${firstname} ${lastname} has been deleted from the tech list`});
  };

  return (
    <li className="collection-item">
      <div>
        {firstname} {lastname}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechListItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteTech },
)(TechListItem);
