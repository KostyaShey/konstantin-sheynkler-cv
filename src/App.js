import { useState, useContext } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import { NavigationTag, ContentTag } from './ViewContext';


function App() {

  const [navigationTag, setNavigationTag] = useState(useContext(NavigationTag));
  const [contentTag, setContentTag] = useState(useContext(ContentTag));
  

  return (
    <div className="App">
      <SideBar setNavigationTag={setNavigationTag} />
      <NavigationTag.Provider value={navigationTag}>
        <ContentTag.Provider value={contentTag}>
          <MainContent setContentTag={setContentTag} />
        </ContentTag.Provider>      
      </NavigationTag.Provider>
    </div>
  );
}

export default App;
