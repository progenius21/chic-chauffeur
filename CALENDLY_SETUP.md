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

After creating your Calendly account, update the following URLs in the code:

#### In `src/components/ui/booking-modal.tsx` (line 60):
```tsx
data-url="https://calendly.com/YOUR-USERNAME/executive-transport"
```

#### In `src/app/booking/page.tsx` (line 85):
```tsx
src="https://calendly.com/YOUR-USERNAME/executive-transport"
```

Replace `YOUR-USERNAME` with your actual Calendly username.

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

## Support

For Calendly-specific issues, refer to:
- [Calendly Help Center](https://help.calendly.com/)
- [Calendly Developer Documentation](https://developer.calendly.com/)

For integration issues, check the browser console for any JavaScript errors.
