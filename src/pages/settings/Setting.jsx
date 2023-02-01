import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";

const Setting = () => {
  return (
    <>
      <div className="settings">
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete your account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Vignesh" />
            <label>Email</label>
            <input type="email" placeholder="vignesh@mail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Setting;
