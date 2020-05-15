import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route} from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import Home from './Pages/Home/Home';
import Upload from './Pages/Upload/Upload'
import Videos from './Pages/Videos/Videos'
import Login from './Pages/auth/Login'
import Signup from './Pages/auth/Signup'
import { Layout} from 'antd';
import Alerts from './component/Alerts';
const {Content} = Layout;



function App() {
  return (
  
  <div>
    <Navbar></Navbar>
    <Alerts key="1"/>

      <Content style={{ padding: '0 50px' }}>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/upload' component={Upload} />
    <Route exact path='/Videos' component={Videos} />
    <Route exact path='/Login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    

    </Switch>
    </Content>
  </div>
    


  );
}

export default App;
