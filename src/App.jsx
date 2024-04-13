import Home from './Home';
import DataProvider from './components/context/dataContext';

const App = ()=>{
  return (<>
    <DataProvider>
      <Home/>
    </DataProvider>
  </>)
}
export default App;