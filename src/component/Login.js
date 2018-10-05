import React,{Component} from 'react';
import {Text,View,Image,SafeAreaView} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './Common/Common';
import {loginUser} from '../FunctionCall/Call';
import {checkEmail,emailEmpty,passwordEmpty} from '../Validation/Validation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {loginStyles,imageStyles} from '../Helper/styles/Style';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            emailError:'',
            passwordError:'',
            iconError:''
        };
    }

    static navigationOptions = {
        drawerLabel:'Login',
        drawerIcon:()=>(
           <Icon name="sign-in" size={25}/>
        ),
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
                .then(()=>{this.props.navigation.navigate('tab');
                }).catch((err)=>alert("Invalid User"));
        }

    };
    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            {/*<View style={{backgroundColor:'white',flex:1}}>*/}
                <Image source={require('./../images/imgUser.jpeg')} size={70} style={imageStyles.imgStyle}/>
                <Header headerText="Login" headIcon="sign-in"></Header>

                <Card>
                    <CardSection>

                        <Input
                            onChange={(value)=>this.setState({email:value,emailError:'',iconError:''})}
                            placeholder="Enter Your Email"
                            label="Email"
                        />
                        {/*<Icon name="envelope" size={25} style={{alignSelf:'center',paddingLeft:30}}/>*/}
                        {this.state.iconError !=="" &&
                        <Text style={loginStyles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.emailError}</Text>}
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({password:value,passwordError:'',iconError:''})}
                            secureTextEntry={true}
                            placeholder="Enter Your Password"
                            label="Password"
                        />
                        {/*<Icon name="unlock" size={25} style={{alignSelf:'center',paddingLeft:30}}/>*/}
                        {this.state.iconError !=="" &&
                        <Text style={loginStyles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.passwordError}</Text>}
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.validateUser()}>Login</Button>
                    </CardSection>

                </Card>
            </SafeAreaView>

        );
    };
}

export default Login;