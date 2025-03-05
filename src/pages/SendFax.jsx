import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileUpload } from 'react-icons/fa';

export default function SendFax() {
  const [recipient, setRecipient] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle fax sending logic here
    console.log('Sending fax to:', recipient, 'with file:', file);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow sm:rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Fax</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
              Recipient Fax Number
            </label>
            <input
              type="tel"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="+1 (555) 555-5555"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Document</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <FaFileUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files[0])}
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX, PNG, or JPG up to 10MB</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Send Fax
          </button>
        </form>
      </motion.div>
    </div>
  );
}