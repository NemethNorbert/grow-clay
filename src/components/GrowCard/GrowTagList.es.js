import React from "react";
import ClayLabel from '@clayui/label';

const GrowTagList = (props) => {
    if (props.articleTags) {
      return (
        <div className="autofit-section grow-card-label">
          {props.articleTags
            .slice(0, props.tagCount)
            .map((tag, index) => {
              return (
                <span key={index} >
                  {
                    tag.length <= props.tagLength ?
                    (
                      <ClayLabel displayType="info" spritemap={props.spritemap}>{tag}</ClayLabel>
                    ) : (
                      <ClayLabel 
                        displayType="info" 
                        data-toggle="tooltip"
                        data-placement="right"
                        title={tag}
                        spritemap={props.spritemap}
                      >
                        {tag.substring(0, props.tagLength) + "..."}
                      </ClayLabel>
                    )
                  }
                </span>
              );
            })}
          {props.articleTags.length > props.tagCount &&
            (
              <span
                data-toggle="tooltip"
                data-placement="right"
                title={props.articleTags.slice(
                  props.tagCount,
                  props.articleTags.length
                )}
                spritemap={props.spritemap}>
                  + {props.articleTags.length - props.tagCount}
              </span>
            )
          }
      </div>
    );
  } else {
    return <div className="autofit-section grow-card-tag"></div>;
  }
}

GrowTagList.defaultProps = {
  tagCount: 2,
  tagLength: 10
};

export default GrowTagList;
