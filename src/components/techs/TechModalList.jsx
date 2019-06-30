import React, { useState, useEffect } from 'react'
import Preloader from '../layout/Preloader';
import TechListItem from './TechListItem';

const TechModalList = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-modal-list" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs.map(tech => <TechListItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechModalList;
