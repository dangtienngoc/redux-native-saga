import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Main Screen</Text>

                <Button onPress={() => this.props.navigation.navigate('Login')}
                        title='Login'
                        style={styles.button}/>

                <Button onPress={() => this.props.navigation.navigate('ResetScreen')}
                        title='Reset Password'
                        style={styles.button}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: 10
    }
});
