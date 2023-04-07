import { IUser, IMarker, OrderStatus, IOrder, IProduct, IShipment, ICourier } from "./interfaces";
import { generateRandomId } from "./utils";


class Marker implements IMarker {
  readonly id: number;

  constructor(
    public latitude: number,
    public longitude: number,
    public address: string
  ) {
    this.id = generateRandomId();
  }
}


class User implements IUser {
  readonly id: number;
  readonly createdAt: Date;

  constructor(
    public name: string,
    public email: string,
    public countryCode: string,
    public phoneNumber: string,
    public location: Marker
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
  }
}


class Order implements IOrder {
  readonly id: number;
  readonly createdAt: Date;

  constructor(
    public status: OrderStatus,
    public products: Product[],
    public user: User,
    public deliveryLocation: Marker,
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
  }
}


class Product implements IProduct {
  readonly id: number;
  readonly createdAt: Date;

  constructor(
    public name: string,
    public price: number,
    public weight: number,
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
  }
}


class Courier implements ICourier {
  readonly id: number;
  readonly createdAt: Date;

  constructor(
    public name: string,
    public countryCode: string,
    public phoneNumber: string,
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
  }
}


class Shipment implements IShipment {
  readonly id: number;
  readonly createdAt: Date;

  constructor(
    public order: Order,
    public currentPosition: Marker,
    public shipmentDate: Date
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
  }
}
