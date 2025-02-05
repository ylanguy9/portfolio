import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design sans titre (1).png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Cv_Ylang.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="pfp Ylang Abdillahi" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ylang
          <br />
          Abdillahi
        </h1>
        <h2>Etudiante en BTS SIO</h2>
        <span>
          <a href="https://github.com/ylanguy9" target="_blank">
            <img src={githubIcon} alt="icone github" />
          </a>
          <a
            href="https://www.linkedin.com/in/ylang-abdillahi-138395253/"
            target="_blank">
            <img src={linkedinIcon} alt="icone linkedin" />
          </a>
        </span>
        <p className={styles.description}>
          Passionée de développement web je recherche un stage de 10 semaines .
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero; 
