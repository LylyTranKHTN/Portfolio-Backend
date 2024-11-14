export interface ThemeDTO {
  id: string;
  name: string;
  title: string;
  description: string;
  value: string;
}

export interface ThemeUpdateParams {
  id: string;
  value: string;
}
