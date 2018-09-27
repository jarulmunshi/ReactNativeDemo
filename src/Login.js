import React,{Component} from 'react';
import {Text} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './component/Common';
import axios from 'axios';
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
        if(this.state.email!='' && this.state.password!=''){
            const data={
                email:this.state.email,
                password:this.state.password
            }
            axios.post('http://localhost:3000/login',data).
            then(()=>{this.props.navigation.navigate('UserDetail');
            })
                .catch((err)=>alert("Invalid User"));
        }

    };
    render(){
        return(
            <Card>
                {/*<Header headerText="Login"/>*/}
                <CardSection>
                    <Input
                        onChange={(value)=>this.setState({email:value})}
                        placeholder="Email"
                        label="Email"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        onChange={(value)=>this.setState({password:value})}
                        secureTextEntry={true}
                        placeholder="Password"
                        label="Password"
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{this.validateUser();
                    }}>Login</Button>
                </CardSection>

            </Card>
        );
    }
}
const styles={
    textStyle:{
        color:'red',
        fontSize:16
    },
    headStyle:{
        fontSize:18,
        paddingLeft:20,
        paddingRight:30,
        alignSelf:'center'
    }

};
export default Login;