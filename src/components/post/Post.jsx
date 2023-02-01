import "./post.css";
import { Link } from "react-router-dom";
const Post = () => {
  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link" to={"/post/hi"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae
        inventore illo molestias cupiditate, voluptatem alias hic voluptas vel
        accusamus id, cum dolore rem debitis fugit! Nesciunt, at nostrum! Ipsam?
      </p>
    </>
  );
};

export default Post;
