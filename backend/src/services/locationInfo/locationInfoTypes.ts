/**
 * @interface LocationInfo
 * @description Location information entity
 *
 * @property {number} idLocationInfo - Location info identifier
 * @property {string} address - Complete address
 * @property {number} latitude - Latitude coordinate
 * @property {number} longitude - Longitude coordinate
 * @property {number} mapZoom - Map zoom level
 * @property {string | null} parkingInfo - Parking information
 * @property {string | null} transportInfo - Transport information
 */
export interface LocationInfo {
  idLocationInfo: number;
  address: string;
  latitude: number;
  longitude: number;
  mapZoom: number;
  parkingInfo: string | null;
  transportInfo: string | null;
}
