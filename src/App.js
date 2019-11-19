import React, {useState} from 'react';
import cx from 'classnames';
import ContextSampleApp from './ContextSampleApp';
import RenderPropsApp from './RenderPropsApp';
import RoutingSampleApp from './RoutingSampleApp';
import './app.css';

const APPS = {
  RENDER_PROPS_APP: 'Render Props',
  CONTEXT_SAMPLE_APP: 'Context API',
  ROUTING_SAMPLE_APP: 'Routing',
};

export const App = () => {
  const [currentApp, setCurrentApp] = useState();

  const isCurrentApp = app => app === currentApp;

  return (
    <div className="app">
      <header className="header">
        <h3
          onClick={() => {
            setCurrentApp(null);
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
              setCurrentApp(app);
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
      </main>
    </div>
  );
};

export default App;
