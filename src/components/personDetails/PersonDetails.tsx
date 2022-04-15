/* eslint-disable import/order */
import './PersonDetails.scss';

import React, { FC, useEffect, useState } from 'react';

import Person from '../../models/Person';
import ApiService from '../../services/apiService/ApiService';

const PersonDetails: FC = () => {
  const api = new ApiService();

  const [person, setPerson] = useState(new Person());

  const getPerson = () => {
    api.getPerson(1).then(
      (res) => setPerson(res)
    ).catch((e) => console.log(e));
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="detail-container">
      {person.name}
    </div>
  );
};

export default PersonDetails;
