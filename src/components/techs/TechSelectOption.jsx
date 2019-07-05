import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../redux/tech/techActions';

const TechSelectOption = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {!loading && techs !== null && techs.map((t) => (
        <option key={t.id} value={`${t.firstname} ${t.lastname}`}>
          {t.firstname} {t.lastname}
        </option>
      ))}
    </Fragment>
  );
};

TechSelectOption.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});

export default connect(
  mapStateToProps,
  { getTechs },
)(TechSelectOption);
