import { motion } from "framer-motion";

export const LocationLabel = ({
  top,
  left,
  label,
  lineHeight = 40,
}: {
  top: string;
  left: string;
  label: string;
  lineHeight?: number;
}) => {
  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ top, left, transform: "translate(-50%, -100%)" }}
    >
      <span className="text-xs md:text-sm font-medium text-white mb-1">
        {label}
      </span>

      <motion.div
        className="w-[1px] bg-[#F8B21F]"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: lineHeight, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <motion.div
        className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#F8B21F] rounded-full mt-0 "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 0.8, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }} // نفس مدة الخط
      />
    </div>
  );
};
