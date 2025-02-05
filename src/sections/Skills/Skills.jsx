import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Compétences</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="PHP"/>
        <SkillList src={checkMarkIcon} skill="Javascript"/>
        <SkillList src={checkMarkIcon} skill="Wordpress"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySql"/>
        <SkillList src={checkMarkIcon} skill="github"/>
      </div>
      <hr />
    </section> 
  );
}

export default Skills;
