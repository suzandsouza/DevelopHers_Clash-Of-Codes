import Identicons from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'
import { setGlobalState } from '../store'
const ProjectDetails = () => {
  return (
    <div className="py-24 px-6 justify-center">
        <div className='justify-center items-center flex-col md:2/3'>
        <div className="flex justify-start items-start sm:space-x-4 flex-wrap">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGfj1Q5Pptp1KEePiW1GwtXi44wRoIb2T6g&usqp=CAU" alt="user img" className="rounded-xl h-64 w-full sm:w-1/6 object-cover" />
            
            <div className="flex-1 sm:py-0 py-4">
                <div className="flex flex-col justify-start flex-wrap">
                    <h5 className="text-gray-900 text-sm font-medium mb-2">Lending some money so that I earn more!</h5>
                    <small className="text-gray-500">3 days left</small>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start items-center w-full pt-1">
                    <Identicons className="rounded-full shadow-md" string="0x9e...13af" size={15}/>
                        <small className="text-gray-700">0x9e...13af</small>
                        <small className="text-gray-500 font-bold">{16} Backings</small>
                    </div>
                </div>
                <div className="font-bold">
                    <small className="text-gray-500">Open</small>
                </div>
            </div>
        </div>
        <p className='text-sm font-light mt-2'>
            Lorem ipsem dolor site Lorem ipsem dolor siteLorem ipsem dolor siteLorem ipsem dolor sitevLorem ipsem dolor siteLorem ipsem dolor sitevvLorem ipsem dolor site
        </p>
        <div className='w-full bg-gray-300 mt-4'>
            <div className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full' style={{width: '100%'}}></div>
        </div>
        
        <div className='flex justify-between items-center font-bold mt-2'>
            <small>{3}ETH </small>
            <small className='flex justify-start items-center'>
            <FaEthereum />
                <span>{10} ETH</span>
            </small>
            
        </div>
        <div className='flex justify-start items-center space-x-2 mt-4'>
        {/* <button type='button' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-700'>Lend Your Money</button> */}
        
        <button type='button' className='inline-block px-6 py-2.5 border border-blue-600
        font-medium text-lg leading-tight uppercase text-blue-600
        rounded-full shadow-md bg-transparent hover:bg-blue-700
        hover:text-white'>Borrow From Lenders</button>

<button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-gray-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-gray-700"
                          onClick={() =>
                            setGlobalState('updateModal', 'scale-100')
                          }
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-red-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-red-700"
                          
                        >
                          Delete
                        </button>
                        <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-gray-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-gray-700"
                      >
                        Project Closed
                      </button>
        </div>
        </div>
    </div>
  )
}

export default ProjectDetails