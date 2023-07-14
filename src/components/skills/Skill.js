import '../skills/SkillStyle.css';
import { javaScript } from '../../data';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import icon from '../assets/react.svg';
import css from '../assets/css.svg';
import tailwind from '../assets/tail.svg';
import node from '../assets/node.svg';
import html from '../assets/html.png';

const Skills = () => {
  return (
    <div className='skill' id='skill'>
      <h2 className='skill-title'>Skills</h2>
      <div className='skill-container'>
        <p>
          React.js <img className='icon-img' src={icon} alt='' />
        </p>
        <div className='hover-container'>
          <p className='animate-character'>javaScript</p>

          {javaScript.map(({ id, live, git, iconImage, text }) => (
            <div className='hide'>
              <img className='icon-img' src={iconImage} alt='' />
              <ul className='skill-links'>
                <li>
                  <h3 className='title'>snake</h3>
                  <a href={live} className='live'>
                    <HiOutlineExternalLink />
                  </a>
                  <a href={git} className='git'>
                    <AiFillGithub />
                  </a>
                  <h3 className='title'>snake</h3>
                  <a href={live} className='live'>
                    <HiOutlineExternalLink />
                  </a>
                  <a href={git} className='git'>
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <p>
          css <img className='icon-img css' src={css} alt='' width={150} />
        </p>
        <p>
          Tailwind <img className='icon-img' src={tailwind} alt='' />
        </p>

        <p>
          Node <img className='icon-img' src={node} alt='' />
        </p>
        <p>
          html <img src={html} alt='' className='icon-img' />
        </p>
      </div>
    </div>
  );
};

export default Skills;
