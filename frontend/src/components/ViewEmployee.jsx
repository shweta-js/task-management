import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmployee, reset } from "../features/employees/employeeSlice";
import { toast } from "react-toastify";
import { MdDateRange, MdOutlineSubtitles } from 'react-icons/md';
import { FaVoteYea } from 'react-icons/fa';
import Spinner from "../components/Spinner";

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

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="container mx-auto pt-24">
                <div className="shadow-xl w-3/5 mx-auto p-8 border-4 border-teal-400 rounded relative bg-gray-100">
                    <Link to='/my-employees' className="absolute top-3 left-3 bg-slate-300 p-2 rounded text-white font-bold hover:opacity-75">Go Back</Link>
                    <div className="flex flex-wrap justify-center items-center">
                        <h2 className="font-bold text-2xl mr-2">Employee Name</h2>
                        <MdOutlineSubtitles className="fa fa-id-card text-3xl mt-1 text-teal-500 mr-2" />
                        <span className="text-gray-600 text-xl"> {employees.employeeName}</span>
                        {console.log(employees)}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Employee;
