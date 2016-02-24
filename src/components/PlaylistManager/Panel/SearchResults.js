import cx from 'classnames';
import React from 'react';
import { LOADED } from '../../../constants/LoadingStates';
import Loader from '../../Loader';
import MediaList from '../../MediaList';

import AddToPlaylistAction from '../../MediaList/Actions/AddToPlaylist';

const SearchResults = ({ className, query, results, loadingState, onOpenAddMediaMenu }) => {
  let list;
  if (loadingState === LOADED) {
    list = (
      <MediaList
        className="PlaylistPanel-media"
        media={results}
        makeActions={(media, selection) => [
          <AddToPlaylistAction
            key="add"
            onAdd={position => onOpenAddMediaMenu(position, media, selection)}
          />
        ]}
      />
    );
  } else {
    list = (
      <div className="PlaylistPanel-loading">
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div className={cx('PlaylistPanel', 'SearchResults', className)}>
      <div className="SearchResults-query">
        Search: {query}
      </div>
      {list}
    </div>
  );
};

export default SearchResults;
