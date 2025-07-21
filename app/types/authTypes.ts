export interface signupType {
  email:string;
  password: string;
  is_company: boolean;
}

export interface signupStep1Type {
  email:string;
  code: string;
}


export interface signupStep2Type {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  phone_number: number;
  city: string;
  hood: string;
  detailed_location: string;
  get_notifications: boolean;
}

export interface loginType {
  identifier: string;
  password: string;
}

export interface logoutType {
  refresh: string;
}

export interface forgetPasswordType {
  email: string;
}

export interface resendEmailCodeType {
  email: string;
}

export interface resendUrlType {
  email: string;
}


export interface resetPasswordType {
  uid: string;
  token: string;
  new_password: string;
}

export interface changePasswordDashType{
  old_password: string,
  new_password: string
}

export interface EmailNotificationsDashType{
  receive_private_messages: string,
  receive_activity_notifications: string
  receive_offers: string
}

export interface deleteAccountType {
  password: string;
}

export interface feedbackEmailType {
  full_name: string;
  email: string;
  message: string;
}

// ---------------------------------------------------

export interface getUserInfoType {
  total_posts: number;
  total_views: number;
  average_rating: number;
  rating_count: number;
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  city: string;
  hood: string;
  detailed_location: string;
  profile_image: string;
  created_at: string;
}

export interface setUserInfoType {
  city: string;
  hood: string;
  detailed_location: string;
  profile_image: string;
}

export type Ad = {
  id: number;
  offer_type: 'sell' | 'search';
  title: string;
  description: string;
  city: string;
  price: string;
  status: 'accepted' | 'pending' | 'declined';
  cover_image: string;
  subcategory: string;
  user_first_name: string;
  user_last_name: string;
  user_city: string;
  user_profile_image: string;
  username: string;
};


export type UserAdsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ad[];
};