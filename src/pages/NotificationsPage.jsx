import Sidebar from '../components/Sidebar'
import { useState } from "react";
import { FaBell } from "react-icons/fa";

const notificationsData = [
  { id: 1, message: "New restaurant added to the platform.", time: "2 hours ago" },
  { id: 2, message: "Subscription renewed for XYZ Restaurant.", time: "1 day ago" },
  { id: 3, message: "User feedback received on order tracking.", time: "3 days ago" },
  { id: 4, message: "System update scheduled for next week.", time: "5 days ago" },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsData);

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
      <Sidebar/>
      <div className="mt-10 lg:ml-64">
      <h1 className="text-2xl font-bold text-[#000000] mb-4 flex items-center gap-2">
        <FaBell /> Notifications
      </h1>
      
      <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md w-full">
        {notifications.length > 0 ? (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="p-4 border-b last:border-b-0 flex justify-between"
              >
                <span>{notification.message}</span>
                <span className="text-[#000000] text-sm">{notification.time}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[#000000]">No new notifications</p>
        )}
      </div>
      </div>
    </div>
  );
}
