import "./singlePost.css";
const SinglePost = () => {
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg"
            alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis, reiciendis harum debitis alias vel?
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singePostAuthor">
              Author: <b>Vignesh</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugiat
            voluptatem dolor voluptatum necessitatibus laboriosam beatae odit ut
            inventore, consectetur incidunt velit ipsa quod, placeat voluptas,
            cum sequi maiores. Voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci reprehenderit facere alias,
            eligendi unde quo incidunt sapiente, qui reiciendis maxime
            perspiciatis, dolore excepturi. Rem quod sequi temporibus dolorum
            molestias doloremque.
          </p>
        </div>
      </div>
    </>
  );
};
export default SinglePost;
