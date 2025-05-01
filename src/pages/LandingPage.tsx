import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Card Preview Image */}
        <div className="w-full aspect-[1200/630] relative">
          <img
            src="/cardpreview.png"
            alt="Equinology Digital Agency"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Bio Text */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Equinology Digital Agency
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A Digital Agency for all businesses, specialising in web design and software engineering
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 