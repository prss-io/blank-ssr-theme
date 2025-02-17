import React from "react";
import * as PRSS from "prss";

const Component = data => {
  PRSS.init(data);
  (window as any).PRSS = PRSS;
  const { content } = PRSS.getProp('item');

  return (
    <div className="page-content" dangerouslySetInnerHTML={{
      __html: content
    }}>
      {content}
    </div>
  );
};

export default Component;
