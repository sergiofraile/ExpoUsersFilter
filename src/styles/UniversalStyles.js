
import { StyleSheet } from 'react-native';

export const universalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start'
    },
    topText: {
        textAlign: 'center',
        marginBottom: 6,
    },
    sliderContainer: {
        height: 120,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingTop: 30,
        paddingLeft: 16,
        paddingRight: 16
    },
    sliderValues: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // maxWidth: 300
    },
    sliderValue: {
        color: 'white',
        fontWeight: 'bold'
    },
    list: {
        backgroundColor: 'white',
    } 
});
