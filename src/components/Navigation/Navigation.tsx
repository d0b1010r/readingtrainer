import "./Navigation.css";

export function Navigation({
  children,
  onClick,
  active,
}: {
  children?: any;
  onClick?: () => void;
  active: boolean;
}) {
  return (
    <div className="navigation" onClick={onClick}>
      {active ? children : null}
    </div>
  );
}
