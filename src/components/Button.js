export function Button({ children, ...props }) {
  const { className, ...rest } = props;
  return (
    <button className={`common-button ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
}
