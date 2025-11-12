/**
 * @interface ContactInfo
 * @description Contact information entity
 *
 * @property {number} idContactInfo - Contact info identifier
 * @property {string} phone - Phone number
 * @property {string} email - Email address
 * @property {string | null} whatsapp - WhatsApp number
 */
export interface ContactInfo {
  idContactInfo: number;
  phone: string;
  email: string;
  whatsapp: string | null;
}

/**
 * @interface SocialMedia
 * @description Social media link entity
 *
 * @property {number} idSocialMedia - Social media identifier
 * @property {string} platform - Platform name
 * @property {string} url - Social media URL
 * @property {string} iconName - Icon identifier
 * @property {number} displayOrder - Display order
 */
export interface SocialMedia {
  idSocialMedia: number;
  platform: string;
  url: string;
  iconName: string;
  displayOrder: number;
}

/**
 * @interface ContactInfoResponse
 * @description Combined contact information response
 *
 * @property {ContactInfo} contactInfo - Contact information
 * @property {SocialMedia[]} socialMedia - Social media links
 */
export interface ContactInfoResponse {
  contactInfo: ContactInfo;
  socialMedia: SocialMedia[];
}
