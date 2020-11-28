import styled from "styled-components";
import Button from "../src/components/Button/Button";

const Home = () => (
  <div>
    <Title>Hello world</Title>
    <Button text="Save" />
  </div>
);

const Title = styled.h2`
  color: red;
`;
export default Home;
