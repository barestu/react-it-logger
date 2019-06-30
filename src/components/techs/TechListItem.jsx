import React from 'react';
import PropTypes from 'prop-types';

const TechListItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstname} {tech.lastname}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechListItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechListItem;
