import React from 'react'

const Login = () => {
    return (
        <div className='m-5'>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value="" />
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" />
                </div>
            </div>
            <div class="mb-3 row">
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
            </div>
        </div>
    );
}

export default Login;