import ContentNavigation from '../ContentNavigation/ContentNavigation';
import { useContext } from 'react';
import { NavigationTag, ContentTag } from '../../ViewContext';

export default function DynamicContentViewer (props) {

    const navigationTag = useContext(NavigationTag);
    const contentTag = useContext(ContentTag);

    return (
        <div>
            <ContentNavigation setContentTag={props.setContentTag} />
            <p>
                Currently viewed content: {navigationTag}
            </p>
            <p>
                Currently viewed content card: {contentTag}
            </p>
            
      </div>
    )

}