import React from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/,
                            message: 'Invalid email address'
                        }
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    {...register("password", {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters'
                        }
                    })}
                />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
