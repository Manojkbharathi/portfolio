import '../skills/SkillStyle.css';
import { javaScript } from '../../data';
const Skills = () => {
  return (
    <div className='skill' id='skill'>
      <h2 className='skill-title'>Skills</h2>
      <div className='skill-container'>
        <div class='hover-container'>
          <h3 className='animate-character'>javaScript</h3>

          {javaScript.map(({ links, memory }) => (
            <div>
              <div className='skill-links'>
                <a href={links}>li</a>
                <a href={memory}>Memory Game</a>
                <a href={rps}></a>
              </div>
            </div>
          ))}
        </div>
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
