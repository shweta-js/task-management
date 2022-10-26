// import { useDispatch } from 'react-redux';
// import { deleteEmployee } from '../features/employees/employeeSlice';
// import { AiOutlineCheck } from 'react-icons/ai';
// import { CgClose } from 'react-icons/cg';
// import Rating from './Rating';
// import { Link } from 'react-router-dom';

// const SingleEmployee = ({employee}) => {
//     const dispatch = useDispatch();

//     const deleteTemp = (id) => {
//         dispatch(deleteEmployee(id));
//         setTimeout(() => {
//             window.location.reload();
//         }, 30)
//     }

//     return (
//         <div className="rounded-lg shadow-xl px-12 py-8 flex flex-col mx-20 relative w-2/3 justify-self-center bg-gray-100">
//             <div className='flex flex-row items-center'>
//                 <h1 className="text-gray-600 text-2xl font-semibold">{employee._id}</h1>
//                 <AiOutlineCheck className='text-3xl ml-2 font-bold text-teal-500' />
//             </div>
            
//             <div className='flex items-center justify-between'>
                
//                 <Link to={`/employees/${employee._id}`} className='bg-teal-500 text-white rounded-md px-4 py-2 font-bold hover:opacity-80 transition duration-200'>View More</Link>
//             </div>
//             <div className='absolute top-4 right-3'>
//                 <CgClose onClick={() => deleteTemp(employee._id)} className='text-3xl text-red-600 font-bold cursor-pointer hover:opacity-70' />
//             </div>
//         </div>
//     )
// }

// export default SingleEmployee;


import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeeSlice';
import { AiOutlineCheck } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import employeeService from '../features/employees/employeeService';

const SingleEmployee = ({ employee}) => {
    const dispatch = useDispatch();

 


    const deleteTemp = (id) => {
        dispatch(deleteEmployee(id));
        setTimeout(() => {
            window.location.reload();
        }, 30)
    }






    return (
        <div className="rounded-lg shadow-xl px-12 py-8 flex flex-col mx-20 relative w-2/3 justify-self-center bg-gray-100">
            <div className='flex flex-row items-center'>
                <h1 className="text-gray-600 text-2xl font-semibold">{employee.employeeName}</h1>
                <AiOutlineCheck className='text-3xl ml-2 font-bold text-teal-500' />
            </div>
         
          
            <div className='absolute top-4 right-3'>
                <CgClose onClick={() => deleteTemp(employee._id)} className='text-3xl text-red-600 font-bold cursor-pointer hover:opacity-70' />
            </div>
        </div>
    )
}

export default SingleEmployee;
