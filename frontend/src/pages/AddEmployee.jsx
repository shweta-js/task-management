import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEmployee, reset } from "../features/employees/employeeSlice";
import { toast } from 'react-toastify';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        employeeName: ''
    })

    const { employeeName } = formData;
    const { user } = useSelector(state => state.auth);
    const { isSuccess, isError, message } = useSelector(state => state.employee);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }

        if (isError) {
            toast.error(message);
        }

        dispatch(reset());
    }, [user, navigate, isError, message, isSuccess])

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
       
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!employeeName) {
            toast.error('something went wrong in add employee module');
        } else {
            const employeeData = {
                employeeName
            }

            dispatch(createEmployee(employeeData));
            toast.success('New employee created');

            setFormData({
                employeeName: ''
            })
        }
    }

    return (
        <div className='flex justify-center min-h-screen bg-gray-200'>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl h-3/4 mt-20'>
                <div className='max-w-md mx-auto space-y-6'>
                    <form onSubmit={onSubmit}>
                        <h2 className="text-2xl font-bold ">Add new employee</h2>
                        <p className="my-4 opacity-70">Add a new employee to help you keep track of your responsibilities and improve your organization.</p>
                        <hr className="my-4" />
                        <label className="uppercase text-sm font-bold opacity-70">Name</label>
                        <input type="text" className="p-1 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                            value={employeeName}
                           onChange={onChange}
                           //   onChange={(e) => setFormData(e.target.value)}
                            name="employeeName"
                            required
                        />
                           <button type="submit" className="mt-3 mx-auto block px-4 py-2 rounded-md bg-teal-500 text-white font-bold">Save</button>
                   
                      </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;




