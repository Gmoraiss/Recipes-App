import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState();
  const logoutBtn = () => {
    localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    const getEmail = JSON.parse(localStorage.getItem('user'));
    setUserEmail(getEmail.email);
  }, []);

  return (
    <div>
      <Header title="Profile" isSearchButton={ false } />
      <p
        data-testid="profile-email"
      >
        { userEmail }
      </p>

      <button
        data-testid="profile-done-btn"
        type="button"
        className="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>

      <button
        data-testid="profile-favorite-btn"
        type="button"
        className="profile-done-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>

      <button
        data-testid="profile-logout-btn"
        type="button"
        className="profile-logout-btn"
        onClick={ logoutBtn }
      >
        Logout
      </button>

      <Footer />

    </div>
  );
}

export default Profile;
