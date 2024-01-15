import React, {StyleSheet} from 'react-native';

const global = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
    formContainer: {
        flex: 1,
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        padding: 16,
        textInput: {
            borderWidth: 1,
            borderColor: '#cccccc',
            width: '100%',
            padding: 8,
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