```typescript
// types/index.ts

export interface Property {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    location: string;
    images: string[];
    amenities: string[];
    rating: number;
    reviewsCount: number;
    host: Host;
}

export interface Host {
    id: string;
    name: string;
    profilePicture: string;
    bio: string;
    responseRate: number;
}

export interface Booking {
    id: string;
    propertyId: string;
    userId: string;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    bookings: Booking[];
}

export interface Review {
    id: string;
    propertyId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

export interface SearchFilters {
    location: string;
    checkInDate: Date;
    checkOutDate: Date;
    guests: number;
    priceRange: [number, number];
    amenities: string[];
}

export interface Theme {
    primaryColor: string; // e.g., '#FF69B4' for pink
    secondaryColor: string; // e.g., '#000000' for black
    backgroundColor: string; // e.g., '#1A1A1A' for dark background
    textColor: string; // e.g., '#FFFFFF' for white text
}

export interface AppContextType {
    properties: Property[];
    user: User | null;
    theme: Theme;
    searchFilters: SearchFilters;
    setSearchFilters: (filters: SearchFilters) => void;
    bookProperty: (booking: Booking) => void;
}
```

This TypeScript code defines various interfaces that can be used in a luxury dark-themed Airbnb-like website named HouseIL, focusing on properties, users, bookings, reviews, search filters, and theming.