import { ServiceInfo } from './service-info';
import { ServiceLocation } from './service-location';
import { ServiceProgram } from './service-program';
import { ServiceLocationContact } from './service-location-contact';
import { ServiceManufacturer } from './service-manufacturer';
import { ServiceLocationFacility } from './service-location-facility';
import { ServiceLocationOperation } from './service-location-operation';
import { ServiceLocationPhoto } from './service-location-photo';
import { ServiceLocationReview } from './service-location-review';
import { ServicePromotion } from './service-promotion';

export class ServiceDetails {
  public serviceInfo: ServiceInfo;
  public serviceLocation: ServiceLocation;
  public serviceProgram: ServiceProgram[];
  public serviceContacts: ServiceLocationContact[];
  public serviceManufacturers: ServiceManufacturer[];
  public serviceFacilities: ServiceLocationFacility[];
  public serviceOperations: ServiceLocationOperation[];
  public servicePhotos: ServiceLocationPhoto[];
  public serviceReviews: ServiceLocationReview[];
  public servicePromotions: ServicePromotion[];
}
