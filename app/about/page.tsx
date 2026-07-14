import Image from 'next/image';
import '@styles/About.css';
import portfolioImage from '@public/pictures/ChicagoPhoto.png';

const skills = [
  'C++',
  'Unreal Engine',
  'Blender',
  'Substance Painter',
  'Next.js',
  'Python',
  'Flask',
  'Java',
  'Android Development',
  'MySQL',
  'Oral Presentations',
];

const hobbies = [
  'Cosplaying',
  'Dancing',
  'Piano',
  'Rock Climbing',
  '3D Printing',
];

const Page = () => {
  return (
    <article className="about-page">
      <div className="about-page__inner">
        <header className="about-page__header">
          <p className="about-page__eyebrow">Get To Know Me</p>
          <h1 className="about-page__title">About Me</h1>
        </header>

        <div className="about-page__layout">
          <div className="about-page__photo">
            <Image
              src={portfolioImage}
              alt="Santiago Hernandez"
              className="about-page__photo-img"
              priority
            />
          </div>

          <div className="about-page__content">
            <section className="about-page__bio">
              <h2 className="about-page__section-title">Who I Am</h2>
              <p>
                Software Engineering Graduate from University of Texas at Arlington
                pursuing a career in software development. 
                I love building software that turns complex problems into clean, usable experiences.
              </p>
            </section>

            <div className="about-page__cards">
              <section className="about-page__card">
                <h3 className="about-page__card-title">Skills</h3>
                <ul className="about-page__tags">
                  {skills.map((item) => (
                    <li key={item} className="about-page__tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="about-page__card">
                <h3 className="about-page__card-title">Hobbies</h3>
                <ul className="about-page__tags">
                  {hobbies.map((item) => (
                    <li key={item} className="about-page__tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Page;
