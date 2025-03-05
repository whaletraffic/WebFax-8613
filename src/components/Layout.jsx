import { Link, Outlet } from 'react-router-dom';
import { FaFax, FaInbox, FaHistory } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <FaFax className="h-6 w-6 text-primary-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">FastFax</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/send" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                  <IoMdSend className="mr-1" /> Send Fax
                </Link>
                <Link to="/inbox" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                  <FaInbox className="mr-1" /> Inbox
                </Link>
                <Link to="/history" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                  <FaHistory className="mr-1" /> History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}