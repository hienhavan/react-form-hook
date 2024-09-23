import React from 'react';
import { useForm } from 'react-hook-form';


const MyFormDk = () => {

    const { register, handleSubmit, formState: { error } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='tk' >TK</label>
                    <input {...register("tai khoan", { required: "...." })} ></input>
                </div>

            </form>
        </>
    );

}
export default MyFormDk;