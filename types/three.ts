Here's a TypeScript file for a `threetypes` component in a React application, tailored for your luxury dark Airbnb website named HouseIL. This component will define three types that could be used in your application.

```typescript
// src/types/three.ts

import React from 'react';

// Define a type for the property listing
export interface Property {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    location: string;
    images: string[];
    amenities: string[];
    rating: number;
}

// Define a type for the user
export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    isHost: boolean;
}

// Define a type for the booking
export interface Booking {
    id: string;
    propertyId: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
}

// Example of a functional component using the defined types
const ExampleComponent: React.FC<{ property: Property }> = ({ property }) => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#ff69b4' }}>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price per night: ${property.pricePerNight}</p>
            <p>Location: {property.location}</p>
            <p>Rating: {property.rating} ⭐</p>
            <div>
                <h3>Amenities:</h3>
                <ul>
                    {property.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExampleComponent;
```

### Explanation:
- **Property Interface**: Represents a property listing with fields for ID, title, description, price, location, images, amenities, and rating.
- **User Interface**: Represents a user with fields for ID, name, email, profile picture, and whether they are a host.
- **Booking Interface**: Represents a booking with fields for ID, property ID, user ID, start and end dates, and total price.
- **ExampleComponent**: A simple functional component that demonstrates how to use the `Property` type to display property details. The styling is aligned with your luxury theme using dark backgrounds and pink accents.

You can expand upon this structure as needed for your application.