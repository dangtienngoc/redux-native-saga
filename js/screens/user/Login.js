import React from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginActions } from '../../modules/user';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const {email, password} = this.state;
        this.props.actions.loginRequest(email, password);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login Screen</Text>

                <Text>Email</Text>
                <View style={styles.form}>
                    <TextInput value={this.state.email}
                               onChangeText={(email) => this.setState({email})} va/>
                </View>

                <Text>Password</Text>
                <View style={styles.form}>
                    <TextInput value={this.state.password}
                               onChangeText={(password) => this.setState({password})}
                               secureTextEntry={true}/>
                </View>

                <View>
                    <Button onPress={this.handlePress} title={'Login'}/>
                </View>
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
        padding: 10
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    form: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#222222',
        padding: 10
    }
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Login);
