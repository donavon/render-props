import React from 'react';

const renderProps = (ComponentOrFunction, props) => (
  ComponentOrFunction.prototype.render
    ? <ComponentOrFunction {...props} />
    : ComponentOrFunction({
      ...(ComponentOrFunction.defaultProps || {}),
      ...props,
    })
);

export default renderProps;
