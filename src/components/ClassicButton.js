import React, { useState, useEffect } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity,
    StyleSheet, 
    Animated,
    Dimensions, 
    ActivityIndicator
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ClassicButton = ( props ) => {

    const [ isDisabled, setIsDisabled ] = useState(true);
    const [ isLoading, setIsLoading ] = useState(false);
    
    useEffect( () => {
        setIsDisabled(props.isDisabled);
    }, [props.isDisabled]);

    useEffect( () => {
        setIsLoading(props.isLoading);
    }, [props.isLoading]);

    return (
        <TouchableOpacity style={[ styles.container ]} onPress={ props.onPress }
            disabled={ isDisabled } delayPressIn={0}
        >
            <Animated.View
                style={[ styles.btn, (props.height && { height: props.height }), props.style ]}
            >
               {
                    isLoading ?
                        <ActivityIndicator color='#fff' size='large' /> 
                        :
                        ( <Text style={[ styles.btnText, {color: props.textColor ? props.textColor : '#fff'}]}> 
                            {props.title ? props.title.toUpperCase() : 'TITLE BTN'}
                         </Text> )
               }

            </Animated.View>

        </TouchableOpacity>
    )
}

let marginDevice = 0;

if (Dimensions.get('window').height <= 760) {
  marginDevice = 40;
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    btn: {
        width: '100%',
        height: height / 14,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    btnText: {
        fontFamily: 'Merriweather-Regular',
        fontSize: 18,
        fontWeight: 'bold',
    }
})


export default ClassicButton;
