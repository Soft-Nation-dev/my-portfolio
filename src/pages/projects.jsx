import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom";
import "../../src/assets/styles/projects.css";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { projectData } from "../project/projectData";
import { useLocation } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/footer";

const Project = ({ toggleTheme }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const handleBackButton = (e) => {
      if (activeProjectIndex !== null) {
        e.preventDefault();
        closeModal();
      }
    };

    if (activeProjectIndex !== null) {
      window.history.pushState(null, null, window.location.pathname);
    }
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [activeProjectIndex]);


  const openModal = (projectIndex, mediaIndex = 0) => {
    setActiveProjectIndex(projectIndex);
    setActiveMediaIndex(mediaIndex);
    //  document.body.style.overflow = 'hidden'; 
      setTimeout(() => {
        const modal = document.querySelector('.project-modal');
        if (modal) modal.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
  };

  const closeModal = () => {
    setActiveProjectIndex(null);
    setActiveMediaIndex(0);
    // document.body.style.overflow = 'auto';
  };

  const nextMedia = () => {
    const project = projectData[activeProjectIndex];
    const totalMedia = project.images.length + (project.video ? 1 : 0);
    setActiveMediaIndex((prev) => (prev + 1) % totalMedia);
  };

  const prevMedia = () => {
    const project = projectData[activeProjectIndex];
    const totalMedia = project.images.length + (project.video ? 1 : 0);
    setActiveMediaIndex((prev) => (prev - 1 + totalMedia) % totalMedia);
  };

  return (
    <>
    <Navbar toggleTheme={toggleTheme} />
       <section className="recent-projects" id="projects">
      <h2 className="projects-title proj" data-aos="fade-up">
        Projects
      </h2>

      <div className="projects-container">
        {projectData.map((project, projectIndex) => {
          const displayedImagesCount = 2;
          const totalImages = project.images.length;
          const undisplayedCount = totalImages > displayedImagesCount ? totalImages - displayedImagesCount : 0;

          return (
          <div
          key={project.id}
          className={`project-card ${project.size}`}
          data-aos="fade-up"
          >
        <div className="project-collage">
            {project.video && (
              <div
                className="media-wrapper video video-full"
                onClick={() => openModal(projectIndex, totalImages)}
              >
                <video
                  src={project.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="media-element"
                />
              </div>
            )}
            
            <div className="images-row">
              {project.images.slice(0, 2).map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`media-wrapper image-wrapper ${imgIndex === 0 ? 'image-large' : 'image-small'}`}
                  onClick={() => openModal(projectIndex, imgIndex)}
                >
                  <img
                    src={img}
                    alt={`${project.title} ${imgIndex + 1}`}
                    className="media-element"
                  />
                  
                  {imgIndex === 1 && undisplayedCount > 0 && (
                    <div className="undisplayed-badge">
                      +{undisplayedCount}
                    </div>
                  )}
                </div>
              ))}
            </div>

  </div>
        <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
          );
        })}
      </div>


{activeProjectIndex !== null &&
  ReactDOM.createPortal(
    <div className="project-modal" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const touchEndX = e.changedTouches[0].clientX;
          if (touchStartX - touchEndX > 50) nextMedia();
          if (touchEndX - touchStartX > 50) prevMedia();
        }}
      >
        <button className="modal-close" onClick={closeModal}>
          <X size={30} />
        </button>

        <h3>{projectData[activeProjectIndex].title}</h3>

        {(() => {
          const project = projectData[activeProjectIndex];
          const totalImages = project.images.length;
          const isVideo = project.video && activeMediaIndex === totalImages;

          return isVideo ? (
            <video
              src={project.video}
              controls
              autoPlay
              loop
              className="modal-media"
            />
          ) : (
            <img
              src={project.images[activeMediaIndex]}
              alt={project.title}
              className="modal-media"
            />
          );
        })()}

        <div className="modal-dots mobile-dots">
          {(() => {
            const project = projectData[activeProjectIndex];
            const totalMedia =
              project.images.length + (project.video ? 1 : 0);
            return Array.from({ length: totalMedia }).map((_, i) => (
              <span
                key={i}
                className={`dot ${i === activeMediaIndex ? "active" : ""}`}
                onClick={() => setActiveMediaIndex(i)}
              />
            ));
          })()}
        </div>

        <p>{projectData[activeProjectIndex].description}</p>

        <div className="modal-nav desktop-nav">
          <button className="nav-btn" onClick={prevMedia}>
            <ChevronLeft size={22} />
          </button>

          <button className="nav-btn" onClick={nextMedia}>
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  )}


    </section>
      <Footer />
      </>
  );
};

export default Project;
