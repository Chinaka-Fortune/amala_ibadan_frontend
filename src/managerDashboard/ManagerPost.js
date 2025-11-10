import React from "react";
import { useState } from "react";
const ManagerPost = () => {
  const [creatPost, setCreatePost] = useState("");
  const handleCreatePost = (e) => setCreatePost(e.target.value);
  const [creatPostPrice, setCreatePostPrice] = useState(1);
  const handlecreatPostPrice = (e) => setCreatePostPrice(e.target.value);
  const [creatPostImage, setCreatePostImage] = useState(null);
  const handlecreatPostImage = (e) => setCreatePostImage(e.target.value);
  const handlecreatPostSubmitBtn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-fluid ">
      <div className="row d-flex justify-content-center">
        <div className="centerPostContainer d-flex justicy-content-center">
          <form className="col-sm-9 col-lg-6 d-flex justify-content-center flex-column gap-4 mx-auto">
            <textarea
              name=""
              id=""
              placeholder="Whats for today..."
              className="rounded-2 p-3 textAreaPost"
              style={{ resize: "none" }}
              value={creatPost}
              onChange={handleCreatePost}
            ></textarea>
            <div className="d-flex">
              <input
                type="number"
                placeholder="enter price"
                className="w-100 ps-3 py-1 py-sm-3 rounded "
                value={creatPostPrice}
                onChange={handlecreatPostPrice}
              />
            </div>
            <div className="">
              <input
                type="file"
                className="w-100"
                value={creatPostImage}
                onChange={handlecreatPostImage}
              />
            </div>
            <div className="">
              <label htmlFor="category" className="fw-bolder text-muted">
                Category:
              </label>
              <input list="categories" id="category" className="ps-2" />

              <datalist id="categories">
                <option value="swallow"></option>
                <option value="Protein"></option>
                <option value="Rice"></option>
                <option value="Extra"></option>
                <option value="Chrismas Deals"></option>
              </datalist>
            </div>

            <input
              type="submit"
              value="Submit"
              className="mt-3 rounded-2 px-4 py-1 py-sm-3 fw-bolder border-0 btn-primary btn"
              onClick={handlecreatPostSubmitBtn}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagerPost;
