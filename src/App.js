import './App.css';
import Header from './block/header/header';
import SideBar from './block/sidebar/sideBar';
import Content from './block/content/content';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
