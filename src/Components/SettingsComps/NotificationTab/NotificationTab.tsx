import * as React from 'react';
import { useState } from "react";
import { Switch } from "@mui/material";


interface SwitchesState {
  message: boolean;
  taskUpdate: boolean;
  taskDeadline: boolean;
  mentorHelp: boolean;
}

const NotificationTab = () => {
  const [switches, setSwitches] = useState<SwitchesState>({
    message: true,
    taskUpdate: false,
    taskDeadline: true,
    mentorHelp: false,
  });

  const handleClick = (name: keyof SwitchesState) => {
    setSwitches((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="flex flex-col gap-4">
      {[
        { name: "message", label: "Message" },
        { name: "taskUpdate", label: "Task Update" },
        { name: "taskDeadline", label: "Task Deadline" },
        { name: "mentorHelp", label: "Mentor Help" },
      ].map(({ name, label }) => (
        <div key={name} className="mt-5! flex items-center gap-3">
          <Switch
            checked={switches[name as keyof SwitchesState]}
            onChange={() => handleClick(name as keyof SwitchesState)}
          />
          <span
            className="ms-2 cursor-pointer"
            onClick={() => handleClick(name as keyof SwitchesState)}
          >
            {label}
          </span>
        </div>
      ))}

      <button className='bg-[#546FFF] w-full sm:w-[216px] mt-12! rounded-xl p-3! text-white font-semibold hover:bg-[#546effdf] cursor-pointer transition delay-75 ease-in-out'>Save Changes</button>
    </div>
  );
};

export default NotificationTab;
