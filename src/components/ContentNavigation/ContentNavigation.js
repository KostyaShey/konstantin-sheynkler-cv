import './ContentNavigation.css'; 
import { useEffect } from 'react';
import { useContext } from 'react';
import { NavigationTag, ContentTag, Data } from '../../ViewContext';

export default function ContentNavigation(props) {

  const navigationTag = useContext(NavigationTag);
  const contentTag = useContext(ContentTag);
  const navigationTags = useContext(Data)[navigationTag].map(item => item.navigationTag);

  useEffect(() => {
    if (navigationTags.includes(contentTag) == false) {
      props.setContentTag(navigationTags[0])
    }
  });

  function handleClick (idx) {
    props.setContentTag(idx);
  }

  const getContentAnchors = elements => {
      let content = [];
      for (let idx in elements) {
        const item = elements[idx];
        content.push(<div className='contentAnchors' key={item} onClick={(e) => handleClick(item)}>{item}</div>);
      }
      return content;
    };

  return (
    <div className="contentNavigation">
      <div className='navTitle'>
          {navigationTag}:
      </div>

          <div className="contentList">
              {getContentAnchors(navigationTags)}
          </div>

    </div>
  );
  }