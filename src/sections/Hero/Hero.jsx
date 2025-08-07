import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const {theme , toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of Aaron Yesudas Isaac"/> 
            <img className={styles.colorModeContainer} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Aaron <br/>
                Yesudas <br/>
                Isaac
            </h1>
            <h2>Java Backend Developer</h2>
            <span>
                <a href='https://www.linkedin.com/in/aaron-y-isaac-156b55225/' target="_blank"> 
                <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a href='https://github.com/aaron1906' target="_blank"> 
                <img src={githubIcon} alt="LinkedIn Icon" />
                </a>
                <a href='https://x.com/' target="_blank"> 
                <img src={twitterIcon} alt="LinkedIn Icon" />
                </a>
            </span>
            <span>
                <p>
                    Enthusiastic and detail-oriented software developer fresher with a strong foundation in coding, problem-solving, and building scalable applications.

                </p>
            </span>
            <a href={CV} download>
            <button className="hover">
                Resume
            </button>
            </a>
        </div>
    </section>
  )
}

export default Hero;