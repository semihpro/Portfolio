import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllExperiments = ({ data }) => {
  return (
    <div className="events_page">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/experiments/${ev.id}`} passHref>
          <a className="card">
            {ev.title}
            {/*<Image src={ev.image} alt={ev.title} width={500} height={500} /> <h2>{ev.title} </h2>*/}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllExperiments;
