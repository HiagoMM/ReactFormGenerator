import React, { useState } from 'react';
import { getState, validate, prepareJson, getField } from './generatorUtil';

export default props => {
  const configs = props.configs;
  const [state, setState] = useState(getState(configs));

  const handleSubmit = () => {
    validate(configs, state).then(([isValid, stateWithErrors]) => {
      if (isValid) {
        props.onSubmit(prepareJson(state));
      } else {
        setState(stateWithErrors);
      }
    });
  };

  return (
    <div style={props.style}>
      {configs.map(config => {
        config.props.key = config.name;
        config.props.value = state[config.name.value];
        config.props.onChange = value => {
          setState({
            ...state,
            [config.name]: { ...state[config.name], value: value.target.value }
          });
        };
        return React.cloneElement(getField(config), config.props);
      })}
      <button onClick={() => handleSubmit()}>
        {props.buttonName || 'Submit'}
      </button>
    </div>
  );
};
