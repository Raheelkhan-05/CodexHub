import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import { useHistory } from 'react-router-dom';
import { FaTrophy, FaCalendarAlt, FaCodeBranch, FaEdit, FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editBio, setEditBio] = useState(false);
  const [newBio, setNewBio] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem('username');
        const response = await axios.get(`http://localhost:5000/profile/${username}`);
        setUser(response.data);
        setNewBio(response.data.userData.bio);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);


  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete your profile? This action is irreversible and will permanently remove all your data.'
    );

    if (confirmDelete) {
      const username = localStorage.getItem('username');

      try {
        const response = await axios.delete('http://localhost:5000/api/delete-user', {
          data: { username },
        });

        if (response.status === 200) {
          localStorage.removeItem('username');
          alert('Your profile has been deleted successfully.');
          history.goBack();
        } else {
          alert('Failed to delete your profile.');
        }
      } catch (error) {
        console.error('Error deleting profile:', error);
        alert('An error occurred while deleting your profile.');
      }
    }
  };
  


  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }
  const renderStat = (value, label) => {
    if (!value) {
      return <span>No Data Found!</span>;
    }
  
    if (label === 'Last Contest') {
      const dateObj = new Date(value);
      const formattedDate = dateObj.toLocaleString();
      return formattedDate;
    }
  
    return value;
  };

  return (
    <>
    <div className="user-profile">
      <div className="animated-background">
        <div className="profile-header">
          <div className="user-avatar">
            <FaUserCircle style={{ borderRadius: "50%", color: "rgba(0,0,0,1)", boxShadow: "0px 0px 2px black" }} />
          </div>
          <div className="user-info">
            <h2 className="username" style={{ textTransform:"capitalize", fontVariant: "small-caps", fontSize: "28px" }}>{user.username}</h2>
            <hr className='hrline' style={{ width: "180px", margin: "auto", fontWeight: "900" }} />
            <h5 style={{ textShadow: "0px 0px 10px black" }}>·</h5>
          </div>
        </div>

        <div className="stats">

          <div className="stat-item">
            <div className="m-2 stat-icon">
              <FaCodeBranch style={{ scale: "1.5" }} />
            </div>
            <div className="stat-content">
              <h4>Questions Solved</h4>
              <hr />
              <p>Leetcode: {renderStat(user.userData.leetcodeSolvedQuestions)}</p>
              <p>Codechef: {renderStat(user.userData.codechefSolvedQuestions)}</p>
              <p>Codeforces: {renderStat(user.userData.codeforcesSolvedQuestions)}</p>
            </div>

          </div>

          <div className="stat-item">
            <div className="m-2 stat-icon">
              <FaTrophy style={{ scale: "1.5" }} />
            </div>
            <div className="stat-content">
              <h4>Contests Participation</h4>
              <hr />
              <p>Total Contests: {renderStat(user.userData.totalContests)}</p>
              <p>Leetcode Ratings: {renderStat(user.userData.leetcodeRatings)}</p>
              <p>Codechef Ratings: {renderStat(user.userData.codechefRatings)}</p>
              <p>Codeforces Ratings: {renderStat(user.userData.codeforcesRatings)}</p>
              <p>Last Contest: {(user.userData.lastContest)}</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="m-2 stat-icon">
              <FaCalendarAlt style={{ scale: "1.5" }} />
            </div>
            <div className="stat-content">
              <h4>Badges<br /> Obtained</h4>
              <hr />
              <div className="badge-list">
                {user.userData.badges.length > 0 ? (
                  user.userData.badges.map((badge, index) => (
                    <div key={index} className="badgess">
                      <li>{badge}</li>
                    </div>
                  ))
                ) : (
                  <p>No Data Found!</p>
                )}
              </div>
            </div>
          </div>
          <div className='stat-item1' style={{textAlign:'center', alignContent:'center', backgroundColor:'transparent',boxShadow:'0px 0px 0px transparent'}}>
          
        </div>
          <div className='stat-item1 mt-4' style={{textAlign:'center', alignContent:'center',  backgroundColor:'transparent',boxShadow:'0px 0px 0px transparent'}}>
          <span style={{color:'white', textShadow:'0px 0px 2px white'}}>Want to Delete this Profile ? </span><button onClick={handleDeleteProfile} style={{textAlign:'center', color: 'red', boxShadow:"2px 2px 2px black",border:'none', fontWeight:'700', padding: '7px 12px' }}>
          Delete Profile
        </button>
        </div>
          <div className='stat-item1' style={{textAlign:'center', alignContent:'center',  backgroundColor:'transparent',boxShadow:'0px 0px 0px transparent'}}>

        </div>
        </div>
      </div>
    </div>
    <div className="py-3">
    {/* ... (existing code) ... */}
    <div className="wrapper mx-auto" style={{ marginTop: '130px', textAlign: 'center' }}>
      {/* ... (existing code) ... */}
      <div style={{ marginTop: '20px' }}>
        
      </div>
    </div>
  </div>
  </>
  );
};

export default Profile;