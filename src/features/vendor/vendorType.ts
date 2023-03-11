export interface VendorType {
  render_type: number;
  status: boolean;
  data: VendorTypeData;
}

export interface VendorTypeData {
  count: number;
  open_count: number;
  finalResult: FinalResult[];
  extra_sections: ExtraSections;
  meta_tags: MetaTags;
}

export interface ExtraSections {
  categories: Categories;
  filters: Filters;
  pickup: Pickup;
  render_type: number;
}

export interface Categories {
  single_choice: boolean;
  data: any[];
  open: boolean;
}

export interface Filters {
  sections: Section[];
  top: Top;
}

export interface Section {
  section_name: string;
  section_name_fa: string;
  data: SectionDatum[];
  description?: string;
  open: boolean;
  suggest: boolean;
  exclude_in_pickup: boolean;
}

export interface SectionDatum {
  image: null;
  title: string;
  value: string;
  single_choice: boolean;
  selected: boolean;
  kind: string;
  description?: string;
  open: boolean;
  exclude_in_pickup: boolean;
  suggest?: boolean;
  suggested_sort?: number;
  badge?: string;
}

export interface Top {
  open: boolean;
  data: TopDatum[];
}

export interface TopDatum {
  image: null;
  title: string;
  value: string;
  single_choice: boolean;
  selected: boolean;
  kind: string;
  open: boolean;
  exclude_in_pickup: boolean;
}

export interface Pickup {
  active: boolean;
  filter_text: string;
  is_new: boolean;
  open: boolean;
}

export interface FinalResult {
  type: Type;
  data: DataUnion;
}

export type DataUnion = VendorData | string;

export interface VendorData {
  id: number;
  vendorCode: string;
  noOrder: boolean;
  title: string;
  description: string;
  rate: number;
  rating: number;
  logo: string;
  defLogo: string;
  taxEnabled: boolean;
  taxIncluded: boolean;
  taxEnabledInProducts: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInDeliveryFee: boolean;
  tax: number;
  serviceFee: number;
  deliveryArea: string;
  discount: number;
  isOpen: boolean;
  minDeliveryFee: number;
  maxDeliveryFee: number;
  deliveryTime: number;
  paymentTypes: number[];
  schedules: Schedule[];
  minOrder: number;
  address: string;
  phone: string;
  website: string;
  status: number;
  lat: number;
  lon: number;
  restaurantClass: string;
  foodTypes: any[];
  restaurantTypes: any[];
  isFavorite: boolean;
  priority: number;
  city: string;
  area: string;
  commentCount: number;
  recommendedFor: string;
  establishment: ChildType;
  mostPopularItems: string;
  costsForTwo: number;
  onlineOrder: boolean;
  voteCount: number;
  discountType: null;
  menuUrl: string;
  discountValue: number;
  discountForAll: boolean;
  containerFee: number;
  deliveryGuarantee: boolean;
  badges: Badge[];
  discountStartHour1: string;
  discountStopHour1: string;
  discountStartHour2: string;
  discountStopHour2: string;
  discountValueForView: number;
  coverPath: string;
  cuisinesArray: CuisinesArray[];
  preOrderEnabled: boolean;
  preorderToday: PreorderToday;
  vendorType: ChildType;
  childType: ChildType;
  budgetClass: string;
  vendorTypeTitle: string;
  isZFExpress: boolean;
  deliveryFee: number;
  backgroundImage: string;
  backgroundImageCustom: string;
  has_coupon: boolean;
  coupon_count: number;
  best_coupon: string;
  has_first_coupon: boolean;
  userImage: UserImage[];
  menuImage: any[];
  countReview: number;
  countOfUserImages: number;
  deliveryFeeDiscount: number;
  trendingScore: number;
  delay: string;
  deliver: boolean;
  eta: number;
  min_eta: number;
  max_eta: number;
  open_at_eta: boolean;
  action: string;
  has_delay: boolean;
  delay_time: number;
  total_time: number;
  bid: boolean;
  superTypeAlias: ChildType;
  is_food_party: boolean;
  is_market_party: boolean;
  click_id: null;
  cpc_campaign_hash: null;
  cpc_spot: null;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_grocery_vip: boolean;
  is_grocery_returnable: boolean;
  is_grocery_economic: boolean;
  status_title: StatusTitle;
  status_text: string;
  status_description: string;
  has_cashback: boolean;
}

export interface Badge {
  title: string;
  description: string;
  image: string;
  white_image: string;
}

export type ChildType = "FASTFOOD" | "RESTAURANT";

export interface CuisinesArray {
  id: number;
  title: string;
}

export interface PreorderToday {
  weekday: string;
  name: string;
  startHour: string;
  intervals: null;
}

export interface Schedule {
  type: number;
  weekday: number;
  allDay: boolean;
  startHour: string;
  stopHour: string;
}

export type StatusTitle = "ACTIVE";

export interface UserImage {
  id: number;
  description: null;
  fileName: string;
  thumbNailSource: string;
  likeCount: number;
  commentCount: number;
  timeDifference: number;
  imageType: ImageType;
  userType: UserType;
}

export type ImageType = "PRODUCT_IMAGE";

export type UserType = "ZOODFOOD";

export type Type = "TEXT" | "VENDOR";

export interface MetaTags {
  header: string;
  title: string;
  description: string;
}
