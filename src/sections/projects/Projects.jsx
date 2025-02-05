import styles from './ProjectsStyles.module.css';
import pain from '../../assets/logoboulangerie.webp';
import dreameez from '../../assets/e9df70aa-e2b7-4e69-9dc0-a50ad2fe9bd3 1.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projets</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pain}
          link="https://github.com/ylanguy9/Projet_boulangerie"
          h3="boulangerie"
          p="boulangerie factice"
        />
        <ProjectCard
          src={dreameez}
          link="https://github.com/ylanguy9/Dreameez"
          h3="Dreameez"
          p="Social media"
        />
        
      </div>
    </section>
  );
}

export default Projects;
