import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

interface QuantityInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseInt(e.target.value, 10);
    if (!isNaN(newVal) && newVal >= 0) {
      onChange(newVal);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        size="sm"
        variant="outline"
        onClick={() => onChange(Math.max(value - 1, 0))}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <input
        type="number"
        min={0}
        max={999}
        value={value}
        onChange={handleInputChange}
        className="w-16 text-center border rounded-md py-1"
      />

      <Button
        size="sm"
        className="elbaroma-gradient text-white"
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default QuantityInput;
