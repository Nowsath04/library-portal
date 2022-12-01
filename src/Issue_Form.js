import React from "react";
import { Link } from "react-router-dom";

function Issue_Form() {
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4">Book Issue Form</h1>
      <form class="row g-3 m-4 border border-3 border-success rounded">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Student Name<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-3">
          <label for="inputEmail4" class="form-label">
            Student Id No.<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-3">
          <label for="inputState" class="form-label">
            Department<span style={{ color: "red" }}>*</span>
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
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Book Title<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
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
        <div class="col-md-4">
          <label for="inputAddress2" class="form-label">
            Issue Date<span style={{ color: "red" }}>*</span>
          </label>
          <input type="date" class="form-control" id="inputAddress2" />
        </div>
        <div class="col-md-4">
          <label for="inputAddress2" class="form-label">
            Due Date<span style={{ color: "red" }}>*</span>
          </label>
          <input type="date" class="form-control" id="inputAddress2" />
        </div>
        <div class="col-md-4">
          <label for="inputAddress2" class="form-label">
            Return Date<span style={{ color: "red" }}>*</span>
          </label>
          <input type="date" class="form-control" id="inputAddress2" />
        </div>
        <div class="col-md-4">
          <label for="inputAddress2" class="form-label">
            Fine(if any) Rs:
          </label>
          <input type="number" class="form-control" id="inputAddress2" />
        </div>
        <div class="col-md-4">
          <label for="inputEmail4" class="form-label">
            Note
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-8">
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

        <div class="col-md-4 text-end">
          <Link to={"/portal/issue_List"} type="button" class="btn btn-info mb-1">
            Issue List
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Issue_Form;