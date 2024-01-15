import global from '../styles/global-style'
import { Text, View, Pressable } from 'react-native';
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
        <Pressable onPress={presseable}>
            <View style={globalStyles.goalsContainer.goalItem}>
                <Text style={globalStyles.goalsContainer.goalItem.goalText} >{props.text}</Text>
                <Icon
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