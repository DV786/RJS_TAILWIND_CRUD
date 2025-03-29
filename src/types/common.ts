export interface User {
  username: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (username: string, email: string, password: string) => boolean;
  logout: () => void;
}
