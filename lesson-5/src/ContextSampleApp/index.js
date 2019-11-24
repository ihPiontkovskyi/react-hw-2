import React, {useState, createContext} from 'react';
import './index.css';
import cx from 'classnames';

const ThemeContext = createContext('light');

const Wrapper = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
  };
  return (
    <div className="csa-wrapper">
      <h2>Provider: {theme}</h2>
      <button className="csa-button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </div>
  );
};

const Main = () => {
  return (
    <div className="csa-main">
      <h2>Consumer</h2>
      <ThemeContext.Consumer>
        {theme => (
          <button
            className={cx('csa-button', {
              'csa-button_light': theme === 'light',
              'csa-button_dark': theme === 'dark',
            })}
          >
            Button with "{theme}" theme
          </button>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

const ContextSampleApp = () => (
  <Wrapper>
    <Main />
  </Wrapper>
);
export default ContextSampleApp;
