import React from 'react';
import styled from 'styled-components';

const Column = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SolidText = styled.p`
  margin: 5px;
  font-size: 40px;
  font-family: sans-serif;
`;
const CurvyText = styled.p`
  margin: 5px;
  font-size: 32px;
  font-style: italic;
  font-family: cursive;
`;
const BigCurvyText = CurvyText.extend`
  margin: 40px;
  font-size: 50px;
`;
const Fade = styled.span`
  color: #938a8a;
`;

const Figure = ({ n, unit, precision = 0 }) => (
  <SolidText>
    {n.toFixed(precision)} <Fade>{unit}</Fade>
  </SolidText>
);
const Or = () => (
  <CurvyText>
    <Fade>or...</Fade>
  </CurvyText>
);

const Main = ({ seconds }) => {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;

  return (
    <Column>
      <CurvyText>It's</CurvyText>
      <Figure n={seconds} unit="seconds" />
      <Or />
      <Figure n={minutes} unit="minutes" />
      <Or />
      <Figure n={hours} unit="hours" />
      <Or />
      <Figure n={days} unit="days" />
      <Or />
      <Figure n={weeks} unit="weeks" precision={2} />
      <Or />
      <Figure n={months} unit="months" precision={2} />
      <BigCurvyText>until we go home!</BigCurvyText>
      <SolidText>^_^</SolidText>
    </Column>
  );
};

export default Main;
