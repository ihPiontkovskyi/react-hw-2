import React, {useState} from 'react';
import cx from 'classnames';
import ContextSampleApp from './ContextSampleApp';
import RenderPropsApp from './RenderPropsApp';
import RoutingSampleApp from './RoutingSampleApp';
import FormSampleApp from './FormSampleApp';
import ReduxSampleApp from './ReduxSampleApp';
import './app.css';

const setLastUsedApp = app =>
  localStorage.setItem(LAST_USED_APP_KEY, JSON.stringify(app));

const getLastUsedApp = () => {
  const app = localStorage.getItem(LAST_USED_APP_KEY);

  return app ? JSON.parse(app) : null;
};

const APPS = {
  RENDER_PROPS_APP: 'Render Props',
  CONTEXT_SAMPLE_APP: 'Context API',
  ROUTING_SAMPLE_APP: 'Routing',
  FORM_SAMPLE_APP: 'Form',
  REDUX_SAMPLE_APP: 'Redux',
};

const LAST_USED_APP_KEY = 'lastUsedApp';

const LAST_USED_APP = getLastUsedApp();

export const App = () => {
  const [currentApp, setCurrentApp] = useState(LAST_USED_APP);

  const isCurrentApp = app => app === currentApp;

  const handleAppChange = nextApp => {
    setLastUsedApp(nextApp);

    setCurrentApp(nextApp);
  };

  return (
    <div className="app">
      <header className="header">
        <h3
          onClick={() => {
            handleAppChange(null);
          }}
        >
          #react-course
        </h3>
        <div className="header-apps">
          {Object.values(APPS).map(app => {
            const classes = cx('header-app', {
              'header-app_active': isCurrentApp(app),
            });

            const handleAppClick = () => {
              handleAppChange(app);
            };

            return (
              <div key={app} className={classes} onClick={handleAppClick}>
                {app}
              </div>
            );
          })}
        </div>
      </header>
      <main className="content">
        {!currentApp && (
          <h2 className="description">Select app from the list above {'⬆️'}</h2>
        )}
        {isCurrentApp(APPS.RENDER_PROPS_APP) && <RenderPropsApp />}
        {isCurrentApp(APPS.CONTEXT_SAMPLE_APP) && <ContextSampleApp />}
        {isCurrentApp(APPS.ROUTING_SAMPLE_APP) && <RoutingSampleApp />}
        {isCurrentApp(APPS.FORM_SAMPLE_APP) && <FormSampleApp />}
        {isCurrentApp(APPS.REDUX_SAMPLE_APP) && <ReduxSampleApp />}
      </main>
    </div>
  );
};

export default App;
