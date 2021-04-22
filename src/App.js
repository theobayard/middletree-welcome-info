import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import InfoPage from './Components/InfoPage/InfoPage'
import BadURLPage from './Components/BadURLPage'

import './App.css';
import Content from './Content';
import CONFIG from './Config';


function App() {
  const content = Content
  const baseURLPath = CONFIG.baseURLPath
  console.log(content)
  return (
    <BrowserRouter>
      <Switch>
        <Route path={baseURLPath} component={HomePage} exact/>

        {content.map((page) => (
          <Route 
            path={baseURLPath + page.nav} 
            render={() => (
              <InfoPage {...page}/>
            )}/>
        ))}
        <Route component={BadURLPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
