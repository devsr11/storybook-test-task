import { Space } from "antd";
import { FireIcon } from "./Icons/FireIcon";
import { ReactNode } from "react";
import { PlusIcon } from "./Icons/PlusIcon";
import {
  CounterLabel,
  Label,
  StyledButton,
} from "./components/ButtonComponents";
import "./Button.scss";
import { FontSizes } from "./utils/constant";

interface ButtonProps {
  backgroundColor?: string;
  type?: "primary" | "dashed" | "text" | "link" | "default";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "simple" | "circle" | "round";
  label: string;
  target?: string;
  href?: string;
  htmlType?: string;
  isIconShow?: boolean;
  loading?: boolean | { delay: number };
  danger?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  ghost?: boolean;
  color?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "md",
  type = "primary",
  backgroundColor = "#5850EC",
  htmlType = "button",
  label,
  color = "#fff",
  isIconShow,
  danger,
  shape,
  ...props
}: ButtonProps) => {
  if (isIconShow) {
    props = {
      ...props,
      icon: (
        <FireIcon
          color={danger ? "#ff4d4f" : color}
          height={FontSizes[size]}
          width={(Number(FontSizes[size]) - 2).toString()}
        />
      ),
    };
  }
  return (
    <Space>
      <StyledButton
        shape={
          shape === "circle"
            ? "round"
            : shape === "round"
            ? "default"
            : undefined
        }
        className={`button-with-text-${size}`}
        type={type}
        style={{
          backgroundColor,
          borderRadius: shape === "simple" ? "0" : "",
        }}
        {...props}
      >
        <Label className="label" color={danger ? "#ff4d4f" : color}>
          {label}
        </Label>
        <CounterLabel
          style={{
            color: danger ? "#ff4d4f" : "",
            marginRight: isIconShow ? 8 : 0,
          }}
          className="label"
        >
          / 02
        </CounterLabel>
        {isIconShow ? (
          <FireIcon
            color={danger ? "#ff4d4f" : color}
            height={FontSizes[size]}
            width={(Number(FontSizes[size]) - 2).toString()}
          />
        ) : (
          ""
        )}
      </StyledButton>
      <StyledButton
        shape={
          shape === "circle" ? shape : shape === "round" ? "default" : undefined
        }
        type={type}
        className={`button-with-icon-${size}`}
        style={{ backgroundColor, borderRadius: shape === "simple" ? "0" : "" }}
        {...props}
        icon={
          <PlusIcon
            color={danger ? "#ff4d4f" : color}
            height={FontSizes[size]}
            width={(Number(FontSizes[size]) - 2).toString()}
          />
        }
      />
    </Space>
  );
};
