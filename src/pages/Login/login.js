import React from 'react';
import login from './login.css';

export default function (props) {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Đăng nhập</h3>
                    <div className="form-group mt-3">
                        <label>Email </label>
                        <input type="email" className="form-control mt-1" placeholder="Email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Mật khẩu</label>
                        <input type="password" className="form-control mt-1" placeholder="Password" />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary ">
                            Đăng nhập
                        </button>
                    </div>
                    {/* <p className="forgot-password text-right mt-2">
                        <a href="">Quên mật khẩu?</a>
                    </p> */}
                </div>
            </form>
        </div>
    );
}
