import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import GoSureImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import SearchLocationPanel from '../components/SearchLocationPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { SocketContext } from '../context/SocketContext';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeField, setActiveField] = useState(''); // 'pickup' or 'destination'
  const [suggestions, setSuggestions] = useState([]);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRide, setConfirmRidePanel] = useState(false);
  const confirmRideRef = useRef(null);
  const [vehicleFound, setvehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [waitingForDriver, setwaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const [ride, setRide] = useState(null);

  const navigate = useNavigate();

  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    if (user && user._id) {
      socket.emit("join", { userType: "user", userId: user._id });
    }
  }, [user, socket]);

  useEffect(() => {
    // Initial setup of panels - hide them properly
    if (vehiclePanelRef.current) {
      gsap.set(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1
      });
    }
    
    if (confirmRideRef.current) {
      gsap.set(confirmRideRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1
      });
    }
    
    if (vehicleFoundRef.current) {
      gsap.set(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1
      });
    }
    
    if (waitingForDriverRef.current) {
      gsap.set(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1
      });
    }
  }, []);

  socket.on('ride-confirmed', ride => {
    setvehicleFound(false);
    setwaitingForDriver(true);
    setRide(ride);
  });

  socket.on('ride-started', ride => {
    console.log("ride");
    setwaitingForDriver(false);
    navigate('/riding', { state: { ride } });
  });

  const token = localStorage.getItem('token');

  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value);
    setActiveField('pickup');
    if (value.trim().length > 0) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { input: value },
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching pickup suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
    setPanelOpen(true);
  };

  const handleDestinationChange = async (e) => {
    const value = e.target.value;
    setDestination(value);
    setActiveField('destination');
    if (value.trim().length > 0) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { input: value },
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching destination suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
    setPanelOpen(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Searching for a trip');
  };

  useGSAP(() => {
    gsap.to(panelRef.current, {
      duration: 0.3,
      ease: 'power2.out',
      opacity: panelOpen ? 1 : 0,
      height: panelOpen ? '70%' : '0%',
      display: panelOpen ? 'block' : 'none',
      padding: panelOpen ? 24 : 0,
    });
  }, [panelOpen]);

  useGSAP(() => {
    gsap.to(panelCloseRef.current, {
      duration: 0.3,
      ease: 'power2.out',
      opacity: panelOpen ? 1 : 0,
    });
  }, [panelOpen]);

  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(0)',
        visibility: 'visible',
        zIndex: 20
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1,
        onComplete: () => {
          if (confirmRideRef.current) {
            gsap.set(confirmRideRef.current, { visibility: 'hidden', zIndex: -1 });
          }
        }
      });
    }
  }, [confirmRide]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
        visibility: 'visible',
        zIndex: 20
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1,
        onComplete: () => {
          if (vehiclePanelRef.current) {
            gsap.set(vehiclePanelRef.current, { visibility: 'hidden', zIndex: -1 });
          }
        }
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
        visibility: 'visible',
        zIndex: 20
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1,
        onComplete: () => {
          if (vehicleFoundRef.current) {
            gsap.set(vehicleFoundRef.current, { visibility: 'hidden', zIndex: -1 });
          }
        }
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
        visibility: 'visible',
        zIndex: 20
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
        visibility: 'hidden',
        zIndex: -1,
        onComplete: () => {
          if (waitingForDriverRef.current) {
            gsap.set(waitingForDriverRef.current, { visibility: 'hidden', zIndex: -1 });
          }
        }
      });
    }
  }, [waitingForDriver]);

  async function findTrip() {
    setVehiclePanel(true);
    setPanelOpen(false);

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setFare(response.data);
  }

  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    console.log(response); //remove 
  }

  return (
    <div className='relative h-screen overflow-hidden'>
      <img className='bg-auto w-35 absolute top-5' src={GoSureImage} alt="GoSure" />
      <div className="w-full h-3/5 top-0 flex relative items-center justify-center -z-40 object-cover">
        <LiveTracking />
      </div>
      <div className='absolute w-full h-screen flex flex-col justify-end top-0 rounded-t-3xl'>
        <div className='h-[40%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} className='absolute text-3xl top-6 right-6' onClick={() => setPanelOpen(false)}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a Trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute left-10 h-16 w-1 top-[38%] bg-gray-900 rounded-full"></div>
            <input
              className='bg-[#eee] rounded-md px-12 py-2 text-lg w-full mt-5'
              onFocus={() => setPanelOpen(true)}
              value={pickup}
              onChange={handlePickupChange}
              type="text"
              placeholder='Enter a Pick-up location'
            />
            <input
              className='bg-[#eee] rounded-md px-12 py-2 text-lg w-full mt-3 mb-4'
              onFocus={() => setPanelOpen(true)}
              value={destination}
              onChange={handleDestinationChange}
              type="text"
              placeholder='Enter your Destination'
            />
          </form>
          <button
            onClick={findTrip}
            className='bg-green-900 bottom-0 text-white font-semibold text-lg px-4 py-2 rounded-lg w-full'>
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className='bg-white h-0 -mt-14'>
          <SearchLocationPanel
            suggestions={suggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            activeField={activeField}
            setPickup={setPickup}
            setDestination={setDestination}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed bottom-0 px-3 py-10 pt-12 translate-y-full bg-white w-full'>
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
          fare={fare}
          selectVehicle={setVehicleType} />
      </div>
      <div ref={confirmRideRef} className='fixed bottom-0 px-3 py-6 pt-12 translate-y-full bg-white w-full'>
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setvehicleFound={setvehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType} />
      </div>
      <div ref={vehicleFoundRef} className='fixed bottom-0 px-3 py-6 pt-12 translate-y-full bg-white w-full'>
        <LookingForDriver setvehicleFound={setvehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType} />
      </div>
      <div ref={waitingForDriverRef} className='fixed bottom-0 px-3 py-6 pt-12 translate-y-full bg-white w-full'>
        <WaitingForDriver
          ride={ride}
          setvehicleFound={setvehicleFound}
          setwaitingForDriver={setwaitingForDriver}
          waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;