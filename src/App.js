import './App.css';
import Header from './header';
import SideNavBar from './sideNav';
import Content from './content';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <SideNavBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
