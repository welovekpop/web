import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import uniqueId from 'lodash/uniqueId';
import formatDuration from 'format-duration';
import ArtistIcon from '@material-ui/icons/Headset';
import TitleIcon from '@material-ui/icons/MusicNote';
import StartIcon from '@material-ui/icons/PlayArrow';
import EndIcon from '@material-ui/icons/Stop';
import SwapArtistTitleIcon from '@material-ui/icons/SwapHoriz';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import Button from '../../Form/Button';
import TextField from '../../Form/TextField';

// naive HH:mm:ss → seconds
const parseDuration = str => str.split(':')
  .map(part => parseInt(part.trim(), 10))
  .reduce((duration, part) => (duration * 60) + part, 0);

const enhance = translate();

class EditMediaDialog extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    open: PropTypes.bool,
    media: PropTypes.object,

    bodyClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    titleClassName: PropTypes.string,

    onEditedMedia: PropTypes.func.isRequired,
    onCloseDialog: PropTypes.func.isRequired,
  };

  state = {
    errors: null,
    artist: this.props.media.artist,
    title: this.props.media.title,
    start: formatDuration(this.props.media.start * 1000),
    end: formatDuration(this.props.media.end * 1000),
  };

  title = uniqueId('editmedia');
  labelStart = uniqueId('editmedia');
  labelEnd = uniqueId('editmedia');

  handleSubmit = (e) => {
    e.preventDefault();

    const { media, onEditedMedia, onCloseDialog } = this.props;
    const {
      artist, title, start, end,
    } = this.state;

    const startSeconds = parseDuration(start);
    const endSeconds = parseDuration(end);

    const errors = [];
    if (Number.isNaN(startSeconds) || startSeconds < 0) {
      errors.push('invalidStartTime');
    }
    if (Number.isNaN(endSeconds) || endSeconds < 0) {
      errors.push('invalidEndTime');
    } else if (endSeconds < startSeconds) {
      errors.push('endTimeBeforeStart');
    } else if (endSeconds > media.duration) {
      errors.push('endTimeAfterSongEnd');
    }

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    onEditedMedia({
      artist,
      title,
      start: startSeconds,
      end: endSeconds,
    });
    onCloseDialog();
  };

  handleChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  };

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  handleChangeStart = (event) => {
    this.setState({ start: event.target.value });
  };

  handleChangeEnd = (event) => {
    this.setState({ end: event.target.value });
  };

  handleSwapArtistTitle = () => {
    this.setState({
      artist: this.state.title,
      title: this.state.artist,
    });
  };

  render() {
    const {
      t,
      open,
      media,
      onCloseDialog,

      bodyClassName,
      contentClassName,
      titleClassName,
    } = this.props;
    const {
      errors,
      artist,
      title,
      start,
      end,
    } = this.state;
    const baseTabIndex = 1000;
    let content = null;
    if (open) {
      const artistInput = (
        <TextField
          className="EditMediaDialogGroup-field"
          placeholder={t(['dialogs.editMedia.artistLabel', 'media.artist'])}
          value={artist}
          onChange={this.handleChangeArtist}
          icon={<ArtistIcon nativeColor="#9f9d9e" />}
          tabIndex={baseTabIndex}
          autoFocus
        />
      );
      const artistTitleLabel = (
        <div className="EditMediaDialogGroup-label">
          <IconButton onClick={this.handleSwapArtistTitle}>
            <SwapArtistTitleIcon nativeColor="#9f9d9e" />
          </IconButton>
        </div>
      );
      const titleInput = (
        <TextField
          className="EditMediaDialogGroup-field"
          placeholder={t(['dialogs.editMedia.titleLabel', 'media.title'])}
          value={title}
          onChange={this.handleChangeTitle}
          icon={<TitleIcon nativeColor="#9f9d9e" />}
          tabIndex={baseTabIndex + 1}
        />
      );

      const fromLabel = (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label htmlFor={this.labelStart} className="EditMediaDialogGroup-label">
          {t('dialogs.editMedia.playFromLabel')}
        </label>
      );
      const fromInput = (
        <TextField
          id={this.labelStart}
          className="EditMediaDialogGroup-field"
          placeholder="0:00"
          value={start}
          onChange={this.handleChangeStart}
          icon={<StartIcon nativeColor="#9f9d9e" />}
          tabIndex={baseTabIndex + 2}
        />
      );
      const toLabel = (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label htmlFor={this.labelEnd} className="EditMediaDialogGroup-label">
          {t('dialogs.editMedia.playToLabel')}
        </label>
      );
      const toInput = (
        <TextField
          id={this.labelEnd}
          className="EditMediaDialogGroup-field"
          placeholder={formatDuration(media.duration)}
          value={end}
          onChange={this.handleChangeEnd}
          icon={<EndIcon nativeColor="#9f9d9e" />}
          tabIndex={baseTabIndex + 3}
        />
      );

      content = (
        <Form onSubmit={this.handleSubmit}>
          {errors && errors.length > 0 && (
            <FormGroup>
              {errors.map(error => <div>{t(`dialogs.editMedia.errors.${error}`)}</div>)}
            </FormGroup>
          )}

          <div className="EditMediaDialogForm">
            <div className="EditMediaDialogForm-column">
              <FormGroup className="EditMediaDialogGroup">
                {artistInput}
              </FormGroup>
              <FormGroup className="EditMediaDialogGroup">
                {fromLabel}
                {fromInput}
              </FormGroup>
            </div>
            <div className="EditMediaDialogForm-separator">
              <FormGroup className="EditMediaDialogGroup">
                {artistTitleLabel}
              </FormGroup>
              <FormGroup className="EditMediaDialogGroup">
                {toLabel}
              </FormGroup>
            </div>
            <div className="EditMediaDialogForm-column">
              <FormGroup className="EditMediaDialogGroup">
                {titleInput}
              </FormGroup>
              <FormGroup className="EditMediaDialogGroup">
                {toInput}
              </FormGroup>
            </div>
          </div>

          <FormGroup className="FormGroup--noSpacing">
            <Button className="EditMediaDialog-submit">
              {t('dialogs.editMedia.save')}
            </Button>
          </FormGroup>
        </Form>
      );
    }

    return (
      <Dialog
        classes={{
          paper: cx('Dialog', 'EditMediaDialog', contentClassName),
        }}
        open={open}
        onClose={onCloseDialog}
        aria-labelledby={this.title}
      >
        <DialogTitle id={this.title} className={cx('Dialog-title', titleClassName)}>
          {t('dialogs.editMedia.title')}
        </DialogTitle>
        <DialogContent className={cx('Dialog-body', bodyClassName)}>
          {content}
        </DialogContent>
      </Dialog>
    );
  }
}

export default enhance(EditMediaDialog);
