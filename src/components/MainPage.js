import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const MainPage = ( props ) => {
    return(
        <View style={[ styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: ((height / 40) * 27) + 30,
        top: (height /5) - 15,
        zIndex: -1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 15
    }
})


export default MainPage;