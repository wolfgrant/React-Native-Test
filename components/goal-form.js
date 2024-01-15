import React from 'react';
import PropTypes from 'prop-types';
import global from '../styles/global-style';
import { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

const globalStyles = global;

function GoalForm(props) {
  const [goalText, setGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText('');
  }

  return (
    <View style={globalStyles.formContainer}>
      <TextInput
        style={globalStyles.formContainer.textInput}
        placeholder="Tu logro!"
        onChangeText={goalInputHandler}
      />
      <Button title="Agregar logro" onPress={addGoalHandler} />
    </View>
  );
}

GoalForm.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

export default GoalForm;