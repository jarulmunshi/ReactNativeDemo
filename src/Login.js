import React,{Component} from 'react';
import {Text} from 'react-native';
import {CardSection,Card,Input,Button} from './component/Common';
import axios from 'axios';
class Login extends Component {
    static navigationOptions = {
        title:"Login"
    }
    state={
        email:'',
        password:''
    }

    validateUser=()=>{
        if(this.state.email!='' && this.state.password!=''){
            const data={
                email:this.state.email,
                password:this.state.password
            }
            axios.post('http://localhost:3000/login',data).
            then(()=>{alert("Valid User");
            })
                .catch((err)=>alert("Invalid User"));
        }

    }
    render(){
        return(
            <Card>
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
                    this.navigation.navigate('UserDetail');}}>Login</Button>
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

}
export default Login;