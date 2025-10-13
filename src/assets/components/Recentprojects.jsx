import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Recentproject.css';

const projectData = [
  {
    id: 1,
    
    title: "Divine Grace UNEC Church Site",
    description: `A welcoming and spiritual website built for Divine Grace UNEC using HTML, 
    CSS & JS. It highlights the church’s values, services, vision
    , and contact information in a clean and responsive design.`,
    type: "video",
    media: "/media/DIVINE-GRACE-UNEC WEBPAGE VIDEO.webm"
  },
  {
    id: 2,
      title: "Amazon Clone",
    description: `A frontend recreation of Amazon‘s key user interface using HTML,
     CSS & JS—featuring product browsing,
     a search bar, and responsive layout.`,
    mediaType: "video",
    media: "/media/Amazon-Project.webm"
  },
];

const RecentProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const latestProjects = projectData.slice(0, 2);

  return (
    <section className="recent-projects" id="projects">
      <h2 className="projects-title" data-aos="fade-up">Recent Projects</h2>

      <div className="projects-container">
        {latestProjects.map((project) => (
          <div key={project.id} className="project-card" data-aos="fade-up">
            {project.type === 'image' ? (
              <img src={project.media} alt={project.title} className="project-media" />
            ) : (
              <video src={project.media} controls className="project-media" />
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container" data-aos="fade-up">
        <button className="view-all-btn">View All Projects</button>
      </div>
    </section>
  );
};

export default RecentProjects