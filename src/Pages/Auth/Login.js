import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';                                                       
import { useDispatch } from 'react-redux';
import { ON_LOGIN } from '../../redux/authSlice';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToRegister = () => {
    navigate("/register");
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!email || !password) {
      setError('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    const userArr= JSON.parse(localStorage.getItem("userArr") || '[]');

    const user = userArr.find(user => user.email === email && user.password === password);
    if(user) {
      setError('');
      alert("Đăng nhập thành công!");
      dispatch(ON_LOGIN(user));
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/");
    } else {
      setError('Email hoặc mật khẩu không chính xác!');
      setPassword('');
    }
  };
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3"
    style={{
    backgroundImage: 'url("/images/bg-login.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
    }}
    >
      <div className="shadow-lg rounded-4 overflow-hidden bg-white d-flex flex-column justify-content-center p-5" style={{ Width: '600px', Height:'600px' }}>
        
        <div className=" p-5">
          <h2 className="text-center mb-4 text-muted fw-light">Sign In</h2>
          
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 btn-lg">
              SIGN IN
            </button>
          </form>
          <p className="text-center text-muted mt-4">
            Create an account? <button onClick={navigateToRegister} className="text-primary" style={{
              background:"none", border:"none"
            }}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
