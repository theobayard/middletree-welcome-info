import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import BadURLPage from './Components/BadURLPage'

import './App.css';
import Content from './Content';
import InfoPgLangControl from './Components/LanguageSelection/InfoPgLangControl';

// Adding to test github action

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
              <InfoPgLangControl infoPage={page}/>
            )}/>
        ))}
        <Route component={BadURLPage}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
