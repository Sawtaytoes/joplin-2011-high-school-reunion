import Content from './Content';
import Heading from './Heading';
import Subtitle from './Subtitle';

const Date = () => (
  <div>
    <Subtitle>
      September
      <br />
      17-18, 2021
    </Subtitle>

    <div>
      <Heading>September 17</Heading>

      <div>
        <Content>5-10p</Content>
      </div>

      <div>
        <Content>
          123 High School Rd
          <br />
          Joplin, MO 12345
        </Content>
      </div>
    </div>
    <div>
      <Heading>September 18</Heading>

      <div>
        <Content>12-3p</Content>
      </div>

      <div>
        <Content>
          123 High School Rd
          <br />
          Joplin, MO 12345
        </Content>
      </div>
    </div>
  </div>
);

export default Date;
