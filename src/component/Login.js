import React, { useState } from "react";


function Login(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] =useState('');
    const [password, setPassword] = useState('');
    const [confirm, setSubmit]=useState('')
    const [gender1, setgender1]=useState('')
    const [gender2, setgender2]=useState('')
    const [gender3, setgender3]=useState('')
    const [status1, setstatus1]=useState('')
    const [status2, setstatus2]=useState('')
    const [status, setstatus]=useState('')



   
    
    
    
    
    return(
        <div>
            <form >
                <div  >
                    <div>
                        {name}
                       
                    <input type="text"   
                    onChange={(e)=>{setName (e.target.value)}}  
                    name="name" placeholder="Your name" 
                    style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
                    </div>
                    
                    
                    <div>
                        {email}
                    <input type="email"  
                    onChange={(e)=>{setEmail (e.target.value)}} 
                     name="email" placeholder="Your email" 
                     style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
                    </div>
                    <div  >
                        {phone}
                    <input type="tel"  
                    onChange={(e)=>{setPhone (e.target.value)}} 
                    name="phone" placeholder="Your Telephone" 
                    style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
                    </div>
                    <div  >
                        {password}
                    <input type="Password"  
                    onChange={(e)=>{setPassword (e.target.value)}} 
                    name="Password" placeholder="Your Password" 
                    style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
                    </div>
                       <div  >
                        {confirm}
                        
                        <input type="Password"  
                        onChange={(e)=>{setSubmit (e.target.value)}}
                         name="Password" placeholder="Confirm Password" 
                         style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}}  />
                        </div>
                        <div  >
                          {gender1}
                          {gender2}
                          {gender3}

                          <input type="radio" name="gender" value="male" checked/> Male<br/>
                          <input type="radio" name="gender" value="female"/> Female<br/>
                          <input type="radio" name="gender" value="other"/> Other
                          <input type="radio"
                          onChange={(e)=>{setstatus (e.target.value)}}
                         name="status" placeholder="Marital Status"  
                         style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
                        </div>
                        <div  >
                            {status}
                            <input type="radio" name="status" value="married" checked/> Married<br/>
                          <input type="radio" name="status" value="single"/> Single<br/>
                          <input type="radio" name="status" value="other"/> Other
                        <input type="text"  
                        onChange={(e)=>{setstatus (e.target.value)}}
                         name="status" placeholder="Marital Status"  
                         style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
                        </div>
                    
                    
                </div>
            </form>
        </div>
    )

}





export default Login 