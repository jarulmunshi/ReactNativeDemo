import React,{Component} from 'react';
import {Text,Image,View,Modal} from 'react-native';
import {Card,CardSection,Button,Header} from './Common/Common';
import {editUser} from '../FunctionCall/Call'
import {imageStyles} from '../Helper/styles/Style';
import {checkAge,checkEmail,empty,oneEmpty,emailEmpty,passwordEmpty,nameEmpty} from '../Validation/Validation'
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

    }
    // imageSelection=()=>{
    //     ImagePicker.openPicker({
    //         multiple:true
    //     }).then(image=>{
    //         //debugger;
    //         //alert(image[0]["filename"]);
    //         console.log(image);
    //         this.setState({image:image[0]["sourceURL"]});
    //     })
    // };
    componentWillUnmount=()=>{
        //alert("Jarul")
        this.props.navigation.state.params.displayUser();
    }
    editData=()=>{
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
            editUser(objUser).then(() => {
                this.props.navigation.navigate('UserDetail');
            }).catch((err) => {
                //alert("Not valid user");
                this.props.navigation.navigate('UserDetail');
            })
            this.setState({name:'',email:'',password:'',age:'',image:'',emailError:'',passwordError:'',nameError:'',ageError:''});
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
                <Modal
                    transparent = {false}
                >
                <View>
                    <Image source={require('./../images/imgUser.jpeg')} size={70} style={imageStyles.imgStyle}/>
                    <Header headerText="Edit User"/>
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
                        />
                        <CardSection>
                            <Button onPress={()=>this.editData()}>Edit</Button>
                        </CardSection>
                    </Card>
                </View>
                </Modal>


        )
    }
}
export default EditUser;
