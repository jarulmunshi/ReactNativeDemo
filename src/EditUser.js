import React,{Component} from 'react';
import {Text,Image,View,Modal} from 'react-native';
import {Card,CardSection,Button,Input,Header} from './component/Common';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {editUser} from './FunctionCall/Call'
import Home from './Home';
class EditUser extends Component{
    constructor(props){
        super(props);
        const data=this.props.navigation.state.params.item;
        super(props);
        this.state={
            name:data.name,
            nameError:'',
            email:data.email,
            emailError:'',
            password:data.password,
            passwordError:'',
            age:String(data.age),
            ageError:'',
            iconError:'',
            image:data.imageName
        };
        console.log(this.state.name);

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
    editData=()=>{
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
            const objUser = {
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                age:this.state.age,
                imageName:this.state.image
            };
            editUser(objUser).then(() => {
                this.props.navigation.navigate('UserDetail');
            }).catch((err) => {
                alert("Not valid user");
            })
            this.setState({name:'',email:'',password:'',age:'',imageName:''});
        }
    };
    render(){
        //debugger;
        return(
                <Modal
                    transparent = {false}
                >
                <View>
                    <Header headerText="Edit User"/>
                    <Card>
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
                            <Image source={{uri:this.state.image}} style={{height:40,width:50}}></Image>
                            {/*<Text>{this.state.image}</Text>*/}
                        </CardSection>
                        <CardSection>
                            <Button onPress={()=>this.editData()}>Edit</Button>
                        </CardSection>
                    </Card>
                </View>
                </Modal>


        )
    }
}
const styles={
    modalStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'silver'
    }

};
export default EditUser;
