import { motion } from "framer-motion";

interface IButton {
  primary?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  onclick?: () => void;
}

const Button = ({
  primary,
  secondary,
  modifier,
  children,
  onclick,
  ...rest
}: IButton) => {
  const baseStyle = `font-Inter font-medium py-2 px-4 border rounded display: flex padding: 15px 30px justify-content: center items-center gap: 10px`;

  const styles = primary
    ? `bg-green text-white border-green `
    : secondary
      ? `bg-white text-green border-green `
      : `bg-light-green text-green border-light-green `;

  return (
    <motion.button
      type="button"
      onClick={onclick}
      className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
