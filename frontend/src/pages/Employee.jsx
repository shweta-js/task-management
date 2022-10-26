import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getEmployee, getEmployees, reset } from "../features/employees/employeeSlice";
import Spinner from '../components/Spinner';
import SingleEmployee from "../components/SingleEmployee";
import { BiSad } from 'react-icons/bi';
import { toast } from "react-toastify";
import { deleteEmployees } from "../features/employees/employeeSlice";
import "./Employee.css";
const Employee = () => {
    const { employees, isLoading, isSuccess, isError, message } = useSelector(state => state.employee);
    const { user } = useSelector(state => state.auth);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (!user) {
            navigate('/login');
        }

        dispatch(getEmployee(params.employeeId));
        // eslint-disable-next-line
    }, [isError, message, user, navigate, params.employeeId])


    const deleteAllEmployees = () => {
        dispatch(deleteEmployees());
        setTimeout(() => {
            navigate(0);
        }, 30)
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="bg-gray-200 min-h-screen my-emp">
            <h1 className="text-center pt-16 font-semibold text-4xl text-gray-700">My Employees</h1>
            <div className="text-center add-one-more-emp">
                                <Link to='/add-employee' className="text-xl bg-teal-500 p-3 text-white font-bold rounded hover:opacity-75">Add employee</Link>
                            </div>
            <div className="bg-teal-500 text-teal-500 w-24 h-1 block mx-auto mt-3 rounded-md"></div>
            <div className="gap-6 grid pb-12 justify-center items-center grid-cols-1 container mx-auto mt-12">
                {employees.map(employee => (
                    <SingleEmployee employee={employee} key={employee._id} />
                ))}
                {employees.length === 0 &&
                    (
                        <>
                            <div className="flex items-center justify-center">
                                <p className="text-3xl text-center font-bold rounded-lg mr-2">There is no employees...</p>
                                <BiSad className="text-6xl text-teal-500" />
                            </div>
                            <div className="text-center">
                                <Link to='/add-employee' className="text-xl bg-teal-500 p-3 text-white font-bold rounded hover:opacity-75">Add your first employee</Link>
                            </div>
                        </>
                    )}
                {employees.length > 0 &&
                    (
                        <button className="bg-red-600 block mx-auto rounded text-white font-bold p-2 text-lg mt-2 hover:opacity-75 transition duration-150"
                            onClick={() => deleteAllEmployees()}>
                            Delete All Employees
                        </button>
                    )}
            </div>
        </div>
    )
}

export default Employee;
