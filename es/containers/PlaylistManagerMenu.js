import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addMedia as addToPlaylist, createPlaylist, selectPlaylist } from '../actions/PlaylistActionCreators';
import { showImportPanel } from '../actions/ImportActionCreators';
import { showSearchResults } from '../actions/SearchActionCreators';

import { playlistsSelector, selectedPlaylistSelector } from '../selectors/playlistSelectors';
import { searchQuerySelector, showSearchResultsSelector, searchResultsCountSelector } from '../selectors/searchSelectors';
import { showImportPanelSelector } from '../selectors/importSelectors';
import PlaylistsMenu from '../components/PlaylistManager/Menu';

var mapStateToProps = createStructuredSelector({
  playlists: playlistsSelector,
  selected: selectedPlaylistSelector,
  searchQuery: searchQuerySelector,
  showSearchResults: showSearchResultsSelector,
  searchResults: searchResultsCountSelector,
  showImportPanel: showImportPanelSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onAddToPlaylist: addToPlaylist,
    onCreatePlaylist: createPlaylist,
    onSelectPlaylist: selectPlaylist,
    onSelectSearchResults: showSearchResults,
    onShowImportPanel: showImportPanel
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsMenu);
//# sourceMappingURL=PlaylistManagerMenu.js.map