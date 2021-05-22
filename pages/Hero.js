import Button from './Button';
import Content from './Content';
import styles from './Hero.module.css';
import Title from './Title';

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.hero}>
      <img
        alt="JHS Exterior 2014"
        className={styles.backgroundImage}
        src="https://p11cdn4static.sharpschool.com/userfiles/servers/server_154468/image/jhs092314.jpg"
      />

      <div className={styles.heroTitle}>
        <Title className={styles.title} isMain>
        Joplin 2011
        <br />
        High School Reunion
      </Title>
      </div>
    </div>

    <div className={styles.contents}>
      <div>
        <Content>
          Let's celebrate years of good times by joining us for a{' '}
          <strong>Joplin High football game</strong> and a{' '}
          <strong>reunion picnic</strong> the next day!
        </Content>

        <div>
          <Button href="#none">RSVP today!</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
