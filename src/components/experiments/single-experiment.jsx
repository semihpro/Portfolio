import Image from 'next/image';
import React, { useRef, useState } from 'react';

const SingleExperiment = ({ data }) => {
  const [message, setMessage] = useState('');

  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <p>{message}</p>
    </div>
  );
};

export default SingleExperiment;
