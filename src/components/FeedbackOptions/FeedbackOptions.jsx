import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 100px;
  padding: 8px;
  margin-right: 20px;
  color: green;
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <StyledButton key={index} type="button" onClick={onLeaveFeedback}>
            {option}
          </StyledButton>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  index: PropTypes.number,
  onLeaveFeedback: PropTypes.func.isRequired,
};
