import cx from 'classnames';
import React from 'react';
import Icon from '../../Icon';

export default class SearchBar extends React.Component {
  static propTypes = {
    className: React.PropTypes.string
  };

  state = { focused: false };

  onFocus() {
    this.setState({ focused: true });
  }
  onBlur() {
    this.setState({ focused: false });
  }

  render() {
    const { focused } = this.state;
    return (
      <div className={cx('SearchBar', focused ? 'is-focused' : '', this.props.className)}>
        <Icon className="SearchBar-icon" name="search" />
        <input
          ref="value"
          className="SearchBar-query"
          type="text"
          placeholder={focused ? '' : 'Search'}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
        />
      </div>
    );
  }
}