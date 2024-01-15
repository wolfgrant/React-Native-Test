import React, { useState } from 'react';
import PropTypes from 'prop-types';
import global from '../styles/global-style';
import { TextInput, Button, View, Modal, Image } from 'react-native';

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
                <Image style={globalStyles.formContainer.image} source ={require('../assets/images/goal.png')}/>
                <TextInput
                    style={globalStyles.formContainer.textInput}
                    placeholder="Tu logro!"
                    onChangeText={goalInputHandler}
                    value={goalText}
                />
                <View style={globalStyles.formContainer.viewContainer}>
                    <View style={globalStyles.formContainer.viewContainer.button}>
                        <Button title="Cancelar" color={'#f31282'} onPress={props.onCloseModal}/>
                    </View>
                    <View style={globalStyles.formContainer.viewContainer.button}>
                        <Button title="Agregar" color={'#b180f0'} onPress={addGoalHandler} />
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