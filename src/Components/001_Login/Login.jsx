import "./Login.css"

export function Login()
{
    return(
        <div className="login-form d-flex justify-content-center align-items-center vh-100">
            <form className="form-style alert alert-dismissible shadow-lg p-5 rounded-4 bg-white border-0">
                <button className="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                <h2 className="text-center bi bi-person-circle my-3"> User Login</h2>
                <dl>
                    <dt>User Name </dt>
                    <dd><input type="text" className="form-control" placeholder="Enter Username"/></dd>
                    <dt>Password </dt>
                    <dd><input type="password" className="form-control" placeholder="Enter Password"/></dd>
                </dl>
                <button className="btn btn-warning w-100 fw-bold">Login <span className="bi bi-box-arrow-right"></span></button>
            </form>
        </div>
    );
}