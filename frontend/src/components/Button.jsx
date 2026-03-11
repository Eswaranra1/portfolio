import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900',
  ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  external,
  icon: Icon,
  className = '',
  ...props
}) => {
  const isExternalUrl = href?.startsWith('http');
  const useExternal = external ?? isExternalUrl;
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${variants[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    const shouldDownload = download && !useExternal;
    return (
      <motion.a
        href={href}
        target={useExternal ? '_blank' : undefined}
        rel={useExternal ? 'noopener noreferrer' : undefined}
        download={shouldDownload ? (typeof download === 'string' ? download : true) : undefined}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
