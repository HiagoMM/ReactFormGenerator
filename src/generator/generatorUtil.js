import React from 'react';

export function getState(configs) {
  const state = {};
  for (var config of configs) {
    state[config.name] = { value: '', errors: [] };
  }
  return state;
}

export async function validate(configs, state) {
  let isValid = true;

  const setError = (name, error) => {
    isValid = false;
    state[name].errors.push(error);
  };
  for (var config of configs) {
    let [syncs, asyncs] = config.validators;
    /**
     * Validating synchronous functions
     */
    for (var sync of syncs) {
      if (sync(state[config.name].value)) {
        setError(config.name, sync.name);
      }
    }
    /**
     * Validating asynchronous functions
     */
    for (var async of asyncs) {
      if (await async(state[config.name].value)) {
        setError(config.name, async.name);
      }
    }
  }
  return [isValid, state];
}

export function prepareJson(state) {
  const finalJson = {};
  for (var key of Object.keys(state)) {
    finalJson[key] = state[key].value;
  }
  return finalJson;
}

export function getField(config) {
  switch (config.field.type) {
    case 'input':
      return <input />;
    case 'select':
      return (
        <select>
          {config.field.options.map(option => {
            return (
              <option
                key={option.value}
                value={option.value}
                selected={option.selected}
              >
                {option.label}
              </option>
            );
          })}
        </select>
      );
    default:
      return <input />;
  }
}
