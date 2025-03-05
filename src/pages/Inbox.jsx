import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaDownload, FaTrash } from 'react-icons/fa';

export default function Inbox() {
  const faxes = [
    {
      id: 1,
      from: '+1 (555) 123-4567',
      date: new Date(),
      pages: 2,
      status: 'received'
    },
    {
      id: 2,
      from: '+1 (555) 987-6543',
      date: new Date(Date.now() - 86400000),
      pages: 1,
      status: 'received'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow sm:rounded-lg"
      >
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">Inbox</h2>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {faxes.map((fax) => (
              <li key={fax.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">From: {fax.from}</p>
                    <p className="text-sm text-gray-500">
                      {format(fax.date, 'PPpp')} • {fax.pages} pages
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-primary-600 hover:text-primary-700">
                      <FaDownload className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <FaTrash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}