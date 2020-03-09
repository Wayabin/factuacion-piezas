import React, { useState } from "react";
import { RoundIcon } from "./controls/RoundIcon";
import Text from "./controls/Text";
export const HiddenContainer = props => {
  const { content, title, fontSize } = props;
  const [hidden, setHidden] = useState(false);
  return (
    <div className="container-fluid p-2 mt-2  shadow-sm  bg-white rounded">
      <div className="row">
        <div className="col-12 mb-2">
          <div className="float-right">
            {hidden && (
              <RoundIcon
                icon="chevron-down"
                mode="info"
                onClick={e => {
                  setHidden(!hidden);
                }}
              />
            )}
            {!hidden && (
              <RoundIcon
                icon="chevron-up"
                mode="info"
                onClick={e => {
                  setHidden(!hidden);
                }}
              />
            )}
          </div>

          <Text
            fontFamily="fantasy"
            fontSize={fontSize}
            text={title || "Sin titulo"}
            icon="question"
            mode="dark"
          />
        </div>
        <div className="col-12 mb-2" hidden={hidden}>
          {content}
        </div>
      </div>
    </div>
  );
};
