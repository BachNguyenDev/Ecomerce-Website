import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!fullName || !email || !password || !phone) {
      setError('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    if (password.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự!');
      return;
    }

  
    const userArr = JSON.parse(localStorage.getItem('userArr')) || [];

    const emailExists = userArr.some((user) => user.email === email);
    if (emailExists) {
      setError('Email đã tồn tại!');
      return;
    }

    
    const newUser = { fullName, email, password, phone };
    userArr.push(newUser);
    localStorage.setItem('userArr', JSON.stringify(userArr));

    
    setError('');
    navigate('/login');
  };

  const navigateToLogin = () => {
    navigate("/login");
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
      <div className="shadow-lg overflow-hidden bg-white d-flex flex-column justify-content-center p-5" style={{ Width: '600px', Height: '600px' }}>
        <div className="p-5">
          <h2 className="text-center mb-4 text-muted fw-light">Sign Up</h2>
          
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Full Name"
                className="form-control form-control-lg p-3"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Email"
                className="form-control form-control-lg p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Phone"
                className="form-control form-control-lg p-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 btn-lg">
              SIGN IN
            </button>
          </form>
          <p className="text-center text-muted mt-4">
            Login? <button style={{
              border: "none", background: "none"
            }} className="text-primary" onClick={navigateToLogin}>Click</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;