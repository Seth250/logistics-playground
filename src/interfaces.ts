export interface IMarker {
  id?: number;
  latitude: number;
  longitude: number;
  address: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  createdAt: Date;
  location: IMarker;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  weight: number;
  createdAt: Date;
}

export type OrderStatus = 'processing' | 'delivered' | 'cancelled';

export interface IOrder {
  id: number;
  status: OrderStatus;
  createdAt: Date;
  products: IProduct[];
  user: IUser;
  deliveryLocation: IMarker;
}

export interface ICourier {
  id: number;
  name: string;
  countryCode: string;
  phoneNumber: string;
  createdAt: Date;
}

export interface IShipment {
  id: number;
  currentPosition: IMarker;
  createdAt: Date;
  shipmentDate: Date;
}