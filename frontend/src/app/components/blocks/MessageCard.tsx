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
    <div className="bg-[#20315C] justify-between p-2 rounded-md">
 
    </div>
  );
};

export default MessageCard;