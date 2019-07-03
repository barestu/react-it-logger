import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import LogListItem from './LogListItem';
import { getLogs } from '../../redux/log/logActions';

const LogList = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) return <Preloader />
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs found.</p>
      ) : (
        logs.map(log => <LogListItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

LogList.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(
  mapStateToProps,
  { getLogs },
)(LogList);
