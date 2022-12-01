import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Book_List() {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    bookData();
  }, []);

  let bookData = async () => {
    try {
      let detail = await axios.get(
        "https://6384c57d3fa7acb14f0017a5.mockapi.io/books"
      );
      setBooklist(detail.data);
      console.log(detail.data);
    } catch (error) {
      alert("Error");
    }
  };

  let deleteData = () =>{
    let confirm = window.confirm("Do you want to delete this data ?")
    if(confirm){
        alert("Deleted !!")
    }
  }
  
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4">Book List</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Add on and Availability</li>
      </ol>
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-table me-1"></i>
          Book List Table
          <div className="text-end">
          <Link to={"/portal/book_add"} type="button" class="btn btn-success">Add Book</Link>
          </div>          
        </div>
        <div class="card-body">
          <table class="table table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Book Title</th>
                <th scope="col">ISBN</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Year</th>
                <th scope="col">Publisher</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
              {booklist.map((item) => {
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.isbn}</td>
                    <td>{item.author}</td>
                    <td>{item.category}</td>
                    <td>{item.year}</td>
                    <td>{item.publisher}</td>
                    <td>
                      <Link to={`/portal/book_edit/${item.id}`} type="button" class="btn btn-info me-1">
                        Edit
                      </Link>
                      <button onClick={() => {
                        deleteData();
                      }} type="button" class="btn btn-danger"> 
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Book_List;