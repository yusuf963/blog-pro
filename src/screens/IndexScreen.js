import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndexScreen =() =>{
    return(
        <View style={styles.container}>
            <Text style={styles.container}>Hello!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red'
    }
})
export default IndexScreen;