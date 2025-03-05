import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SendFax from './pages/SendFax';
import Inbox from './pages/Inbox';
import History from './pages/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SendFax />} />
          <Route path="send" element={<SendFax />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;