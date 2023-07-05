import '../skills/SkillStyle.css';
import { javaScript } from '../../data';
const Skills = () => {
  return (
    <div className='skill' id='skill'>
      <h2 className='skill-title'>Skills</h2>
      <div className='skill-container'>
        {javaScript.map(({ id, links }) => (
          <div class='hover-container'>
            <h3 className='animate-character'>javaScript</h3>
            <div className='skill-links'>
              <a href={links}>Memory Game</a>
              <a href={links}>find type of triangle</a>
              <a href={links}>Seat boooking</a>
              <a href={links}>Products system</a>
              <a href={links}>Snake game</a>
              <a href={links}>Model window</a>
              <a href={links}>Kanban board</a>
              <a href={links}> Pig game</a>
            </div>
          </div>
        ))}
        <p>Css </p>

        <p>React.js</p>
        <p>Tailwind</p>
        <p>Router</p>
        <p>Redux</p>
        <p>Firebase</p>
        <button> </button>
      </div>
    </div>
  );
};

export default Skills;
