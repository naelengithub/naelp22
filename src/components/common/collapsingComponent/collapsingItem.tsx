import * as React from "react";

export interface CollapsingItemProps {
  className?: string;
  children: React.ReactNode;
  subject: string;
}

/**
 * @name CollapsingItem
 * @description Content that expands inside an Collapsing.
 */
export const CollapsingItem = (props: CollapsingItemProps) => {
  const { className, children, subject } = props;

  // Hooks
  const [isSelected, setIsSelected] = React.useState(false);

  // Handlers
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <h2>{subject}</h2>
      </div>
      <div>{isSelected ? children : null}</div>
    </div>
  );
};
