import { City } from './city';

export class ServiceLocation {
  public serviceLocationId: number;
  public name: string;
  public address: string;
  public longitude: number;
  public latitude: number;
  public maxCars: number;
  public serviceInfoId: number;
  public cityId: number;
  public city: City;
}
