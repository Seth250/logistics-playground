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

  updateLocation(location: Marker) {
    this.location = location;
  }
}


class Order implements IOrder {
  readonly id: number;
  readonly createdAt: Date;
  public status: OrderStatus;

  constructor(
    public products: Product[],
    public user: User,
    public deliveryLocation: Marker,
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
    this.status = 'processing';
  }

  updateStatus(status: 'delivered' | 'cancelled') {
    this.status = status;
  }

  updateDeliveryLocation(location: Marker) {
    this.deliveryLocation = location;
  }
}


class Product implements IProduct {
  readonly id: number;
  readonly createdAt: Date;

  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public weight: number,
    public inventory: number
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
  }

  updatePrice(price: number) {
    this.price = price
  }

  decrementInventory() {
    this.inventory--;
  }

  updateInventory(value: number) {
    this.inventory = value;
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
    public courier: Courier,
    public currentPosition: Marker,
    public shipmentDate: Date
  ) {
    this.id = generateRandomId();
    this.createdAt = new Date();
  }

  updateCurrentPosition(position: Marker) {
    this.currentPosition = position;
  }

  updateShipmentDate(date: Date) {
    this.shipmentDate = date;
  }
}
