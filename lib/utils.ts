Certainly! Below is a `lib/utils.ts` file that includes some utility functions that might be useful for a luxury dark Airbnb website named HouseIL. The utilities include functions for formatting currency, generating unique IDs, and validating email addresses, which are common tasks in web applications.

```typescript
// lib/utils.ts

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(amount);
};

export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
};

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
```

### Explanation of the Utility Functions:
1. **formatCurrency**: Formats a number into a currency string based on the specified currency code.
2. **generateUniqueId**: Generates a unique identifier string, useful for keys in lists or unique item IDs.
3. **isValidEmail**: Validates an email address using a regular expression.
4. **capitalizeFirstLetter**: Capitalizes the first letter of a given string.
5. **debounce**: Creates a debounced version of a function that delays its execution until after a specified delay.

You can import these utility functions in your React components as needed.