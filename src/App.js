import { useState, useContext } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import { NavigationTag, ContentTag } from './ViewContext';


function App() {

  const [navigationTag, setNavigationTag] = useState(useContext(NavigationTag));
  const [contentTag, setContentTag] = useState(useContext(ContentTag));
  

  const data = {
    "Projekte": [
      { 
        'navigationTag': "webSchlomo"
      },
      { 
        'navigationTag': "ImmoScrapy"
      }
    ],
    "Berufserfahrung": [
      { 
        'navigationTag': "02.2012 - 02.2014",
        'content': "bla"
      },
      { 
        'navigationTag': "03.2014 - 02.2018"
      },
      { 
        'navigationTag': "04.2014 - 02.2018"
      },
      { 
        'navigationTag': "05.2014 - 02.2018"
      },
      { 
        'navigationTag': "06.2014 - 02.2018"
      },
      { 
        'navigationTag': "07.2014 - 02.2018"
      },
      { 
        'navigationTag': "08.2014 - 02.2018"
      },
      { 
        'navigationTag': "09.2014 - 02.2018"
      },
      { 
        'navigationTag': "10.2014 - 02.2018"
      }
    ],
    "Ausbildung": [
      { 
        'navigationTag': "02.2004 - 02.2008"
      },
      { 
        'navigationTag': "02.2008 - 02.2012"
      }
    ]
  }



  return (
    <div className="App">
      <NavigationTag.Provider value={navigationTag}>
        <SideBar setNavigationTag={setNavigationTag} />
        <ContentTag.Provider value={contentTag}>
          <MainContent setContentTag={setContentTag} data={data[navigationTag]}/>
        </ContentTag.Provider>      
      </NavigationTag.Provider>
    </div>
  );
}

export default App;
