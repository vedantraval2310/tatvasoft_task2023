import Home from './components/Home';
import RenderPropsComponent from './components/RenderPropsComponent';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
function App() {
  return (
    <div className="App">
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