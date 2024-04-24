
function ProfileCard({ name, username, bio, imageUrl }: { name: string, username: string, bio: string, imageUrl: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "20px", backgroundColor: "#f8f8f8", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <img 
        src={imageUrl} 
        alt={name} 
        style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} 
      />
      <div style={{ marginLeft: "20px" }}>
        <h2 style={{ marginBottom: "5px", color: "#333" }}>{name}</h2>
        <p style={{ marginBottom: "5px", color: "#666" }}>@{username}</p>
        <p style={{ color: "#888" }}>{bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
