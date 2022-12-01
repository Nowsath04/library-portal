import React from "react";
import { Link } from "react-router-dom";

function Edit_Book() {
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4">Add Book Details</h1>
      <form class="row g-3 m-4 border border-3 border-success rounded">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Book Title<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Author<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            ISBN<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="123-456-7890"
          />
        </div>
        <div class="col-md-6">
          <label for="inputAddress2" class="form-label">
            Publisher<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Best India, Star"
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Category<span style={{ color: "red" }}>*</span>
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Computer Science</option>
            <option>Maths</option>
            <option>Economics</option>
            <option>Political Science</option>
            <option>Electrical</option>
            <option>Mechanical</option>
            <option>Electronics</option>
            <option>General/Others</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputAddress2" class="form-label">
            Year<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            class="form-control"
            id="inputAddress2"
            placeholder="2022"
          />
        </div>
        <div class="col-12">
          <Link
            to={"/portal/book_list"}
            type="button"
            class="btn btn-secondary me-2 mb-1"
          >
            Back
          </Link>
          <button type="submit" class="btn btn-primary mb-1">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit_Book;