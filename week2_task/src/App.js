import Home from './components/Home';
import RenderPropsComponent from './components/RenderPropsComponent';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import List from './components/List';
import Loginform from './components/Loginform';
import PureComp from './components/PureComp';
import Title from './components/Title';
import InputRef from './components/InputRef';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <h1>Week 2 day 6</h1>
      <List/>
      <h1>week 2 day 7</h1>
      <Loginform/>
      <h1>week 2 day 8</h1>
      <PureComp/>
      <InputRef/>
      <FocusInput/>

      <h1>Week 2 day 9 </h1>
      <Home/>
      <RenderPropsComponent render={() => {
          return (
            <h3> I am coming from render props </h3>
          )
        }} />
        <h1>Week 2 day 10</h1>
        <UserProvider value="context provider">
        <ComponentC/>
        </UserProvider>
    </div>
    
  );
}

export default App;