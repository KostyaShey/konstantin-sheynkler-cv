import { createContext } from 'react';

export const NavigationTag = createContext('Home');
export const ContentTag = createContext('');
export const Data = createContext({
    "Home": [],
    "Kontakt": [],
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
  });