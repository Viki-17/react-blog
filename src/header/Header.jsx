import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React& Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          src="https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623.jpeg"
          alt=""
          className="headerImg"
        />
      </div>
    </>
  );
};
export default Header;
