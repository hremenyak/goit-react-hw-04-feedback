import { PropTypes } from 'prop-types';
import { FeedbackOption } from './FeedbackOption.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(option => (
        <FeedbackOption
          onClick={onLeaveFeedback}
          type="button"
          name={option}
          key={option}
        >
          {option}
        </FeedbackOption>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape(),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
