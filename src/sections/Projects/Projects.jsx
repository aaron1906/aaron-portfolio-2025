import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/PfolioImage.png';
import freshBurger from '../../assets/AnonImage.png';
import hipsster from '../../assets/HomeRootImage.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://aaron1906.github.io/DemoPfolio/"
          h3="MyPfolio"
          p="Responsive Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://aaron1906.github.io/Anon/"
          h3="Anon"
          p="Shopping Website"
        />
        <ProjectCard
          src={hipsster}
          link="https://aaron1906.github.io/HomeRoot/"
          h3="HomeRoot"
          p="Plant Website"
        />
        <ProjectCard
          src={fitLift}
          link=""
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;