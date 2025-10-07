# TODO: Fix Project to Meet Guidelines

## Backend Routes
- [x] Update app.py: Change /upload route to /submit
- [x] Add /success route in app.py to render success.html with results
- [x] Add /submit-contact route in app.py to handle contact form

## Templates
- [x] Create templates/success.html for displaying results
- [x] Update templates/test.html: Change form action to /submit, ensure Bootstrap classes
- [x] Update templates/index.html: Change form action to /submit, ensure Bootstrap classes
- [x] Update templates/landing.html: Replace custom CSS with Bootstrap classes and minimal CSS

## Frontend Behavior
- [x] Update static/index.js: Add jQuery validations for forms (empty fields, email format for contact)

## Styling
- [x] Update static/styles.css: Reduce to minimal custom CSS, rely on Bootstrap

## Testing
- [ ] Test routes: /, /index, /submit, /success, /submit-contact, /download
- [ ] Test form validations and submissions
