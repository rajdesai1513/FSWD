// src/components/JobPostings.js
import React from 'react';

const JobPostings = () => {
  const jobs = [
    { id: 1, title: 'Web Developer', description: 'Looking for a web developer to build a portfolio site.', budget: '$500' },
    { id: 2, title: 'Graphic Designer', description: 'Need a logo and branding materials.', budget: '$300' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Job Postings</h1>
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 mb-4 rounded shadow-md">
          <h2 className="text-2xl">{job.title}</h2>
          <p>{job.description}</p>
          <p className="text-gray-600">{job.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default JobPostings;
