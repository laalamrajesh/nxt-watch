export interface Theme {
    background: string;
    text: string;
    inputBorder: string;
    buttonBackground: string;
    errorText: string;
  }
  
  export const lightTheme: Theme = {
    background: '#fff',
    text: '#000',
    inputBorder: '#ccc',
    buttonBackground: '#4f46e5',
    errorText: '#ff0b37',
  };
  
  export const darkTheme: Theme = {
    background: '#181818',
    text: '#fff',
    inputBorder: '#666',
    buttonBackground: '#2563eb',
    errorText: '#ff0b37',
  };
  