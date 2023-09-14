import { Switch, Route } from 'react-router-dom';
import { StyledEngineProvider } from "@mui/material/styles";
import { Home } from './components';

const App = () => (
  <StyledEngineProvider injectFirst>
    <div>
      Basic Setup:
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  </StyledEngineProvider>
);

export default App;
