import React from 'react';
import PropTypes from 'prop-types';
import global from '../styles/global-style';
import { useState } from 'react';
import { TextInput, Button, View, Modal } from 'react-native';

const globalStyles = global;

function GoalForm(props) {
    const [goalText, setGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(goalText);
        setGoalText('');
        props.onCloseModal();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={globalStyles.formContainer}>
                <TextInput
                    style={globalStyles.formContainer.textInput}
                    placeholder="Tu logro!"
                    onChangeText={goalInputHandler}
                    value={goalText}
                />
                <View style={globalStyles.formContainer.viewContainer}>
                    <View style={globalStyles.formContainer.viewContainer.button}>
                        <Button title="Agregar" color={'#5e0acc'} onPress={addGoalHandler} />
                    </View>
                    <View style={globalStyles.formContainer.viewContainer.button}>
                        <Button title="Cancelar" color={'#A90700'} onPress={props.onCloseModal}/>
                    </View>
                </View>
                {/* Otra forma de hacer el onPress con una función en el padre es la que se va a mostrar pero aun no sé limpiar el input ejecutando una función desde el app js jajajaja */}
                {/* <Button title="Agregar logro" color={'#5e0acc'} onPress={props.onAddGoal.bind(this, goalText)} /> */}
            </View>
        </Modal>

    );
}

GoalForm.propTypes = {
    onAddGoal: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    visible: PropTypes.bool,
};

export default GoalForm;