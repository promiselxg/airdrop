import { Container } from '../../styles/globals.style';
import {
  About__container,
  About__content,
  About__left,
  About__right,
  About__wrapper,
} from '../../styles/section/About.style';
import NavLink from '../NavLink';
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from 'react-icons/fi';

const About = () => {
  return (
    <>
      <About__wrapper>
        <Container>
          <About__container>
            <About__left>
              <h1>About us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                libero nulla vitae sint quia nobis laboriosam illo.
                Exercitationem deleniti odit culpa quibusdam ad, corrupti
                architecto inventore! Autem libero accusantium quod illo fugiat.
              </p>
              <div className="About__Icons">
                <NavLink to="/" icon={<FiFacebook />} />
                <NavLink to="/" icon={<FiTwitter />} />
                <NavLink to="/" icon={<FiLinkedin />} />
                <NavLink to="/" icon={<FiInstagram />} />
                <NavLink to="/" icon={<FiMail />} />
              </div>
            </About__left>
            <About__right>
              <About__content>
                <div className="desc">
                  <h1>Heading 1</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    at ipsum provident optio accusamus eaque vel harum
                    repellendus dolores porro.
                  </p>
                </div>
                <div className="desc">
                  <h1>Heading 2</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    at ipsum provident optio accusamus eaque vel harum
                    repellendus dolores porro.
                  </p>
                </div>
                <div className="desc">
                  <h1>Heading 3</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    at ipsum provident optio accusamus eaque vel harum
                    repellendus dolores porro.
                  </p>
                </div>
              </About__content>
            </About__right>
          </About__container>
        </Container>
      </About__wrapper>
    </>
  );
};

export default About;
