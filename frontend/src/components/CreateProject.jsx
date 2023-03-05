import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"
import { createProject } from "../services/blockchain"
import { useState } from "react"
const CreateProjects = () => {
  const [createModal] = useGlobalState('createModal')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [date, setDate] = useState('')
  const [imageURL, setImageURL] = useState('')

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr)
    return dateObj / 1000
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description || !cost || !date || !imageURL) return

    const params = {
      title,
      description,
      cost,
      expiresAt: toTimestamp(date),
      imageURL,
    }

    await createProject(params)
    toast.success('Project created successfully, will reflect in 30sec.')
    onClose()
    // window.location.reload()
  }

  const onClose = () => {
    setGlobalState('createModal', 'scale-0')
    reset()
  }

  const reset = () => {
    setTitle('')
    setCost('')
    setDescription('')
    setImageURL('')
    setDate('')
  }
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${createModal}`}>
      <div className="bg-white shadow-xl shadow-black rounded-xl-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center"><p className="font-semibold">Add project</p>
          <button
              onClick={onClose}
              type="button"
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
            
            </div>
            
          <div className="flex justify-center items-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
            <img src={
                  imageURL ||
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGfj1Q5Pptp1KEePiW1GwtXi44wRoIb2T6g&usqp=CAU'
                }
           alt="user img" className="h-full w-full object-cover cursor" />
            
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" type="text" step={0.01} min={0.01} name="text" placeholder="Title" 
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" 
            type="number" 
            step={0.01} 
            min={0.01} 
            name="amount" 
            placeholder="Amount (ETH)"
            onChange={(e)=>setCost(e.target.value)}
            value={cost}
            required
            ></input>
          </div>
          
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" 
            type="date"  
            step={0.01} 
            min={0.01} 
            name="date" 
            placeholder="Expires"
            onChange={(e)=>setDate(e.target.value)}
            value={date}
            ></input>
          </div>
          
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" 
            type="url" 
            name="anount" 
            placeholder="User URL"
            onChange={(e)=>setImageURL(e.target.value)
            }
            value={imageURL}></input>
          </div>
          
          <div className="flex justify-between items-center bg-gray-300 rounde-xl mt-5">
            <input className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0" 
            type="text" 
            name="description" 
            placeholder="Description"
            onChange={(e)=>setDescription(e.target.value)}
              value={description}
              required
            ></input>
          </div>
          <button type="submit" className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 mt-5">
            Submit project
          </button>
        </form>

      </div>
    </div>
  )
}

export default CreateProjects
