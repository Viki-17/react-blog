import "./write.css";

const Write = () => {
  return (
    <>
      <div className="write">
        <img
          className="writeImg"
          src="https://www.nestle.com/sites/default/files/styles/da_vinci_header_hero_desktop/public/2022-02/sustainability-nature-forest-river-article-header-fw.jpg?h=a612ed85&itok=1mqqgg1L"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
};

export default Write;
