import * as React from 'react';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import { MEDIA } from '../../../constants/DDItemTypes';

import MediaRow from '../../MediaList/Row';

const isDraggingNearTopOfRow = (monitor, component) => {
  const componentRect = findDOMNode(component).getBoundingClientRect();
  const clientOffset = monitor.getClientOffset();

  const middle = Math.ceil(componentRect.height / 2);
  const topOffset = clientOffset.y - componentRect.top;
  return topOffset < middle;
};

const mediaTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    if (item.media) {
      const media = item.media;
      const thisID = props.media._id;
      const insertBefore = isDraggingNearTopOfRow(monitor, component);
      props.onMoveMedia(
        media,
        insertBefore ? { before: thisID } : { after: thisID }
      );
    }
  },
  hover(props, monitor, component) {
    component.setState({
      insertingAbove: isDraggingNearTopOfRow(monitor, component)
    });
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

class PlaylistItemRow extends React.Component {
  static propTypes = {
    connectDropTarget: React.PropTypes.func.isRequired,
    onMoveMedia: React.PropTypes.func.isRequired,
    isOver: React.PropTypes.bool.isRequired
  };

  state = {
    insertingAbove: false
  };

  render() {
    const {
      connectDropTarget,
      isOver,
      ...props
    } = this.props;
    const { insertingAbove } = this.state;

    const dropIndicator = <div className="PlaylistItemRow-drop-indicator" />;

    return connectDropTarget(
      <div className="PlaylistItemRow">
        {isOver && insertingAbove && dropIndicator}
        <MediaRow {...props} />
        {isOver && !insertingAbove && dropIndicator}
      </div>
    );
  }
}

export default DropTarget(MEDIA, mediaTarget, collect)(PlaylistItemRow);
