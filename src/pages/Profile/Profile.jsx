import useAuth from "../../hooks/useAuth";
import "./Profile.css";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="page-animation">
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-card-top" />
          <div className="profile-card-body">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar-ring" />
              <div className="profile-avatar">👤</div>
            </div>
            <h1 className="profile-name">{user.nombre}</h1>
            <span className="profile-badge">Cliente Premium</span>
            <div className="profile-rows">
              <div className="profile-row">
                <div className="profile-row-icon">📧</div>
                <div>
                  <p className="profile-row-label">Correo</p>
                  <p className="profile-row-val">{user.email}</p>
                </div>
              </div>
              <div className="profile-row">
                <div className="profile-row-icon">🎮</div>
                <div>
                  <p className="profile-row-label">Tipo de cuenta</p>
                  <p className="profile-row-val">Cliente</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;