import './ContentNavigation.css'; 
import { useEffect } from 'react';
import { useContext } from 'react';
import { ViewContext } from '../../ViewedContext';

export default function ContentNavigation(props) {

  const contentContext = useContext(ViewContext);

  useEffect(() => {
    if (props.navigationTags.includes(contentContext) == false) {
      props.setViewedContentCard(props.navigationTags[0])
    }
  });

  function handleClick (idx) {
    props.setViewedContentCard(idx)
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
          {props.viewedContent}:
      </div>

          <div className="contentList">
              {getContentAnchors(props.navigationTags)}
          </div>

    </div>
  );
  }