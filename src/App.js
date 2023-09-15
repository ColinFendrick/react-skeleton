import { Switch, Route } from 'react-router-dom';
import { StyledEngineProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import { Home, Form } from './components';

const App = () => (
  <StyledEngineProvider injectFirst>
    <div>
      Basic Setup:
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-user" exact component={Form} />
      </Switch>
    </div>
  </StyledEngineProvider>
);

export default App;
