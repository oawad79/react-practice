import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}

export default function AddContact () {
    const {register, handleSubmit, formState : {errors}} = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> =
        ((data) => alert(JSON.stringify(data)));

    return (
        <div className="py-20 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg m-auto py-10 mt-10 px-10 border">
                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 font-medium">First Name</label>
                    <input {...register("firstName", {required: true, maxLength: 20})}
                           className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                           placeholder="Your first name" autoFocus />
                    {errors.firstName && <p className="mb-3 text-normal text-red-500 ">This field is required</p>}
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 font-medium">Last Name</label>
                    <input {...register("lastName", {required: true, maxLength: 20})}
                           className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"/>
                    {errors.lastName && <p >This field is required</p>}
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 font-medium">Email</label>
                    <input {...register("email", {required: true, maxLength: 50})}
                           className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                           type="email" />
                    {errors.email && <p >This field is required</p>}
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 font-medium">Address</label>
                    <textarea {...register("address", {required: true, maxLength: 50})}
                           className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                           rows={5} cols={20}/>
                    {errors.address && <p >This field is required</p>}
                </div>

                <div className="flex flex-col mb-4">
                    <input type="submit"
                           className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"/>
                </div>
            </form>
        </div>
    );
}

