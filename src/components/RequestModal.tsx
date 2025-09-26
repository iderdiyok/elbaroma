import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RequestForm from "./RequestForm";

interface RequestModalProps {
  open: boolean;
  onClose: () => void;
  eventType?: string;
}

const RequestModal: React.FC<RequestModalProps> = ({ open, onClose, eventType }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Anfrage für {eventType}</DialogTitle>
        </DialogHeader>
        <RequestForm defaultEventType={eventType} onSubmitted={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default RequestModal;
