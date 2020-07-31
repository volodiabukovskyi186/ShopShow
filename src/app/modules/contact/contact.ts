export interface ContactUs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Callback {
  name: string;
  phone: string;
}

export interface Arrdess {
  lat: number;
  lng: number;
  address: string;
}

export interface Contact {
  phone: string | Array<string>;
  email: string;
  address: Arrdess;
}
