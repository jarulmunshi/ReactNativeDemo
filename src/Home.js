import React,{Component} from 'react';
import {Text,Image,View} from 'react-native';
import {Card,CardSection,Button,Input,Header} from './component/Common';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    checkEmail=(email)=>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    checkAge=(age)=>{
        var r=/^([0-9].+$)/;
        return r.test(age);
    };
    checkData=()=>{
        if(this.state.email == '' && this.state.password == '' && this.state.age == '' && this.state.name == ''){
            this.setState({emailError:'Please enter email',iconError:'exclamation-triangle',ageError:'Please enter age',passwordError:'Please enter Password',nameError:'Please enter name'});
        }
        else if(this.state.email == '' || this.state.age == '' || this.state.password == '' || this.state.name == ''){
            if(this.state.email == ''){
                this.setState({emailError:'Please enter email',iconError:'exclamation-triangle'});
            }
            else if(this.state.password == ''){
                this.setState({passwordError:'Please enter password',iconError:'exclamation-triangle'});
            }
            else if(this.state.name == ''){
                this.setState({passwordError:'Please enter name',iconError:'exclamation-triangle'});
            }
            else {
                this.setState({ageError:'Please enter age',iconError:'exclamation-triangle'});
            }
        }
        else if(!this.checkEmail(this.state.email)){
            this.setState({emailError:'Enter Valid Email and Age',iconError:'exclamation-triangle'});
        }
        else if(!this.checkAge(this.state.age)){
                this.setState({ageError:'Enter Valid Age ',iconError:'exclamation-triangle'});

        }
        else {
            this.setState({emailError:'',ageError:'',passwordError:'',iconError:''});
            //alert(this.state.email+" "+this.state.age+ " "+this.state.password+" "+this.state.name+" "+this.state.image);
            axios.post('http://localhost:3000/',{
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                age:this.state.age,
                imageName:this.state.image
            }).then(()=>{
                alert("Valid Data");
             }).catch((err)=>{
                alert(err);
                console.log(err);
            });
            this.setState({name:'',email:'',password:'',age:'',imageName:''});
        }
    };
    render(){
        //debugger;
        return(
            <View>
                <Header headerText="Registration"/>
                <Card>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({name:value,nameError:'',iconError:''})}
                            placeholder="Name"
                            label="Name"
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.nameError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({email:value,emailError:'',iconError:''})}
                            placeholder="Email"
                            label="Email"
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.emailError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({password:value,passwordError:'',iconError:''})}
                            secureTextEntry={true}
                            placeholder="Password"
                            label="Password"
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.passwordError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({age:value,ageError:'',iconError:''})}
                            placeholder="Age"
                            label="Age"
                        />
                        <Text style={styles.textStyle}><Icon name={this.state.iconError} size={15}/>{this.state.ageError}</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.headStyle}>Profile Pic</Text>
                        <Button onPress={()=>{this.imageSelection()}}> Select Image</Button>
                        {/*<Image source={{uri:this.state.image}} style={{height:40,width:50}}></Image>*/}
                        <Text>{this.state.image}</Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.checkData()}>Save</Button>
                    </CardSection>
                </Card>
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
