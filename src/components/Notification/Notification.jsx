import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.p`
  color: red;
`;

export const Notification = ({ message }) => {
  return <StyledText>{message}</StyledText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
