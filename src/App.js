import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import InfoPage from './Components/InfoPage/InfoPage'
import BadURLPage from './Components/BadURLPage'

import './App.css';
import Content from './Content';

function App() {
  const content = Content
  console.log(content)
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route path={"/"} component={HomePage} exact/>

        {content.map((page) => (
          <Route 
            path={"/" + page.nav} 
            render={() => (
              <InfoPage {...page}/>
            )}/>
        ))}
        <Route component={BadURLPage}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
