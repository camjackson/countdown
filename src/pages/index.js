import React from 'react';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import Main from '../components/Main';

injectGlobal`
  html, body, div {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #f3eded;
    color: #6f6969;
  }
  * {
    box-sizing: border-box;
  }
`;

const leaving = new Date(2018, 10, 24, 12);
const seconds = () => (leaving - Date.now()) / 1000;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: seconds() };
  }

  componentDidMount() {
    this.interval = setInterval(this.update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  update = () => {
    this.setState({ seconds: seconds() });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>We're coming home!</title>
        </Helmet>
        <Main seconds={this.state.seconds} />
      </div>
    );
  }
}

export default IndexPage;
