import React,{Component} from 'react';
import {Text,Image,View} from 'react-native';
import {Card,CardSection,Button,Input,Header} from './component/Common';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {registerUser} from './FunctionCall/Call'
class Home extends Component{
    static navigationOptions = {
        drawerLabel: 'Registration',
        // drawerIcon:({tintColor})=>(
        //     {/*<Icon name="ios-settings" size={25} color={tintColor}/>*/}
        // ),
    };
    constructor(props){
        super(props);
        this.state={
            name:'',
            nameError:'',
            email:'',
            emailError:'',
            password:'',
            passwordError:'',
            age:'',
            ageError:'',
            iconError:'',
            image:''
        }
    }
    imageSelection=()=>{
        ImagePicker.openPicker({
           multiple:true
        }).then(image=>{
            //debugger;
            //alert(image[0]["filename"]);
            console.log(image);
            this.setState({image:image[0]["sourceURL"]});
        })
    };
    render(){
        //debugger;
        return(
            <View>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({name:value,nameError:'',iconError:''})}
                            placeholder="Name"
                            label="Name"
                            value={this.state.name}
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.nameError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({email:value,emailError:'',iconError:''})}
                            placeholder="Email"
                            label="Email"
                            value={this.state.email}
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.emailError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({password:value,passwordError:'',iconError:''})}
                            secureTextEntry={true}
                            placeholder="Password"
                            label="Password"
                            value={this.state.password}
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.passwordError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({age:value,ageError:'',iconError:''})}
                            placeholder="Age"
                            label="Age"
                            value={this.state.age}
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.ageError}</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.headStyle}>Profile Pic</Text>
                        <Button onPress={()=>{this.imageSelection()}}> Select Image</Button>
                        {/*<Image source={{uri:this.state.image}} style={{height:40,width:50}}></Image>*/}
                        <Text>{this.state.image}</Text>
                    </CardSection>
            </View>

        )
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
export default Home;
