import React from 'react'

const SearchLocationPanel = (props) => {
    // console.log(prop);
    const locations = [
        "Sector-2 National Institute of Technology , Rourkela",
        "Sector-4 Ion digital center , Rourkela",
        "Sector-1 Sector lcoal market  , Rourkela",
        "Sector-8 Birsa Hockey Stadium , Rourkela"
    ]
  return (
    <div>
        {
            locations.map(function(ele ,idx){
            return <div key={idx} onClick={()=>{
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }} className='flex  p-3 border-2 rounded-xl shadow-md shadow-gray-500 border-gray-100 active:border-black  items-center justify-evenly gap-4 m-4'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i class="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{ele}</h4>
            </div>})
        }
        
    </div>
  )
}

export default SearchLocationPanel

