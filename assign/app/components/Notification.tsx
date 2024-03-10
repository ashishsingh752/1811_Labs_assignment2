import React from "react";
import { ClearButton } from "./Button";

interface NotificationsProps {}

const Notifications: React.FC<NotificationsProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-semibold">Notification</h1>
          </div>
          <div className="flex ml-auto">
            <ClearButton />
          </div>
        </div>
        <br />
        <hr />
        <br />

        <div className="flex flex-col gap-4">
          {/* Notification 1 */}
          <div className="flex flex- items-center">
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facere dolore veniam culpa quas debitis a similique odio beatae
              nihil?
              <p className="mt-1">Date1</p>
            </label>
          </div>
          <hr />
          {/* Notification 2 */}
          <div className="flex flex- items-center">
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facere dolore veniam culpa quas debitis a similique odio beatae
              nihil?
              <p className="mt-1">Date2</p>
            </label>
          </div>
          <hr />
          {/* Notification 3 */}
          <div className="flex flex- items-center">
            <label
              htmlFor="displayName"
              className="text-sm text-gray-500 font-"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facere dolore veniam culpa quas debitis a similique odio beatae
              nihil?
              <p className="mt-1">Date3</p>
            </label>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
