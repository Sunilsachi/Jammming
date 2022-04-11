import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    let navigate = useNavigate();
    return (
        <div className='m-5'>
            <div className='text-center h4 mb-5'>Application</div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value="" />
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value="" />
                </div>
            </div>
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
                <button type="submit" class="btn btn-primary mb-3" onClick={() => navigate('/login')}>Submit</button>
            </div>
        </div>
    )
}

export default Form;