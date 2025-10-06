import React from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MenuImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  description?: string;
}

const MenuImageModal: React.FC<MenuImageModalProps> = ({ isOpen, onClose, title, imageSrc, description }) => {
  console.log("MenuImageModal rendered with isOpen:", isOpen, "title:", title, "imageSrc:", imageSrc, "description:", description);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 overflow-hidden rounded-xl">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="text-xl font-bold text-foreground">{title}</DialogTitle>
          <button onClick={onClose} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
          </button>
        </DialogHeader>
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
        {description && (
          <div className="p-4 text-sm text-muted-foreground border-t bg-white/80 backdrop-blur-sm">
            {description}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MenuImageModal;
