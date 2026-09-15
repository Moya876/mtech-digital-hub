# Fix blank details in quote request emails

## Goal
Make every quote email show the sender's name, email address, phone number, company, project type, message, and submission time clearly.

## Changes
- Update the quote form's outgoing email data to include the field names expected by the existing email template, while retaining the current names for compatibility.
- Send the selected project type as a readable label such as “Web Development” instead of `web-development`.
- Keep optional companies explicit as “Not provided” rather than leaving a blank value.
- Add a focused regression test that submits a quote and confirms all expected email fields receive the entered values.

## Technical details
The current quote form sends `name`, `email`, and `phone`, while the email shown uses template placeholders that are not receiving those values. The submission will provide compatible aliases including `from_name`, `reply_to`, `phone_number`, and `company_name`, alongside the existing fields, so the current EmailJS template can populate every line without requiring a separate dashboard edit.

## Verification
- Run the quote form test and existing test suite.
- Confirm a sample submission passes complete, readable values to the email service.
