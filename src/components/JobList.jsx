import React, { useState, useEffect } from 'react';
import JobItem from './JobItem';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
