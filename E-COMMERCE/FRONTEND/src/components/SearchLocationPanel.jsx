import React from 'react';

const SearchLocationPanel = (props) => {
  const {
    suggestions,
     //setPanelOpen,
    // setVehiclePanel,
    activeField,
    setPickup,
    setDestination,
  } = props;

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion);
    } else if (activeField === 'destination') {
      setDestination(suggestion);
    }
    //setPanelOpen(false);
    // Optionally show next panel
    //setVehiclePanel(true);
  };

  return (
    <div >
      {suggestions && suggestions.length > 0 ? (
        suggestions.map((suggestion, idx) => (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(suggestion)}
            className='flex p-3 border-2 rounded-xl shadow-md shadow-gray-500 border-gray-100 active:border-black items-center justify-evenly gap-4 m-4'
          >
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'>
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium'>{suggestion}</h4>
          </div>
        ))
      ) : (
        <p className='p-3 text-center text-gray-500 '></p>
      )}
    </div>
  );
};

export default SearchLocationPanel;