import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginActions } from '../../modules/user';

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        this.props.actions.loginRequest('ngocdt@mainjs.net', '123456');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Reset Screen</Text>
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
    },
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch)
});

export default connect(null, mapDispatchToProps)(ResetPassword);
