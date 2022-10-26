import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Register from './pages/Register';
import Login from './pages/Login';
import TaskForm from './pages/TaskForm';
import MyTasks from './pages/MyTasks';
import Task from './pages/Task';
import Home from "./pages/Home";
import Employee from './pages/Employee';
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from "./components/ViewEmployee";
import SingleEmployee from './components/SingleEmployee';
import Dashboard from './pages/Dashboard';
import FloatingSquares from './components/FloatingSquares';
function App() {
  return (
    <>
      <Router>
        <Header />
       
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tasks' element={<TaskForm />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/tasks/:taskId' element={<Task />} />
          <Route path="/add-employee" element={<AddEmployee/>}/>
          <Route path='/my-tasks' element={<MyTasks />} />
          <Route path='/employees/:employeeId' element={<SingleEmployee/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
