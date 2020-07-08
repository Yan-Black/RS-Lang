export interface User {
  name: string;
  email: string;
  password: string;
}

export interface RegProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export interface LogProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRegOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
