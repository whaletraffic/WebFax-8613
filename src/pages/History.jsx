import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function History() {
  const history = [
    {
      id: 1,
      type: 'sent',
      to: '+1 (555) 123-4567',
      date: new Date(),
      status: 'delivered'
    },
    {
      id: 2,
      type: 'received',
      from: '+1 (555) 987-6543',
      date: new Date(Date.now() - 86400000),
      status: 'success'
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
          <h2 className="text-2xl font-semibold text-gray-900">Fax History</h2>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {history.map((item) => (
              <li key={item.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.type === 'sent' ? `To: ${item.to}` : `From: ${item.from}`}
                    </p>
                    <p className="text-sm text-gray-500">
                      {format(item.date, 'PPpp')}
                    </p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === 'delivered' || item.status === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
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