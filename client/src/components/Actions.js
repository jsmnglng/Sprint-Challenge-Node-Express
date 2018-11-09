import React from 'react';

const Actions = props => {
  const { actions } = props;
  const action = actions.map(action => {
    const { description, notes, completed } = action
    return (
      <div>
        <p>description: {description}</p>
        <p>notes: {notes}</p>
      </div>
    );
  });

  return action;
};

export default Actions;
