import { useMemo } from "react";
import "./Item.css";

const Item = ({
  className = "",
  communicationOptimization,
  weUseVariousToolsToHelpUs,
  performWithAnEmailSuchAsO,
  androidToOptimisePushNoti,
  propAlignSelf,
  propPadding,
  propFlex,
  propMarginTop,
  itemWidth,
}) => {
  const item1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
      width: itemWidth,
    };
  }, [propAlignSelf, propPadding, propFlex, itemWidth]);

  const frameDiv4Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className={`item4 ${className}`} style={item1Style}>
      <div
        className="strong-communication-optimiz-wrapper"
        style={frameDiv4Style}
      >
        <p className="strong-communication-container">
          <span className="communication-optimization-dat">
            {communicationOptimization}
          </span>
          <span>{weUseVariousToolsToHelpUs}</span>
        </p>
      </div>
      <p className="perform-with-an-container">
        <span className="perform-with-an">{performWithAnEmailSuchAsO}</span>
        <span className="android-to-optimise">{androidToOptimisePushNoti}</span>
      </p>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  communicationOptimization: PropTypes.string,
  weUseVariousToolsToHelpUs: PropTypes.string,
  performWithAnEmailSuchAsO: PropTypes.string,
  androidToOptimisePushNoti: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propMarginTop: PropTypes.any,
  itemWidth: PropTypes.any,
};

export default Item;
