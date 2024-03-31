import React, { useState } from 'react';
import ProfileCard from './profilecard';

function App() {
  const [profile, setProfile] = useState({
    name: "Grant Cardone",
    username: "grantcardone",
    bio: "Investor, Author, Salesperson, Motivational Speaker, Internet Celebrity, YouTuber, Trainer",
    imageUrl: "https://media.bizj.us/view/img/12695151/grant-cardone-2024.jpg"
  });

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to My App</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", maxWidth: "400px", margin: "0 auto" }}>
        <ProfileCard
          name={profile.name}
          username={profile.username}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
      </div>
      <form style={{ maxWidth: "400px", margin: "20px auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleInputChange}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            style={{ marginLeft: "10px", verticalAlign: "top" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={profile.imageUrl}
            onChange={handleInputChange}
            style={{ marginLeft: "10px" }}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
