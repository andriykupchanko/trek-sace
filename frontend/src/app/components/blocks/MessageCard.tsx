"use client";

import React from "react";

interface MessageCardProps {
  title: string;
  description: string;
  dateMsg: Date;
  timeMsg: string;
}

const MessageCard: React.FC<MessageCardProps> = ({ title, description, dateMsg, timeMsg }) => {
  const formattedDate = dateMsg.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  const formattedTime = new Date(`1970-01-01T${timeMsg}Z`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-slate-500 justify-between p-2 rounded-md">
    <div className="flex">
      <h2 className="w-2/5">{title}</h2>
      <div className="flex w-3/5">
        <p className="ml-5 mr-2">{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
    </div>
    <p className="bg-slate-400 text-slate-300 p-2 m-2 rounded-md">{description}</p>
    </div>
  );
};

export default MessageCard;