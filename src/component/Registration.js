import React,{Component} from 'react';
import {Text,Image,View} from 'react-native';
import {Card,CardSection,Button,Header} from './Common/Common';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {registerUser} from '../FunctionCall/Call';
import {imageStyles} from '../Helper/styles/Style';
import {checkAge,checkEmail,empty,oneEmpty,emailEmpty,passwordEmpty,nameEmpty} from '../Validation/Validation'
import Home from './Home';
class Registration extends Component{
    static navigationOptions = {
        drawerLabel: 'Registration',
        drawerIcon:()=>(
          <Icon name="registered" size={25}/>
        ),
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
            const data = new FormData();
            data.append('image',{
                            uri:image[0]['path'],
                            name:image[0]['filename'],
                            type:image[0]['mime']
                       });
            //alert(image[0]["filename"]);
            //console.log("Image:"+image);
            //console.log(data);
            this.setState({image:data._parts});
        })
    };
    checkData=()=>{
        if(empty(this.state.email,this.state.password,this.state.age,this.state.name)){
            this.setState({emailError:'Please enter email',iconError:'exclamation-triangle',ageError:'Please enter age',passwordError:'Please enter Password',nameError:'Please enter name'});
        }
        else if(oneEmpty(this.state.email,this.state.age,this.state.password,this.state.name)){
            if(emailEmpty(this.state.email)){
                this.setState({emailError:'Please enter email',iconError:'exclamation-triangle'});
            }
            else if(passwordEmpty(this.state.password)){
                this.setState({passwordError:'Please enter password',iconError:'exclamation-triangle'});
            }
            else if(nameEmpty(this.state.name)){
                this.setState({passwordError:'Please enter name',iconError:'exclamation-triangle'});
            }
            else {
                this.setState({ageError:'Please enter age',iconError:'exclamation-triangle'});
            }
        }
        else if(!checkEmail(this.state.email)){
            this.setState({emailError:'Enter Valid Email and Age',iconError:'exclamation-triangle'});
        }
        else if(!checkAge(this.state.age)){
            this.setState({ageError:'Enter Valid Age ',iconError:'exclamation-triangle'});

        }
        else {
            this.setState({emailError:'',ageError:'',passwordError:'',iconError:''});
            //alert(this.state.email+" "+this.state.age+ " "+this.state.password+" "+this.state.name+" "+this.state.image);
            const objUser = {
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                age:this.state.age,
                imageName:this.state.image
            };
            console.log("imageName:"+this.state.image);
            registerUser(this.state.image).then(() => {
                alert("Valid Data");
            }).catch((err) => {
                alert(err);
                console.log(err);
            })
            this.setState({name:'',email:'',password:'',age:'',image:''});
        }
    };
    onChange=(text,key)=>{
        let state=this.state;
        state[key]=text;
        if(key === 'name'){
            state['nameError']='';
            state['iconError']='';
        }
        else if(key === 'age'){
            state['ageError']='';
            state['iconError']='';
        }
        else if(key === 'password'){
            state['passwordError']='';
            state['iconError']='';
        }
        else if(key === 'email'){
            state['emailError']='';
            state['iconError']='';
        }
        this.setState(this.state);
    };
    render(){
        //debugger;
        return(
            <View>
                <Image source={require('./../images/imgUser.jpeg')} size={70} style={imageStyles.imgStyle}/>
                <Header headerText="Registration" headIcon="registered"/>
                <Card>
                    <Home
                        name={this.state.name}
                        nameError={this.state.nameError}
                        email={this.state.email}
                        emailError={this.state.emailError}
                        password={this.state.password}
                        passwordError={this.state.passwordError}
                        age={this.state.age}
                        ageError={this.state.ageError}
                        iconError={this.state.iconError}
                        image={this.state.image}
                        onChange={this.onChange}
                        imageSelection={this.imageSelection}
                    />
                    <CardSection>
                        <Button onPress={()=>this.checkData()}>Save</Button>
                    </CardSection>
                </Card>
            </View>

        )
    }
}
export default Registration;
