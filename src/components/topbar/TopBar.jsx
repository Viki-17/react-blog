import { Link } from "react-router-dom";
import "./topbar.css";
const TopBar = () => {
  const user = false;
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
            <li className="topListItem">
              <Link className="link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/"}>
                About
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/"}>
                Contact
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/write"}>
                Write
              </Link>
            </li>
            <li className="topListItem">{user && "LogOut"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to={"/"}>
                  Login
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to={"/"}>
                  Register
                </Link>
              </li>
            </ul>
          )}

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};
export default TopBar;
