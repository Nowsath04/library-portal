import React from "react";
import { Link } from "react-router-dom";

function Issue_List() {
  let deleteData = () => {
    let confirm = window.confirm("Are you sure?");
    if (confirm) {
      alert("Deleted !!");
    }
  };
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4">Book Borrowers List</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Add on and Availability</li>
      </ol>
      <Link
        to={"/portal/book_issue"}
        type="button"
        class="btn btn-secondary me-2 mb-1"
      >
        Back
      </Link>
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-table me-1"></i>
          Borrowers Table
        </div>
        <div class="card-body">
          <table class="table table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student Id</th>
                <th scope="col">Department</th>
                <th scope="col">Book Title</th>
                <th scope="col">ISBN</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Return Date</th>
                <th scope="col">Fine</th>
                <th scope="col">Remark</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bala Kumar</td>
                <td>2021CS12</td>
                <td>Computer Science</td>
                <td>React JS</td>
                <td>678-876-1234</td>
                <td>2022-10-10</td>
                <td>2022-10-18</td>
                <td>2022-10-20</td>
                <td>5.00</td>
                <td>NIL</td>
                <td>
                  <button
                    onClick={() => {
                      deleteData();
                    }}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Issue_List;