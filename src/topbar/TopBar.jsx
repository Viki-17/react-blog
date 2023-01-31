import "./topbar.css";
const TopBar = () => {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>
            <li className="topListItem">Logout</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};
export default TopBar;
