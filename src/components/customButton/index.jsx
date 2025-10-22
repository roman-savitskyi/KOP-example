import './index.css';

function CustomButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export { CustomButton };