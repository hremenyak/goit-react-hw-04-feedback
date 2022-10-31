import { NotificationMessage } from './Notification.styled';
import { PropTypes } from 'prop-types';

const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
