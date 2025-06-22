# Question

Design a travel booking website that allows users to search for accommodations and make a reservation.

For example:

- Airbnb
- Booking.com
- Expedia

# Requirement explorations

## Functional Requirements

### What core features to be supported?

- Search and browser accommodation listing
- View accommodation details like photos, description, pricing and amenities
- Make a reservation for accommodation

### Are user should login?

Anyone can search and listing a accommodation, but only aunthenticated user can make a reservation

## Non-functional Requirements

### What does the user demographic look like?

- International user of a wide range: USA, Europe, Asia, etc

### Are there a limit for page speed or interactivity?

- Page should be load under 2 second. Interaction for element should be quickly

### What device should be supported?

- Dekstop, table, mobile

### Optional requirements(For exploration purposes)

- **Should we include reviews for each accommodation?**
- **Should we have include tax in accomodation list based on user location?**
- **Should we have alert for user to turn on location for suggest near accommodation?**
- **Should we have a recommendation system based on user history?**

### Summary

- Search engine optimization: Travel sites should aim to rank high on search engines since organic search is one of the primary discovery mechanisms.
- **Performance**: Performance is known to affect conversions. For websites where the aim is to get customers to make purchases, performance is very important.
- **Internationalization**: The users are from many different countries and from various age groups. To capture a larger market, the website should be translated and localized.
- **Device support**: The site should work well for a variety of devices since the user demographics is very broad.

# Architecture / high-level design

## Server-side rendering (SSR) or Client-side rendering?

Performance and SEO are critical. Hence server-side rendering is a must because of the performance and SEO benefits.

### Single page application or Multiple page applicatino?

Because most of travel site using new tab for open the detail accommodation, so we can use multiple page application instead of single page application for better initial load performance

## Data Model

- Search Params
  - **Source**: Server
  - **Belongs to**: Search/Listing Page
  - **Fields**: City/Geolocation/Radius Date Range, Number of People, Amenities, etc.
- ListingResult
  - **Source**: Server
  - **Belongs to**: Search/Listing Page
  - **Fields**: `results` (list of `ListingItems`), `pagination` (pagination metadata)
- ListingItem
  - **Source**: Server
  - **Belongs to**: Search/Listing Page, Details Page
  - **Fields**: `title`, `price`, `currency`, `image_urls`, `amenities` (flexible format)
- Reservation
  - **Source**: Server
  - **Belongs to**: Reservation Page
  - **Fields**: `id`, `check_in_date`, `check_out_date`, `number_of_guests`, `price`, `tax`

## Interface Definition(API)

**Search**: Fetch accommodation listings given some search/filter parameters. The results are rendered on the map and/or a list view
**Listing details**: Fetch the details for an accommodation listing
**Reserve**: Make a reservation for an accommodation

### Search Accommodations

- **Method**: GET
- **path**: /api/search
- **Parameter**:
  - `size => number`: Number of result per page
  - `page => number`: Page number
  - `guests => number`: Number of guests
  - `check_in => date`: Check-in date
  - `check_out => date`: Check-out date
  - `location => string`: Location of the search
  - `country => string`: Country for the user, determine the currency
  - `amenities => array`: List of amenity
- **Response**:
  ```json
  {
    "results": [
      {
        "id": 561602, // Accommodation ID.
        "title": "Great view in the Mission, 15 mins by bus downtown",
        "images": [
          "https://www.greathotels.com/img/1.jpg",
          "https://www.greathotels.com/img/2.jpg",
          "https://www.greathotels.com/img/3.jpg",
          "https://www.greathotels.com/img/4.jpg"
        ],
        "rating": 4.82,
        "coordinates": {
          "latitude": 37.74403,
          "longitude": -122.41755
        },
        "price": 200,
        "currency": "USD"
      }
      // ... More accommodation results.
    ],
    // Pagination metadata.
    "pagination": {
      "size": 5,
      "page": 2,
      "total_pages": 15,
      "total": 74
    }
  }
  ```

### Get Accommodation Detail

- **Method**: GET
- **path**: /api/accommodation/:id
- **Parameter**:
  - `accommodatin_id => string`: Id accmmodation to be fetched
  - `country => string`: Country for the user, determine the currency
- **Response**:
  ```json
  {
    "id": 561602, // Accommodation ID.
    "title": "Great view of Brannan Street, 15 mins by bus downtown. Bed and Breakfast provided!",
    "images": [
      "https://www.greathotels.com/img/1.jpg",
      "https://www.greathotels.com/img/2.jpg",
      "https://www.greathotels.com/img/3.jpg",
      "https://www.greathotels.com/img/4.jpg"
    ],
    "rating": 4.82,
    "coordinates": {
      "latitude": 37.74403,
      "longitude": -122.41755
    },
    "price": 200,
    "currency": "USD",
    "amenities": {
      "breakfast_provided": true,
      "internet": true,
      "washer": true,
      "dryer": false
      // Any additional amenities details.
    },
    "house_rules": "...",
    "contact_email": "..."
    // Any additional details.
  }
  ```

### Make Reservation

- **Method**: POST
- **path**: /api/reserve
- **Payload/Body**:
  - `accommodatin_id => string`: Id accmmodation to be fetched
  - `check_in => date`: Check-in date
  - `check_out => date`: Check-out date
  - `payment_details => object`: Object containing payment method fields (credit card)
- **Response**:

  ```json
  {
    "id": 456, // Reservation ID.
    "total_price": 400,
    "currency": "USD",
    "dates": {
      "check_in": "2022-12-24",
      "check_out": "2022-12-27"
    },
    "accommodation": {
      "id": 561602,
      "address": {
        "country": "US",
        "street_address": "888 Brannan Street",
        "city": "San Francisco",
        "zip": "94103",
        "state": "CA",
        // ... Other address fields.
      },
    }
    "payment_details": {
      // Only show the last 4 digits.
      // We shouldn't be storing the credit card number
      // unencrypted anyway.
      "card_last_four_digits": "1234"
    }
  }

  ```

## Optimizations and deep dive

The most important aspect from travel booking are:

- **SEO**
- **Internazionalization**
- **Performance**
- **Device Support**

### SEO

- Bookmarkable search result
  - **Bookmarking**: Allows the particular search to be bookmarked, which is a common action users do when doing research for travel.
  - **Deep linking**: Other sites like travel blogs to link to the results page of specific search filters (e.g. vacations rentals in San Francisco). This helps to improve the site's SEO and discoverability.
- Pre-generate pages for popular searches
  To improve SEO by appearing relevant to what users are searching, travel sites generate tons of pages for the popular search terms that shows relevant listings for these terms. For example, Airbnb generated dedicated pages for ["Vacation rental apartments in San Francisco"](https://www.airbnb.com/san-francisco-ca/stays) and ["Vacation rental apartments in New York](https://www.airbnb.com/new-york-ny/stays). To let search engines know about these dedicated pages, Airbnb has a [sitemap](https://www.airbnb.com/sitemaps/v2) page just for listing links to their dedicated listing pages.

### Internazionalization

- Have dedicated pages translated in the supported languages.
- Make the language and country selector very prominent (e.g. in the navbar).
- For listing details which are contributed by users, add an automatic translation feature so that users visiting country X but don't speak country X's language can understand the listing in their native language.
- Set the lang attribute on the html tag (e.g. <html lang="zh-cn">) to tell browsers and search engines the language of the page which helps browsers offer a translation of the page. This is also important for SEO.
- Enable locale-specific UI:
  - Using the :lang() CSS pseudo-class to change display
  - Right-to-left languages
    - Using CSS Logical Properties
    - HTML's dir attribute
    - CSS direction: rtl
- Consider differences in the length of text in different languages.
- Do not concatenate translated strings.
- Do not put text in images.
- Be mindful of how colors are perceived in different cultures.

### Performance

- Image optimizations
  - Image preloading/lazy loading
  - Responsive images: Serve most suitable images for different screen sizes
  - Image formats: Use webp format for photos and SVGs for icons where possible
- Code splitting
  - Lazy load UI components that are not shown on initial render: (1) below the fold elements (e.g. footer), (2) elements that only appear after interaction (e.g. popover, modal).
- Performance monitoring
  - Use tools like Lighthouse and Web Vitals to profile websites and measure performance.
  - Set up performance budgets that run on CI.
- Virtual list when use infinite scroll
-

### Device Support

- Device-specific UI: Showing different UI for different devices, which can involve using a totally different information architecture.

  - Dynamic number of result items in a row and per page depending on device width and height.
  - Since maps are hard to use on smaller devices due to the smaller screen estate, consider not having a map UI at all. Without the map, clients can avoid loading map code and textures entirely on mobile devices.
  - Support swiping on image carousels on mobile.

- Form Optimization

  - Country spesific address form
    Different countries have different address formats. To optimize for global shipping, having localized address forms help greatly in improving conversions and that users do not drop off when filling out the address forms because they do not know how to understand certain fields. For example:

    - "ZIP Code"s are called "Postal Code"s in the United Kingdom.
    - There are no states in the Japan, only prefectures.
    - Different countries have their own postal/zip code formats and require different validation.
      [Stripe Checkout](https://checkout.stripe.dev/checkout), [FRANK'S COMPULSIVE GUIDE TO POSTAL ADDRESSES](https://www.columbia.edu/~fdc/postal/)

  - Optimize autofilling
    Help users autofill their address forms by specifying the right type and autocomplete values for the form `<input>`s for the shipping address forms and credit card forms.
  - Shipping Address Form
    | Field | type | autocomplete | Others |
    | -------------- | -------------- | ----------------------- | -------------------------------------------------------------- |
    | Name | `text` | shipping name | `autocorrect="off"` `spellcheck="false"` |
    | Country | Use `<select>` | shipping country | N/A |
    | Address line 1 | `text` | shipping address-line1 | `autocorrect="off"` `spellcheck="false"` |
    | Address line 2 | `text` | shipping address-line1 | `autocorrect="off"` `spellcheck="false"` |
    | City | `text` | shipping address-level2 | `autocorrect="off"` `spellcheck="false"` |
    | State | Use` <select>` | shipping address-level1 | N/A |
    | Postal Code | `text` | shipping postal-code | `autocorrect="off"` `spellcheck="false"` `inputmode="numeric"` |

  - Credit Card Form
    | Field | type | autocomplete | Others |
    |-------------|------|--------------|---------------------------------------------------------|
    | Card Number | `text` | cc-number |` autocorrect="off"` `spellcheck="false` `inputmode="numeric"` |
    | Card Expiry | `text` | cc-exp |` autocorrect="off"` `spellcheck="false` `inputmode="numeric"` |
    | Card CVC | `text` | cc-csc |` autocorrect="off"` `spellcheck="false` `inputmode="numeric"` |
  - Error messages
    Leverage client-side validation and clearly communicate any form errors. Connect the error message to the `<input>` via `aria-describedby` and use `aria-live="assertive"` for the error message. [Help users find the error message for a form control](https://web.dev/learn/forms/accessibility/#help-users-find-the-error-message-for-a-form-control)
  - [Payment Form](https://web.dev/learn/forms/payment/)
  - [Payment and address form best practices](https://web.dev/articles/payment-and-address-form-best-practices)
