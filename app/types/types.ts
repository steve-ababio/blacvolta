import { Product } from "../data/product";

export type EventStatus = 'draft' | 'published' | 'archived';
export type EventType = 'general' | 'conference' | 'concert' | string;
export type TicketStatus = 'On Sale' | 'Sold Out' | 'Paused';
export type TicketType = 'Free' | 'Paid';

export interface BvEvent {
  id: number;
  creator_id: number;
  title: string;
  description: string;
  short_description: string;
  slug: string;
  status: EventStatus;
  event_type: EventType;
  start_date: string; // ISO string
  end_date: string;   // ISO string
  timezone: string;
  is_all_day: boolean;
  max_attendees: number | null;
  min_age: number | null;
  max_age: number | null;
  is_private: boolean;
  requires_approval: boolean;
  allow_guest_list: boolean;
  refund_policy: string | null;
  terms_and_conditions: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  external_url: string;
  meta_title: string | null;
  meta_description: string | null;

  featured_image_id: number | null;
  featured_image_url: string | null;
  banner_image_url: string | null;
  video_url: string | null;
  live_stream_url: string | null;

  views_count: number;
  shares_count: number;
  likes_count: number;

  published_at: string;
  created_at: string;
  updated_at: string;

  creator: EventCreator;
  location: EventLocation;

  categories: EventCategory[];
  tags: EventTag[];
  media: EventMedia[];

  featured_image: EventImage | null;
  tickets: Ticket[];

  ticket_type: TicketType;
  venue: string;
  cover_image: CoverImage;

  event_type_category: string;
  recurrence: EventRecurrence;
  category: string;
  publication_payment_required: boolean;
}

export interface EventCreator {
  id: number;
  first_name: string;
  last_name: string;
  username: string | null;
  avatar: string | null;
}

export interface EventLocation {
  id: number;
  event_id: number;
  name: string;
  address_line_1: string;
  address_line_2: string | null;
  city: string;
  state: string | null;
  postal_code: string | null;
  country: string;
  latitude: number | null;
  longitude: number | null;
  place_id: string | null;
  formatted_address: string | null;
  venue_type: 'indoor' | 'outdoor' | string;
  capacity: number | null;
  parking_info: string | null;
  accessibility_info: string | null;
  public_transport_info: string | null;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface Ticket {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  quantity_total: number;
  quantity_sold: number;
  quantity_available: number;
  status: TicketStatus;
  sku: string;
  sale_start_date: string | null;
  sale_end_date: string | null;
}

export interface EventRecurrence {
  by_day: string[];
  pattern: 'Once' | 'Daily' | 'Weekly' | 'Monthly' | string;
  interval: number;
}

export interface CoverImage {
  value: string;
}

export interface EventImage {
  id?: number;
  url?: string;
}

export interface EventCategory {
  id?: number;
  name?: string;
}

export interface EventTag {
  id?: number;
  name?: string;
}

export interface EventMedia {
  id?: number;
  type?: string;
  url?: string;
}

export interface TicketData{
    qr_code_data?:string,
    ticket_number?:string,
    check_in_location?:string,
    notes?: string,
    event_id: number,
}

export interface TicketVerificationResult {
    valid: boolean;
    reason?: string;
    ticket?: TicketResponse;
  }

  export interface TicketResponse {
    id: number;
    ticket_type_id: number;
    user_id: number;
    purchase_id: number;
    ticket_number: string;
    status: 'active' | 'cancelled' | 'expired';
    is_used: boolean;
    used_at: string | null;
    validated_by_user_id: number | null;
    check_in_location: string | null;
    notes: string | null;
    created_at: string;
    updated_at: string;
    ticket_type: TicketTypeResponse;
    event: EventSummary;
    qr_code: QrCode;
  }
  
  export interface TicketTypeResponse {
    id: number;
    event_id: number;
    name: string;
    description: string;
    price: string;          // keep as string (currency-safe)
    currency: string;
    capacity: number;
    available_count: number;
    min_purchase: number;
    max_purchase: number;
    is_active: boolean;
    sale_start_date: string;
    sale_end_date: string;
    is_transferable: boolean;
    is_refundable: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
  }
  export interface EventSummary {
    id: number;
    title: string;
    start_date: string;
    end_date: string;
  }

  export interface QrCode {
    qr_code_data: string;
    expires_at: string;
    is_active: boolean;
  }

  export type OrderReceiptPayload = {
    guest: {
      name: string;
      email: string;
      phoneNumber:string
    };
    order: {
      id: string;
      createdAt: string;
      paymentStatus: string;
      subTotal: number;
      tax: number;
      totalAmount: number;
      status: string;
      currency: string;
    };
    items: {
      product: { name: string };
      quantity: number;
      unitPrice: number;
    }[];
    address: {
      street: string;
      city: string;
      region: string;
      // postalCode: string;
      // country: string;
    };
  };

  export interface Article {
    id: number;
    title: string;
    description: string;
    content: string; // HTML string
    source: string;
    excerpt: string;
    status: "draft" | "published" | "rejected";
    views: number;
    saveCount: number;
    isSaved: boolean;
    estimatedReadingTime: number;
    rejectionNote: string | null;
    publishedAt: string; // ISO date
    createdAt: string;   // ISO date
    updatedAt: string;   // ISO date;
  
    category: Category;
    writer: Writer;
    images: ArticleImage[];
    socialStats: SocialStats;
  }
  
  export interface Category {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    status: "active" | "inactive";
    articleCount: number;
    createdAt: string; // ISO date
  }
  
  export interface Writer {
    id: number;
    firstName: string;
    lastName: string;
    username: string | null;
    email: string;
    profileImage: string | null;
    role: "admin" | "writer" | "editor";
    isVerified: boolean;
    joinedAt: string; // ISO date
    articleCount: number;
  }
  
  export interface ArticleImage {
    id: number;
    mediaId: number;
    imageUrl: string;
    altText: string | null;
    isPrimary: boolean;
    sortOrder: number;
    createdAt: string; // ISO date
    updatedAt: string; // ISO date
    media: Media;
  }
  
  export interface Media {
    id: number;
    filename: string;
    originalName: string;
    mimeType: string;
    storageUrl: string;
    cdnUrl: string;
    width: number;
    height: number;
    altText: string | null;
    tags: string[] | null;
  }
  
  export interface SocialStats {
    likes: number;
    shares: number;
    comments: number;
  }
  
  export type ProductVariant = {
    id: string;
    foreground: string;
    background: string;
    imageUrls: string[];
    price: number;
    currency: string;
    quantity: number;
    sizes?:string[]
  };
  
  export type GroupedProduct = {
    type: string;
    name: string;
    variants: Product[];
  };