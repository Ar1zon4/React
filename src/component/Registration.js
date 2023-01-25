import React, { useState } from "react";
import Button from "./Button";
function Registration(){
    const goForm={
        width:'50%',
        margin:'0 auto',
        // backgroundColor:"",
        height:'400px',
    }

    const godiv={
        // width:'50%'
        margin:'2%'

    }

    const pPower={
        paddingLeft:"190px",
    }

    const [user, setuser]=useState({
        name: '',
        email: '',
        password:'',
        phone:'',
        confirmPassword:'',
    });

    const [error, seterror]=useState({
        nameErr:'',
        emailErr:'',
        passwordErr:'',
        phoneErr:'',
        confirmPassworderr:'',
    })

    const handleform = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setuser({
            ...user,
            [name]: value,
           })
    }


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] =useState('');
    // const [password, setPassword] = useState('');
    // const [button, setSubmit]=useState('')
    const submitData=(e)=>{
        e.preventDefault()
        // const isvaild = formvalidation()
        // const formvalidation = () =>{
        //   const  name= {};
        //   const  email= {};
        //   const  password={};
        //  const  phone={};
        //   const confirmPassword= {};
        //   isvaild = true;

        // }

        // if(user.name.trim().length > 15){
        //     isvaild : true,
        //     setuser((e)=>{
        //         return{
        //             ...user,
        //             name:`Vaild name`
                 
        //         }
        //     })
        // }

            if(user.name.length > 15||user.name.trim() == "" || user.name == 0 ||user.name == null){
                seterror((e)=>{
                    return{
                        ...user,
                        name:`Invaild name`
                    }
                })    
            }

        

          
          
            
          
          if(user.email.indexOf('@') != -1 && user.email.indexOf('.') != -1 && (user.email.indexOf('gmail') != -1)){
            // setuser((e)=>{
            //     return{
            //         ...user,
            //         email:`Vaild Email`
            //     }
            // })
            seterror((err)=>{
                
            return {
                ...err,
                emailErr: `Email is required`,
              }
            })
          }
          if(user.phone.startsWith('081') || user.phone.startsWith('070') || user.phone.startsWith('091') || user.phone.startsWith('080') && user.phone.length == 11 ){
           
            
            seterror((err)=>{
            return  {
                ...err,
                phoneErr : `Phone is required`,
              }
            })
          }
          if(user.password == "" || user.password.length <= 7 ||user.password == null){
            
            seterror((err)=>{
            return  {
                
                ...err,
                passwordErr: `Password is valid`,
              }
            })
            
          }
          
          if(user. confirmPassword != user.password){
            seterror((err)=>{
            return  {
                
                ...err,
                confirmPassworderr: `Password does not match`,
              }
            })
        }
    
          else{
            console.log(user)
          }
        
        
        
        
    }
   
    return(
        <div>
            <form onSubmit={submitData} style={goForm}>
                <div >
                    <div  style={godiv}>
                        {user.name}
                    <input type="text"  
                    onChange={handleform}
                    name="name" placeholder="Your name" 
                    style={{width:'100%', height:'50px', border:'none', borderTop:'1px solid brown'}} />
                    <strong>{error.nameErr}</strong>
                    {/* <strong>{user.name}</strong> */}
                    </div>
                    
                    
                    <div  style={godiv}>
                        {user.email}
                    <input type="email"  
                    onChange={handleform}
                    name="email" placeholder="Your email" 
                    style={{width:'100%', height:'50px', border:'none', borderTop:'1px solid brown'}} />
                    <strong>{error.emailErr}</strong>
                    </div>
                    
                    <div  style={godiv}>
                        {user.phone}
                    <input type="tele"  
                    onChange={handleform} 
                    name="phone" placeholder="Your Telephone" 
                    style={{width:'100%', height:'50px', border:'none', borderTop:'1px solid brown'}} />
                    <strong>{error.phoneErr}</strong>
                    </div>
                    
                    <div  style={godiv}>
                        {user.password}
                    <input type="Password"  
                    onChange={handleform}
                    name="Password" 
                    placeholder="Your Password" 
                    style={{width:'100%', height:'50px', border:'none', borderTop:'1px solid brown'}} />
                    <strong>{error.passwordErr}</strong>
                    </div>
                    
                    
                    <div  style={godiv}>
                        {user.password}
                    <input type="Password"  
                    onChange={handleform}
                    name="Password" 
                    placeholder="Confirm Password" 
                    style={{width:'100%', height:'50px', border:'none', borderTop:'1px solid brown'}} />
                    <strong>{error.confirmPassworderr}</strong>
                    </div>
                    
                </div>
                
                <button type='submit'>Register</button>
                
                
            </form>
        </div>
    )

}





export default Registration


