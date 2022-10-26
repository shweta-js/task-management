import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Dashboard.css";
import { useEffect,useState } from "react";
import DashboardBarGraph from "../components/DashboardBarGrap";
import { getEmpCount } from "../features/auth/authSlice";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getTasks, reset } from "../features/tasks/taskSlice";
import { getEmployees} from "../features/employees/employeeSlice";
import UpComingTask from '../components/UpComingTask';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
// const URL="https://localhost:8000/api/users";
const TotalCountTab = ({ count }) => {

    return (
      <div
        // className="count-tab custom-container "
        // style={{ justifyContent: "space-between" }}
      >
      <p>{count}</p>
      </div>
    );
  };
const Dashboard = () => {


  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
    const [ count, setCount]=useState(0);

    const { tasks, isLoading, isSuccess } = useSelector(state => state.task);
    const { employees } = useSelector(state => state.employee);
    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const percentage1 = (2/4)*100;
    const percentage2 = (1/4)*100;
    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login');
    //     } else {
    //        dispatch(getEmpCount());
    //     }
    // }, [user, navigate, dispatch])

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(getEmployees());
        }
    }, [user, navigate, dispatch])

    useEffect(() => {
      if (!user) {
          navigate('/login');
      } else {
          dispatch(getTasks());
      }
  }, [user, navigate, dispatch])

    useEffect(() => {
      if (!user) {
          navigate('/login');
      } else {
          dispatch(getEmpCount());
          // callCount()
      }
  }, [user, navigate, dispatch])
  // const callCount= ()=>{
  //   setCount()
  // }
  return (
    <>
    {console.log("getcount========"+dispatch(getEmpCount()))}
        <div>
        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> <li></li>
                    <li></li> <li></li>
                    <li></li> <li></li>
                    <li></li> <li></li>
                    <li></li>
            </ul>
    </div >
            {/* <h1 className="dashboard">Dashboard</h1> */}
            <hr></hr>
            <div className='main-dash'>
            <div className="main-dash1">
            
                <div className="sub-dash a">
           
                <div className="taskCount">
                    Total no. employees
                    <p className="taskCountNum">{employees.length}</p>
                   </div >
                   <div className="taskCount">
                    Total no. of Tasks
                    <p className="taskCountNum">{tasks.length}</p>
                   </div >
                   <div className="taskCount">
                    Completed Tasks
                    <p className="taskCountNum">2</p>
                    </div>
                   <div className="taskCount"> 
                    Tasks Inprogress
                    <p className="taskCountNum">2</p>
                   </div>
                </div>
                <div className="sub-dash b">
                    UpComing Tasks....
                {tasks.map(task => (
                    <UpComingTask task={task} key={task._id} className="priority" />
                ))}
                </div>
                </div>
              <div className="main-dash2">
                    <div className="sub-dash c">
                        {/* on going task progress
                        <CircularProgressbar className="circular-progress" value={percentage} text={`${percentage}%`} />
                        <DashboardBarGraph  height="13rem" /> */}
                         <div>
                        <Calendar 
                        value={dateState}
                        onChange={changeDate}
                        className="calender"
                        />
                     
                      </div>
                    </div>
                    <div className="sub-dash d">
                   <div  className="priority">
                    <h1>high priority task</h1>
                    <h1>average priority task</h1>
                    <h1>low priority task</h1>
                   </div>
                   <div>
                   <CircularProgressbar className="circular-progress" value={percentage1} text={`${percentage1}%`} />
                   <CircularProgressbar className="circular-progress" value={percentage2} text={`${percentage2}%`} />
                   <CircularProgressbar className="circular-progress" value={percentage2} text={`${percentage2}%`} />
                   </div>

                    </div>
            </div>
            </div>
            </div>

      

    </>
  )
}

export default Dashboard

