import React from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EventDetailModalProps {
  open: boolean;
  onClose: () => void;
  event: {
    title: string;
    description: string;
    date: string;
    participants: string;
    category: string;
    icon: React.ElementType;
  } | null;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ open, onClose, event }) => {
  if (!event) return null;
  const Icon = event.icon;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <div className="p-8 max-w-lg mx-auto bg-cyber-card rounded-2xl shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-full bg-gradient-cyber">
            <Icon className="h-8 w-8 text-cyber-green" />
          </div>
          <h2 className="text-3xl font-bold text-cyber-green">{event.title}</h2>
        </div>
        <p className="text-lg text-cyber-light mb-4">{event.description}</p>
        <div className="flex gap-8 mb-4">
          <div className="flex items-center gap-2 text-cyber-lightgreen">
            <span className="font-bold">Date:</span> {event.date}
          </div>
          <div className="flex items-center gap-2 text-cyber-lightgreen">
            <span className="font-bold">Participants:</span> {event.participants}
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-cyber-green">Category:</span> {event.category}
        </div>
        <Button onClick={onClose} className="mt-4 bg-cyber-green text-white">Close</Button>
      </div>
    </Dialog>
  );
};

export default EventDetailModal;
