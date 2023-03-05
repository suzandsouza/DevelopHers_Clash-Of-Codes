import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"
const DeleteProjects = () => {
  const [deleteModal] = useGlobalState('deleteModal')
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${deleteModal}`}>
      <div className="bg-white shadow-xl shadow-black rounded-xl-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col">
          <div className="flex justify-between items-center"><p className="font-semibold">Add project</p>
          <button type="button" className="border-0 bg-transparent focus:outline-none " onClick={()=>setGlobalState('deleteModal','scale-0')}>
<FaTimes />
          </button></div>
          <div className="flex justify-center items-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGfj1Q5Pptp1KEePiW1GwtXi44wRoIb2T6g&usqp=CAU" alt="user img" className="h-full w-full object-cover cursor" />
            
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" type="number" step={0.01} min={0.01} name="anount" placeholder="0.02"></input>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" type="number" step={0.01} min={0.01} name="amount" placeholder="Amount (ETH)"></input>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" type="date"  step={0.01} min={0.01} name="date" placeholder="Amount (ETH)"></input>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" type="url" step={0.01} min={0.01} name="anount" placeholder="User URL"></input>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" type="text" step={0.01} min={0.01} name="description" placeholder="Description"></input>
          </div>
          <button type="submit" className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 mt-5">
            Submit project
          </button>
        </form>

      </div>
    </div>
  )
}

export default DeleteProjects
