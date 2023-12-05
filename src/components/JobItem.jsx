import PropTypes from 'prop-types';

const JobItem = ({ job }) => {
    return (
      <div className="flex bg-white shadow-lg p-6 rounded-md">
        <img className="w-16 h-16" src={job.logo} alt={`${job.company} logo`} />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{job.position}</h2>
          <p className="text-gray-500">{job.postedAt} • {job.contract} • {job.location}</p>
          <ul className="flex mt-4">
            {job.languages.map((language) => (
              <li className="bg-blue-100 text-blue-500 rounded-full px-3 py-1 mr-2" key={language}>{language}</li>
            ))}
            {job.tools.map((tool) => (
              <li className="bg-blue-100 text-blue-500 rounded-full px-3 py-1 mr-2" key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  JobItem.propTypes = {
    job: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      postedAt: PropTypes.string.isRequired,
      contract: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      languages: PropTypes.arrayOf(PropTypes.string).isRequired,
      tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };
  
  
  export default JobItem;
  