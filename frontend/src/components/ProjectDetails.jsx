const ProjectDetails = () => {
  return (
    <div className="py-24 px-6">
        <div >
        <div className="flex justify-start items-start sm:space-x-4 flex-wrap">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGfj1Q5Pptp1KEePiW1GwtXi44wRoIb2T6g&usqp=CAU" alt="user img" className="rounded-xl h-64 w-full sm:w-1/6 object-cover" />
            
            <div className="flex-1 sm:py-0 py-4">
                <div className="flex flex-col justify-start flex-wrap">
                    <h5 className="text-gray-900 text-sm font-medium mb-2">Lending some money so that I earn more!</h5>
                    <small className="text-gray-500">3 days left</small>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start space-x-2">
                        <small className="text-gray-700">0x9e...13af</small>
                        <small className="text-gray-500 font-bold">{16} Backings</small>
                    </div>
                </div>
                <div className="font-bold">
                    <small className="text-gray-500">Open</small>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectDetails