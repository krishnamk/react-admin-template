import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    var navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        console.log(token);
        if (token) {
            navigate("/dashboard"); // Redirect to home if no token
        }
    }, [navigate]);

    const [formData, setFormData] = useState({email: "", password: ""});

    const changeHandler = e => {

        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            let formDataToSend = new FormData();
            formDataToSend.append("email", formData["email"]);
            formDataToSend.append("password", formData["password"]);
            let response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                body: formDataToSend,
            });
            let data = await response.json();
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if(data.token) {
                localStorage.setItem("authToken", data.token);
                navigate("/dashboard");
            }
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">

                            <div className="text-center mt-4">
                                <h1 className="h2">Welcome back!</h1>
                                <p className="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-3">
                                        <form onSubmit={submitHandler}>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control form-control-lg" type="email"
                                                       name="email" placeholder="Enter your email" onChange={changeHandler} value={formData.email}/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg" type="password"
                                                       name="password" placeholder="Enter your password" onChange={changeHandler} value={formData.password}/>
                                            </div>
                                            <div>
                                                <div className="form-check align-items-center">
                                                    <input id="customControlInline" type="checkbox"
                                                           className="form-check-input" value="remember-me"
                                                           name="remember-me" checked/>
                                                    <label className="form-check-label text-small"
                                                           htmlFor="customControlInline">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2 mt-3">
                                                <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-3">
                                Don't have an account? <a href="register">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;