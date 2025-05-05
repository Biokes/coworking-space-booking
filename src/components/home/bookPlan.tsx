
import React, { useState } from 'react';
// import { useToast } from '@/hooks/use-toast';

type DeskType = {
  id: number;
  name: string;
  type: 'individual' | 'team';
  isBooked: boolean;
};

type TierType = 'basic' | 'premium' | 'executive';

const BookPlan = () => {
//   const { toast } = useToast();
  
  const [desks, setDesks] = useState<DeskType[]>(() => {
    const individualDesks = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Desk ${i + 1}`,
      type: 'individual' as const,
      isBooked: [2, 5].includes(i + 1)
    }));
    
    const teamDesks = Array.from({ length: 5 }, (_, i) => ({
      id: i + 11,
      name: `Team ${i + 1}`,
      type: 'team' as const,
      isBooked: [13].includes(i + 11)
    }));
    
    return [...individualDesks, ...teamDesks];
  });
  
  const [selectedDesk, setSelectedDesk] = useState<DeskType | null>(null);
  const [hours, setHours] = useState<number>(1);
  const [tier, setTier] = useState<TierType>('basic');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [bookingPrice, setBookingPrice] = useState<number>(0);
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  
  const handleSelectDesk = (desk: DeskType) => {
    if (!desk.isBooked) {
      setSelectedDesk(desk);
    }
  };
  
  const calculatePrice = (deskType: 'individual' | 'team', tier: TierType, hours: number): number => {
    let hourlyRate = 0;
    
    if (deskType === 'individual') {
      switch (tier) {
        case 'basic':
          hourlyRate = 10;
          break;
        case 'premium':
          hourlyRate = 15;
          break;
        case 'executive':
          hourlyRate = 20;
          break;
      }
    } else {
      hourlyRate = 25;
    }
    
    let totalPrice = hourlyRate * hours;
    
    const discounted = hours > 3;
    setIsDiscounted(discounted);
    
    if (discounted) {
      totalPrice *= 0.9;
    }
    
    return totalPrice;
  };
  
  const handleBookDesk = () => {
    if (!selectedDesk || hours < 1) {
    //   toast({
    //     title: "Error",
    //     description: selectedDesk ? "Booking duration must be at least 1 hour" : "Please select a desk first",
    //     variant: "destructive"
    //   });
      return;
    }
    
    const price = calculatePrice(selectedDesk.type, tier, hours);
    setBookingPrice(price);
    setShowModal(true);
  };
  
  const confirmBooking = () => {
    if (!selectedDesk) return;
    
    setDesks(prevDesks => 
      prevDesks.map(desk => 
        desk.id === selectedDesk.id
          ? { ...desk, isBooked: true }
          : desk
      )
    );
    
    // toast({
    //   title: "Booking Confirmed",
    //   description: `You've successfully booked ${selectedDesk.type === 'individual' ? 'Desk' : 'Team Desk'} ${selectedDesk.id}`,
    // });
    
    setSelectedDesk(null);
    setShowModal(false);
  };
  
  const formatTier = (tier: string) => {
    return tier.charAt(0).toUpperCase() + tier.slice(1);
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-4 text-black">
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-grow">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Floor Plan</h2>
          <p className="text-gray-600 text-sm">Select a desk to book</p>
        </div>
        
        <div className="mb-5">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Individual Desks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
            {desks.filter(desk => desk.type === 'individual').map(desk => (
              <div 
                key={desk.id}
                className={`relative flex flex-col items-center justify-center p-2 transition-all rounded-md border cursor-pointer h-24 ${
                  desk.isBooked 
                    ? 'bg-gray-100 border-gray-300 cursor-not-allowed opacity-50' 
                    : selectedDesk?.id === desk.id
                      ? 'border-2 border-brand-purple bg-brand-purple/10 shadow-md'
                      : 'bg-white border-gray-200 hover:border-primary hover:shadow-md'
                }`}
                onClick={() => handleSelectDesk(desk)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5" width="16" height="10" rx="1" />
                    <line x1="12" y1="15" x2="12" y2="19" />
                    <line x1="8" y1="19" x2="16" y2="19" />
                  </svg>
                  <span className="mt-1 text-xs font-medium">Desk {desk.id}</span>
                </div>
                {desk.isBooked && (
                  <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Team Collaboration Spaces
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {desks.filter(desk => desk.type === 'team').map(desk => (
              <div 
                key={desk.id}
                className={`relative flex flex-col items-center justify-center p-2 transition-all rounded-md border cursor-pointer h-24 ${
                  desk.isBooked 
                    ? 'bg-gray-100 border-gray-300 cursor-not-allowed opacity-50' 
                    : selectedDesk?.id === desk.id
                      ? 'border-2 border-brand-purple bg-brand-purple/10 shadow-md'
                      : 'bg-white border-gray-200 hover:border-primary hover:shadow-md'
                }`}
                onClick={() => handleSelectDesk(desk)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="12" rx="1" />
                    <line x1="12" y1="16" x2="12" y2="19" />
                    <line x1="7" y1="19" x2="17" y2="19" />
                    <circle cx="8.5" cy="10" r="1" />
                    <circle cx="12" cy="10" r="1" />
                    <circle cx="15.5" cy="10" r="1" />
                  </svg>
                  <span className="mt-1 text-xs font-medium">Team {desk.id - 10}</span>
                </div>
                {desk.isBooked && (
                  <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex items-center gap-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-white border border-gray-300 mr-2"></div>
            <span className="text-gray-600">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-brand-purple/20 border border-brand-purple mr-2"></div>
            <span className="text-gray-600">Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-100 border border-gray-300 mr-2"></div>
            <span className="text-gray-600">Booked</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 w-full md:w-80">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            {!selectedDesk
              ? "Please select a desk from the floor plan" 
              : `Selected: ${selectedDesk.type === 'individual' ? 'Individual' : 'Team'} Desk ${selectedDesk.id}`
            }
          </p>
          
          {selectedDesk && (
            <div className={`text-sm font-medium py-1 px-3 rounded-full inline-block ${
              selectedDesk.type === 'individual' ? "bg-brand-purple/20 text-brand-purple" : "bg-blue-100 text-blue-700"
            }`}>
              {selectedDesk.type === 'individual' 
                ? "Individual Workspace" 
                : "Team Collaboration Space"
              }
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
            Duration (hours)
          </label>
          <div className="flex items-center">
            <button 
              type="button"
              className="p-2 bg-gray-100 rounded-l-md border border-r-0 border-gray-300"
              onClick={() => setHours(Math.max(1, hours - 1))}
            >
              -
            </button>
            <input
              type="number"
              id="hours"
              min="1"
              value={hours}
              onChange={(e) => setHours(Math.max(1, Number(e.target.value)))}
              className="p-2 w-16 text-center border border-gray-300"
            />
            <button 
              type="button"
              className="p-2 bg-gray-100 rounded-r-md border border-l-0 border-gray-300"
              onClick={() => setHours(hours + 1)}
            >
              +
            </button>
          </div>
          {hours > 3 && (
            <p className="text-sm text-green-600 mt-1">
              10% discount applied for bookings over 3 hours!
            </p>
          )}
        </div>
        
        {(!selectedDesk || selectedDesk.type === 'individual') && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Membership Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className={`p-2 border rounded-md text-center text-sm transition-all ${
                  tier === 'basic' 
                    ? "border-brand-purple bg-brand-purple/10 text-brand-purple" 
                    : "border-gray-200 hover:border-brand-purple"
                }`}
                onClick={() => setTier('basic')}
              >
                <div className="font-medium">Basic</div>
                <div className="text-xs mt-1">$10/hour</div>
              </button>
              <button
                type="button"
                className={`p-2 border rounded-md text-center text-sm transition-all ${
                  tier === 'premium' 
                    ? "border-brand-purple bg-brand-purple/10 text-brand-purple" 
                    : "border-gray-200 hover:border-brand-purple"
                }`}
                onClick={() => setTier('premium')}
              >
                <div className="font-medium">Premium</div>
                <div className="text-xs mt-1">$15/hour</div>
              </button>
              <button
                type="button"
                className={`p-2 border rounded-md text-center text-sm transition-all ${
                  tier === 'executive' 
                    ? "border-brand-purple bg-brand-purple/10 text-brand-purple" 
                    : "border-gray-200 hover:border-brand-purple"
                }`}
                onClick={() => setTier('executive')}
              >
                <div className="font-medium">Executive</div>
                <div className="text-xs mt-1">$20/hour</div>
              </button>
            </div>
          </div>
        )}
        
        {selectedDesk && selectedDesk.type === 'team' && (
          <div className="mb-4 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-700">
              Team desk pricing: <span className="font-semibold">$25/hour</span>
            </p>
          </div>
        )}
        
        <button
          type="button"
          disabled={selectedDesk === null}
          onClick={handleBookDesk}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            selectedDesk === null
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-brand-purple hover:bg-brand-purple-dark"
          }`}
        >
          Book Now
        </button>
      </div>
      
      {showModal && selectedDesk && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Confirm Your Booking</h3>
              <p className="text-gray-500 mt-1">Please review your booking details</p>
            </div>

            <div className="border-t border-b border-gray-100 py-4 mb-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Desk Type:</span>
                <span className="font-medium">
                  {selectedDesk.type === 'individual' ? 'Individual Desk' : 'Team Collaboration Desk'}
                </span>
              </div>
              
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Desk Number:</span>
                <span className="font-medium">{selectedDesk.id}</span>
              </div>
              
              {selectedDesk.type === 'individual' && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Membership:</span>
                  <span className="font-medium">{formatTier(tier)}</span>
                </div>
              )}
              
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{hours} {hours === 1 ? 'hour' : 'hours'}</span>
              </div>
              
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Rate:</span>
                <span className="font-medium">
                  ${selectedDesk.type === 'individual' 
                    ? tier === 'basic' ? '10' : tier === 'premium' ? '15' : '20'
                    : '25'}/hour
                </span>
              </div>
              
              {isDiscounted && (
                <div className="flex justify-between py-2 text-green-600">
                  <span>Discount:</span>
                  <span>10% (3+ hours)</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Total:</span>
              <div className="text-right">
                {isDiscounted && (
                  <span className="text-sm text-gray-500 line-through mr-2">
                    ${(bookingPrice / 0.9).toFixed(2)}
                  </span>
                )}
                <span className="text-lg font-bold">${bookingPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-4 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="py-2 px-4 rounded-md bg-brand-purple text-white font-medium hover:bg-brand-purple-dark flex-1"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookPlan;
