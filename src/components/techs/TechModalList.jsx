import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TechListItem from './TechListItem';
import { getTechs } from '../../redux/tech/techActions';

const TechModalList = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-modal-list" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.map(tech => (
            <TechListItem key={tech.id} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

TechModalList.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});

export default connect(
  mapStateToProps,
  { getTechs },
)(TechModalList);
