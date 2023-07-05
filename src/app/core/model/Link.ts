import { AccessType } from "./AccessType";

export interface Link {
  name: string;
  path: string;
  icon: string;
  isNative: boolean;
  access: AccessType;
}
