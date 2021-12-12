
import React from 'react';
import metrics from '../theme/metrics';
import { StyleSheet, View} from 'react-native';

const Container = props => {
    return (
        <View  style={{...styles.Container, ...props.style}}>
            {props.children}
        </View>
            );
};

const styles = StyleSheet.create({
        Container:{
            height: metrics.screenHeight,
            marginLeft:24,
            marginRight: 24,
            //backgroundColor: '#bbb',
            justifyContent: 'center',
            alignItems: 'center',
        }
    });


export default Container;