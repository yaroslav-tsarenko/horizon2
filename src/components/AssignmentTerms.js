import { useMemo } from "react";
import "./AssignmentTerms.css";

const AssignmentTerms = ({
  className = "",
  assignment,
  youMayNotAssignItsRightsO,
  bySailyWithoutRestriction,
  propWidth,
}) => {
  const bySailyWithoutStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`assignment-terms ${className}`}>
      <div className="assignment-rules">
        <p className="strong-assignment-container">
          <span className="assignment">{assignment}</span>
          <span>{youMayNotAssignItsRightsO}</span>
        </p>
      </div>
      <div className="by-saily-without" style={bySailyWithoutStyle}>
        {bySailyWithoutRestriction}
      </div>
    </div>
  );
};

AssignmentTerms.propTypes = {
  className: PropTypes.string,
  assignment: PropTypes.string,
  youMayNotAssignItsRightsO: PropTypes.string,
  bySailyWithoutRestriction: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default AssignmentTerms;
