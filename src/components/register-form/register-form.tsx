import React, { FC, useReducer } from 'react';
import './register-form.css';

interface RegisterFormProps {}

function reducer(state:any,action:any){
      switch(action.type){
        case 'Field Change':
          return{
            ...state, [action.payload.field]:action.payload.value
          }
        case 'Form Submit':
          return {...state}
        default:
          throw new Error("Invalid Dispatch")
      }
}

const formData={
  name:'',
  phone:'',
  email:'',
  city:''
}

const RegisterForm: FC<RegisterFormProps> = () => {

  const [state,dispatch]=useReducer(reducer,formData);

  const onSubmit=(e:any)=>{
      e.preventDefault();
      console.log(state)
  }

  const onChange=(e:any)=>{
    const {name,value}=e.target;
    console.log({name,value})
    dispatch({type:'Field Change',payload:{field:name,value}})
  }
  return(
    <div className="register-form" data-testid="RegisterForm">
      <h3>Registration Form</h3>
        <form onSubmit={onSubmit}>
          <p> <input type="text" placeholder='Enter Your Name' name='name' onChange={(e)=>onChange(e)}></input> </p>
          <p> <input type="text" placeholder='Enter Your Number' name='phone' onChange={(e)=>onChange(e)}></input> </p>
          <p> <input type="text" placeholder='Enter Your Email' name='email' onChange={(e)=>onChange(e)}></input> </p>
          <p> <input type="text" placeholder='Enter Your City' name='city' onChange={(e)=>onChange(e)}></input> </p>

          <button type='submit'>Submit</button>
        </form>
  </div>
  )
}

export default RegisterForm;
