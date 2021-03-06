import React from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginActions } from '../../modules/user';

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const {email} = this.state;
        this.props.actions.resetPassword(email);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Reset Screen</Text>

                <Text>Email</Text>
                <View style={styles.form}>
                    <TextInput value={this.state.email}
                               onChangeText={(email) => this.setState({email})} va/>
                </View>

                <View>
                    <Button onPress={this.handlePress} title={'Reset Password'}/>
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

export default connect(null, mapDispatchToProps)(ResetPassword);
