import React from 'react';
import './Shipping.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const {user}= useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="shipping-form">
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="form-field" defaultValue={user.displayName} {...register("name")} />
      <br />
      <input className="form-field" defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />
      <br />
      <input className="form-field" placeholder="City" {...register("city", { required: true })} />
      <br />
      <input className="form-field" placeholder="Address" {...register("address", { required: true })} />
      <br />
      {errors.email && <span className="red">This field is required</span>}
      <br />
      <input className='proceed' type="submit" />
    </form>
        </div>
    );
};

export default Shipping;