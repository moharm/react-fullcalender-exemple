export interface themeTypes {
  syntax?: string;
  ui?: string;
  bg?: string;
}

export interface BookTypes {
  title: string;
  author: string;
  id: string;
  key: string;
}

export interface ArrayOfBooks {
  books: Array<BookTypes>;
}

export interface BookDetailPropsTypes {
  book: BookTypes;
  key: string;
}

export interface AuthContaxtTypes {
  isAuthentificated: boolean;
  userName: string;
  password: string;
  errors: string;
  token: string;
  toggeleAuth: () => void;
  Login: (arg0: any, arg1: string) => void;
  Logout: (arg0: any) => void;
  onChange: (arg0: any) => void;
}
