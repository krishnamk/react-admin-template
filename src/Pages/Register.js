import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    const  [formData, setFormData] = useState({name: "", email: "", password: ""});
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        console.log(token);
        if (token) {
            navigate("/dashboard"); // Redirect to home if no token
        }
    }, [navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            let formDataToSend = new FormData();
            formDataToSend.append("name", formData["name"]);
            formDataToSend.append("email", formData["email"]);
            formDataToSend.append("password", formData["password"]);
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                body: formDataToSend,
            });
            let data = await response.json();
            console.log(data);
            if(data.token){
                localStorage.setItem("authToken", data.token);
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">

                            <div className="text-center mt-4">
                                <h1 className="h2">Get started</h1>
                                <p className="lead">
                                    Start creating the best possible user experience for you customers.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-3">
                                        <form onSubmit={submitHandler} >
                                            <div className="mb-3">
                                                <label className="form-label">Full name</label>
                                                <input className="form-control form-control-lg" type="text" name="name"
                                                       placeholder="Enter your name" value={formData.name}
                                                onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control form-control-lg" type="email"
                                                       name="email" placeholder="Enter your email" value={formData.email}
                                                       onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg" type="password"
                                                       name="password" placeholder="Enter password" value={formData.password}
                                                       onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="d-grid gap-2 mt-3">
                                                <button type="submit" className="btn btn-lg btn-primary">Sign up</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-3">
                                Already have account? <a href="/">Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;