export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-16 py-14 max-w-7xl mx-auto">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="cursor-pointer hover:underline">How Airbnb works</p>
          <p className="cursor-pointer hover:underline">Newsroom</p>
          <p className="cursor-pointer hover:underline">Investors</p>
          <p className="cursor-pointer hover:underline">Airbnb Plus</p>
          <p className="cursor-pointer hover:underline">Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className="cursor-pointer hover:underline">Accessibility</p>
          <p className="cursor-pointer hover:underline">
            This is not a real site
          </p>
          <p className="cursor-pointer hover:underline">
            It's a pretty awesome clone
          </p>
          <p className="cursor-pointer hover:underline">Referrals accepted</p>
          <p className="cursor-pointer hover:underline">Travel Booking</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p className="cursor-pointer hover:underline">Host your home</p>
          <p className="cursor-pointer hover:underline">Host an experience</p>
          <p className="cursor-pointer hover:underline">Responsible hosting</p>
          <p className="cursor-pointer hover:underline">Resource Center</p>
          <p className="cursor-pointer hover:underline">Community Center</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p className="cursor-pointer hover:underline">Help Center</p>
          <p className="cursor-pointer hover:underline">Trust & Safety</p>
          <p className="cursor-pointer hover:underline">Neighborhood Support</p>
          <p className="cursor-pointer hover:underline">Cancellation options</p>
          <p className="cursor-pointer hover:underline">Contact Us</p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5">
        <p className="text-center text-xs text-gray-500">
          © 2023 Airbnb Clone - This is a demo site for educational purposes
          only
        </p>
      </div>
    </footer>
  );
}
