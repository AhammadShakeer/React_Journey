import { Formik, useFormik } from "formik";

export function FormDemo()
{
    const formik=useFormik({
        initialValues:{
            username:'',email:'',city:''
        },
        onSubmit:(user)=>console.log(user)
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="username"/></dd>
                      <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange} name="email"/></dd>
                    <dt>city</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="city" id="">
                            <option >Select option</option>
                            <option >Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}