import { PropTypes } from 'prop-types';
import { StatisticsInfo } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFb,
}) => {
  return (
    <>
      <p>
        Good: <StatisticsInfo>{good}</StatisticsInfo>
      </p>
      <p>
        Neutral: <StatisticsInfo>{neutral}</StatisticsInfo>
      </p>
      <p>
        Bad: <StatisticsInfo>{bad}</StatisticsInfo>
      </p>
      <p>
        Total: <StatisticsInfo>{totalFeedback}</StatisticsInfo>
      </p>
      <p>
        Positive feeedback:
        <StatisticsInfo> {positiveFb}%</StatisticsInfo>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
