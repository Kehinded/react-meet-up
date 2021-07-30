import {Route, Switch} from 'react-router-dom'
import Task from './component/Task'
import Tasks from './component/Tasks'
import Ui from './component/Ui'
import Addmeet from './component/Addmeet'
import Navigations from './component/Navigations'

function App() {
  return (
    <div className="App">
      <Navigations />
      <Switch >
     <Route path= '/' exact> <Task /></Route>
      <Route path= '/favourite-page'><Tasks /></Route>
     <Route path= '/form-page'> <Addmeet /></Route>
      </Switch>
    </div>
  );
}

export default App;
