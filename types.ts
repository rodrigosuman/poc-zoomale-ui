import { CSSProperties } from "react";

export interface BaseData {
  title: string;
  background?: string;
  color?: string;
  id: string;
  nested?: BaseData[];
  style?: CSSProperties;
}
