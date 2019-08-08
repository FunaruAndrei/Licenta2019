import { ServiceLocationOperation } from './service-location-operation';
import { ServiceLocation } from './service-location';
import { CarManufacturer } from './car-manufacturer';
import { User } from '../auth.service';

export class Appointment 
{
public serviceLocationAppointmentId: number ;
  public carYear: number;
  public carManufacturer: CarManufacturer;
 public carModel: string ;
  public appointmentTime: Date;
  public serviceLocation: ServiceLocation;
  public serviceLocationOperation: ServiceLocationOperation;
  public user: User;
 public phone: string ;
 public email: string ; 
}
