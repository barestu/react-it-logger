import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../redux/log/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogListItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#log-modal-edit"
          className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">#{log.id} </span> last updated by{' '}
          <span className="black-text">{log.tech} </span> on{' '}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogListItem.propTypes = {
  log: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteLog, setCurrent },
)(LogListItem);
