# Calendly Integration Setup Guide

This guide explains how to complete the Calendly integration for the London Coupes booking system.

## Setup Steps

### 1. Create Calendly Account
1. Go to [calendly.com](https://calendly.com) and create an account
2. Choose the plan that fits your needs (Basic plan is sufficient for most use cases)

### 2. Add Services
Create the following event types in your Calendly account:

#### Executive Transport (1-2 hours)
- **Event Type Name**: Executive Transport
- **Duration**: 1-2 hours
- **Description**: Professional chauffeur service for business meetings, airport transfers, and corporate events
- **Price**: Set your pricing (e.g., £150-300)

#### Special Occasions (2-4 hours)
- **Event Type Name**: Special Occasions
- **Duration**: 2-4 hours
- **Description**: Weddings, anniversaries, and milestone celebrations deserve the finest in classic luxury
- **Price**: Set your pricing (e.g., £300-500)

#### Heritage Tours (3-6 hours)
- **Event Type Name**: Heritage Tours
- **Duration**: 3-6 hours
- **Description**: Explore London's rich history in authentic style with our curated heritage experiences
- **Price**: Set your pricing (e.g., £500-800)

### 3. Configure Availability
1. Set your working hours and availability
2. Add buffer time between appointments
3. Set advance notice requirements (e.g., 24 hours minimum)
4. Configure timezone settings

### 4. Update Integration URLs

After creating your Calendly account, update the configuration in `src/utils/config.ts`:

```tsx
export const webConfig = {
    calendlyUsername: "YOUR-USERNAME",
    calendlyUrl: "https://calendly.com/YOUR-USERNAME"
}
```

Replace `YOUR-USERNAME` with your actual Calendly username.

**Note**: The system now uses your main Calendly page URL instead of specific event types. This ensures the booking system works even if specific event types haven't been created yet.

### 5. Optional: Create Multiple Event Types
You can create separate Calendly links for each service type:

- Executive Transport: `https://calendly.com/YOUR-USERNAME/executive-transport`
- Special Occasions: `https://calendly.com/YOUR-USERNAME/special-occasions`
- Heritage Tours: `https://calendly.com/YOUR-USERNAME/heritage-tours`

## Features Implemented

### Modal Integration (Option A)
- **File**: `src/components/ui/booking-modal.tsx`
- **Usage**: Opens in a popup modal when "Book Now" buttons are clicked
- **Benefits**: Keeps users on your website, seamless experience

### Page Integration (Option B)
- **File**: `src/app/booking/page.tsx`
- **Usage**: Dedicated booking page with full Calendly iframe
- **Benefits**: More space for Calendly widget, better for complex booking flows

### Booking Provider
- **File**: `src/components/ui/booking-provider.tsx`
- **Usage**: Manages modal state across the application
- **Benefits**: Centralized booking state management

## Updated Components

All "Book Now" buttons throughout the site now connect to the booking system:
- Header navigation (desktop and mobile)
- Hero section
- Contact section
- Mobile menu

## Testing

1. Start your development server: `npm run dev`
2. Click any "Book Now" button to test the modal
3. Visit `/booking` to test the dedicated booking page
4. Ensure Calendly widget loads properly

## Customization

### Styling
The booking modal and page use your existing design system:
- Colors: Navy, cream, gold, warm-grey
- Typography: Playfair Display, Source Serif 4
- Border radius: `rounded-classic`

### Content
Update service descriptions, pricing, and contact information in:
- `src/app/booking/page.tsx` (service cards and contact info)
- `src/components/ui/booking-modal.tsx` (modal content)

## Troubleshooting

### Common Issues

1. **Booking widget not loading**: 
   - Check that your Calendly username is correct in `src/utils/config.ts`
   - Verify your Calendly account is active and public
   - Check browser console for JavaScript errors

2. **404 errors on Calendly URLs**:
   - Ensure your Calendly username exists (test at `https://calendly.com/YOUR-USERNAME`)
   - The system now uses your main Calendly page instead of specific event types

3. **Modal not opening**:
   - Check that the BookingProvider is properly set up in your layout
   - Verify all "Book Now" buttons are connected to the booking system

4. **Script loading errors**:
   - The system includes error handling and fallback UI
   - Users will see contact information if Calendly fails to load

### Error Handling

The booking system now includes:
- Automatic fallback UI when Calendly fails to load
- Error logging to browser console
- Contact information display for manual booking
- Improved script loading with duplicate prevention

## Support

For Calendly-specific issues, refer to:
- [Calendly Help Center](https://help.calendly.com/)
- [Calendly Developer Documentation](https://developer.calendly.com/)

For integration issues, check the browser console for any JavaScript errors.
