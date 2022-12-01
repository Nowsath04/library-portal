import "./App.css";
import "./css/styles.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
// import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Book_List from "./Book_List";
import Add_Book from "./Add_Book";
import Edit_Book from "./Edit_Book";
import Issue_Form from "./Issue_Form";
import Issue_List from "./Issue_List";
import Login from "./Login";
import Portallayout from "./Portallayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portallayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="book_list" element={<Book_List />} />
          <Route path="book_add" element={<Add_Book />} />
          <Route path="book_edit/:id" element={<Edit_Book />} />
          <Route path="book_issue" element={<Issue_Form />} />
          <Route path="issue_List" element={<Issue_List />} />
        </Route>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;