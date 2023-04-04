import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      navigate('/');
    }
  }, [navigate]);

  return null;
}
