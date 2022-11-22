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
    <div
      className={[
        "navigation-container",
        active && "navigation-container--active",
      ]
        .filter((x) => x)
        .join(" ")}
      onClick={onClick}
    >
      <div className="navigation">{children}</div>
    </div>
  );
}
