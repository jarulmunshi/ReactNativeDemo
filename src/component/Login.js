import React,{Component} from 'react';
import {Text} from 'react-native';
import {CardSection,Card,Input,Button} from './Common/Common';
import {loginUser} from '../FunctionCall/Call';
import {checkEmail,emailEmpty,passwordEmpty} from '../Validation/Validation';
import {loginStyles} from '../Helper/styles/Style';
class Login extends Component {
    constructor(props){
        super(props);
        state={
            email:'',
            password:''
        };

    }
    static navigationOptions = {
        title: 'Login',
        // drawerIcon:({tintColor})=>(
            // {/*<Icon name="ios-settings" size={25} color={tintColor}/>*/}
        // ),
    };

    validateUser=()=>{
        if(emailEmpty(this.state.email) && passwordEmpty(this.state.password)){
            this.setState({emailError:'Please enter email',iconError:'exclamation-triangle',passwordError:'Please enter Password'});
        }
        else if(emailEmpty(this.state.email) || passwordEmpty(this.state.password)){
            if(emailEmpty(this.state.email)){
                this.setState({emailError:'Please enter email',iconError:'exclamation-triangle'});
            }
            else if(passwordEmpty(this.state.password)){
                this.setState({passwordError:'Please enter password',iconError:'exclamation-triangle'});
            }
        }
        else if(!checkEmail(this.state.email)){
            this.setState({emailError:'Enter Valid Email and Age',iconError:'exclamation-triangle'});
        }
        else {
            const data={
                email:this.state.email,
                password:this.state.password
            };
            loginUser(data)
                .then(()=>{this.state.navigation.navigate('UserDetail');
                }).catch((err)=>alert("Invalid User"));
        }

    };
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        onChange={(value)=>this.setState({email:value,emailError:'',iconError:''})}
                        placeholder="Email"
                        label="Email"
                    />
                    <Text style={loginStyles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.emailError}</Text>
                </CardSection>
                <CardSection>
                    <Input
                        onChange={(value)=>this.setState({password:value,passwordError:'',iconError:''})}
                        secureTextEntry={true}
                        placeholder="Password"
                        label="Password"
                    />
                    <Text style={loginStyles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.passwordError}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{this.validateUser();
                    }}>Login</Button>
                </CardSection>

            </Card>
        );
    };
}

export default Login;