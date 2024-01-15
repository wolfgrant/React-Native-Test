import {StyleSheet} from 'react-native';

const global = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
        image:{
            width: 100,
            height: 100,
            margin: 20,
        },
        textInput: {
            borderWidth: 1,
            borderColor: '#e4d0ff',
            backgroundColor: '#e4d0ff',
            color: '#120438',
            borderRadius: 6,
            width: '100%',
            padding: 16,
        },
        viewContainer: {
            flexDirection: 'row',
            marginTop: 8,
            button: {
                width: '40%',
                marginHorizontal: 8,
            }
        }
    },
    
    goalsContainer: {
        flex: 5,
        goalItem: {
            margin: 8,
            borderRadius: 6,
            backgroundColor: '#5e0acc',
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            goalText: {
                color: 'white',
            }
        },
    }
  });

  module.exports = global;