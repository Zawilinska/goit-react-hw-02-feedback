import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  color: green;
`;

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
