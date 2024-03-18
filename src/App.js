import { useState, useEffect } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import { ViewContext } from './ViewedContext';


function App() {

  const [viewedContent, setViewedContent] = useState('Home');
  const [viewedContentCard, setViewedContentCard] = useState();

  useEffect(() => {
    ViewContext.navigationTag = viewedContent
  });
  

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
      <ViewContext.Provider value={viewedContentCard}>
        <SideBar setViewedContent={setViewedContent} />
        <MainContent viewedContent={viewedContent} viewedContentCard={viewedContentCard} setViewedContentCard={setViewedContentCard} data={data[viewedContent]}/>
      </ViewContext.Provider>
    </div>
  );
}

export default App;
