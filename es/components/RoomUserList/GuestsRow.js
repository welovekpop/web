import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

var GuestsRow = function GuestsRow(_ref) {
  var t = _ref.t,
      className = _ref.className,
      guests = _ref.guests;
  return _jsx('div', {
    className: cx('UserRow', 'UserRow--guests', className)
  }, void 0, t('users.guests', { count: guests }));
};

GuestsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  guests: PropTypes.number.isRequired
} : {};

export default translate()(GuestsRow);
//# sourceMappingURL=GuestsRow.js.map