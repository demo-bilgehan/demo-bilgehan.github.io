# Our Services

This folder contains the dynamic services configuration for the website.

## Structure

Services are defined in `services.json` file. Each service has the following properties:

```json
{
  "id": "unique-service-id",
  "title": "Service Title",
  "description": "Brief description of the service",
  "icon": "material_symbol_name",
  "link": "page.html",
  "order": 1
}
```

## Service Properties

- **id** (required): Unique identifier for the service (used for internal reference)
- **title** (required): Display name of the service
- **description** (optional): Short description shown below the title
- **icon** (required): Material Symbols icon name (e.g., `psychology`, `assessment`, `book_4`)
  - Browse icons at: https://fonts.google.com/icons
  - Use the icon name without spaces (e.g., `book_4` not `book 4`)
- **link** (optional): URL to navigate when service is clicked (defaults to `contact.html`)
- **order** (optional): Display order (lower numbers appear first)

## Adding a New Service

1. Open `our-services/services.json`
2. Add a new service object to the `services` array:

```json
{
  "services": [
    {
      "id": "my-new-service",
      "title": "My New Service",
      "description": "Description of my new service",
      "icon": "favorite",
      "link": "contact.html",
      "order": 5
    }
  ]
}
```

3. Save the file - the service will automatically appear on the homepage!

## Icon Reference

Common Material Symbols icons you can use:

- `psychology` - Brain/mental health
- `assessment` - Document/chart
- `book_4` - Book/resources
- `support_agent` - Support/help
- `medical_services` - Medical services
- `favorite` - Favorite/liked
- `group` - Group/team
- `person` - Individual/person
- `schedule` - Time/scheduling
- `mail` - Email/contact
- `phone` - Phone/contact
- `location_on` - Location/place

Browse all available icons: https://fonts.google.com/icons

## Examples

### Example 1: Therapy Service
```json
{
  "id": "therapy-sessions",
  "title": "Therapy Sessions",
  "description": "Individual and group therapy options",
  "icon": "psychology",
  "link": "contact.html",
  "order": 1
}
```

### Example 2: Assessment Service
```json
{
  "id": "assessments",
  "title": "Assessments",
  "description": "Comprehensive psychological evaluations",
  "icon": "assessment",
  "link": "contact.html",
  "order": 2
}
```

### Example 3: Resources Service
```json
{
  "id": "resources",
  "title": "Resources",
  "description": "Articles and mental health guides",
  "icon": "book_4",
  "link": "blog.html",
  "order": 3
}
```

## Display Behavior

- Services are automatically sorted by `order` (ascending)
- If no `order` is specified, services are sorted alphabetically by title
- The grid layout adjusts automatically:
  - 1 service: 1 column
  - 2-3 services: 2 columns
  - 4+ services: 2 columns on mobile, 3 columns on desktop
- Services are displayed on the homepage in the "Our Services" section

## Notes

- Services are loaded dynamically when the page loads
- Changes to `services.json` will be reflected immediately after saving
- Icon names must match Material Symbols exactly (case-sensitive)
- Links can be relative (`contact.html`) or absolute (`https://example.com`)

