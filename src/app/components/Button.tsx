import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  type: "navigation" | "action";
  href?: string;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export default function Button({
  label,
  type,
  href,
  className,
  onClick,
  icon,
}: ButtonProps) {
  const baseStyles =
    "border shadow-[3px_3px_0_0_#000000] px-3.5 py-1.5 uppercase cursor-pointer transition-all duration-150 ease-in-out active:shadow-[0px_0px_0_0_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px]";
  const finalStyles = `${baseStyles} ${className}`;

  const buttonContent = icon ? (
    <span className='flex items-center gap-2'>
      {icon && <span>{icon}</span>}
      {label}
    </span>
  ) : (
    <span className='text-center'>{label}</span>
  );

  if (type === "navigation" && href) {
    return (
      <Link href={href}>
        <button className={finalStyles}>{buttonContent}</button>
      </Link>
    );
  }
  if (type === "action" && onClick) {
    return (
      <button onClick={onClick} className={finalStyles}>
        {buttonContent}
      </button>
    );
  }
  return null;
}
