export interface IUpdateProfile {
  username?: string,
  name: string;
  avatar?: string;
  local?: string;
  sex?: number
  weight: number;
  height: number;
  body_type?: string;
  birthday_year?: number;
  birthday_month?: number;
}

export interface IProfile {
  avatar: string;
  birthday_month: number;
  birthday_year: number;
  body_type: string;
  email: string;
  height: number;
  id: string;
  local: string;
  name: string;
  sex: number;
  stars: number;
  username: string,
  weight: number;
  group?: string;
}