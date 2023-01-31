import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quaerat ea voluptas sunt autem vero, dolor itaque voluptate ratione
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <div className="sidebarList">
            <div className="sidebarListItem">Life</div>
            <div className="sidebarListItem">Music</div>
            <div className="sidebarListItem">Sport</div>
            <div className="sidebarListItem">Tech</div>
          </div>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
