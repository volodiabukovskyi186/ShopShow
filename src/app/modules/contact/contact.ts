export interface ContactUs {
  name: string;
  email: string;
  subject: string;
  message: string;
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
