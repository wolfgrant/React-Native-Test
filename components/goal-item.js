import global from '../styles/global-style'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements'


const globalStyles = global;

function GoalItem(props) {

    function deleteItem() {
        //Esto si se quiere elminar por el index
        props.deleteGoalItem(props.index)
    }

    function presseable() {
        console.log(props.id)
    }
    return (
        //Cabe mencionar que el Aandroid_ripple solo funciona en android, para hacerlo en iOS se usó el style con el pressed haciendo referencia a cuando es presionado
        <Pressable android_ripple={{ color: '#210644' }} onPress={presseable} style={({pressed}) => pressed && styles.pressedItem}>
            <View style={globalStyles.goalsContainer.goalItem}>
                <Text style={globalStyles.goalsContainer.goalItem.goalText} >{props.text}</Text>
                <Icon
                containerStyle={{backgroundColor: 'rgba(228, 223, 225, 0.33)', width: 30, height: 30, justifyContent: 'center', borderRadius: 50 }}
                    name='trash'
                    type='font-awesome'
                    color='white'
                    /* onPress={deleteItem} */
                    //Esto si se quiere eliminar por ID sin usar function por medio de props
                    onPress={props.deleteGoalItem.bind(this, props.id)}
                />
            </View>
        </Pressable>
    );
};

GoalItem.propTypes = {
    text: PropTypes.string, // No es necesario añadir .isRequired aquí siempre y cuando esa propiedad no sea requerida
    index: PropTypes.number,
    id: PropTypes.string,
    deleteGoalItem: PropTypes.func.isRequired,
};

export default GoalItem;

const styles = StyleSheet.create({
    pressedItem: {
        opacity: 0.5,
    }
})