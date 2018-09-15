import React from 'react';
import styled from 'styled-components';

const Column = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  min-height: 100%;
  justify-content: space-around;
`;

const SolidText = styled.p`
  margin: 0;
  font-size: 40px;
  font-family: sans-serif;
`;
const CurvyText = styled.p`
  margin: 0;
  font-size: 32px;
  font-style: italic;
  font-family: cursive;
`;
const BigCurvyText = CurvyText.extend`
  margin: 0;
  font-size: 50px;
`;
const Fade = styled.span`
  color: #938a8a;
`;

const format = (n, precision) =>
  n.toLocaleString(undefined, { maximumFractionDigits: precision });

const Figure = ({ n, unit, precision = 0 }) => (
  <SolidText>
    {format(n, precision)} <Fade>{unit}</Fade>
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
