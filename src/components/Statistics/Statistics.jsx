import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 5px;
`;

const StyledLi = styled.li`
  margin-bottom: 10px;
`;

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StyledUl>
        <StyledLi>Good: {good}</StyledLi>
        <StyledLi>Neutral: {neutral}</StyledLi>
        <StyledLi>Bad: {bad}</StyledLi>
        <StyledLi>Total: {total}</StyledLi>
        <StyledLi>Positive feedback: {positivePercentage}%</StyledLi>
      </StyledUl>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
