import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { AiOutlineCheck } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import employeeService from '../features/employees/employeeService';
import { StepProgress } from 'react-stepz'
import MyProgress from "./MyProgress"
import "./UpComingTask.css"
const UpComingTask = ({ task}) => {
    const dispatch = useDispatch();


    return (
        <div className="upcoming">
            <div className='upcoming-task'>
                <h1 className="text-gray-600 text-2xl font-semibold">{task.title}</h1>
            </div>
          
           
        </div>
    )
}

export default UpComingTask;
