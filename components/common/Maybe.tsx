import React from "react";

const Maybe = ({ test, children }:{children:any, test:any}) => <>{test && children}</>;

export default Maybe;