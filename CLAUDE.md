# Harbor & Pine Supply: orders service

Order totals for a fictional outdoor-supply store. Made-up data only.

## Commands
- Test: `npm test` (Node's built-in test runner)

## Rules
- All money is integer cents. Never use floating-point money.
- Every change gets a test in test/.
- Don't edit anything in logs/.

## Pricing rules

These rules apply to every order total. All amounts are integer cents.

### Money
- Store and calculate every amount as an integer number of cents.
- Format for display only at the edge (receipts, emails, the storefront).
- Never round in the middle of a calculation; round once, at the step that says so.

### Shipping
- Orders with a subtotal of 7500 cents ($75.00) or more ship free.
- Below that, shipping is a flat 895 cents ($8.95).
- Shipping is added after discounts and before tax.
- Oversize items (tents over 4 people, kayaks) add 1500 cents each, even when shipping is free.

### Discounts
- Discounts are stored in basis points (100 bp = 1%).
- A discount applies to the subtotal, not to shipping.
- Round a discount down to the whole cent: Math.floor((subtotalCents * bp) / 10000).
- Only one discount code per order. Staff discounts don't stack with codes.

### Bulk pricing
| Quantity of one SKU | Price break |
|---|---|
| 1-9 | list price |
| 10-24 | 5% off that line |
| 25-49 | 8% off that line |
| 50+ | 12% off that line (needs a sales approval code) |

### Gift cards
- Gift cards pay for the total after tax.
- A gift card can't be used to buy another gift card.
- Remaining balance stays on the card; never refund it as cash.

### Returns
- Refund the line price actually paid, after its share of any discount.
- Shipping is refunded only when the return is our mistake.
- Oversize surcharges are never refunded after 30 days.

### Tax
- Tax is calculated by the tax service, never in this repo.
- Send the taxable amount (subtotal - discount + shipping) in cents.

## Warehouse codes

Every order line ships from one warehouse. Codes are fixed; never reuse a retired code.

| Code | Region | Order cut-off (local) | Carrier | Notes |
|---|---|---|---|---|
| WH-01 | Pacific NW | 13:00 | Cedar Freight | general stock |
| WH-02 | Northern CA | 14:30 | Lakeline Parcel | general stock |
| WH-03 | Mountain | 15:00 | Ridgeway Ground | general stock |
| WH-04 | Midwest | 16:30 | Tidewater Express | general stock |
| WH-05 | Great Lakes | 17:00 | Cedar Freight | general stock |
| WH-06 | Northeast | 13:30 | Lakeline Parcel | general stock |
| WH-07 | Mid-Atlantic | 14:00 | Ridgeway Ground | oversize items only |
| WH-08 | Southeast | 15:30 | Tidewater Express | general stock |
| WH-09 | Gulf | 16:00 | Cedar Freight | general stock |
| WH-10 | Southwest | 17:30 | Lakeline Parcel | general stock |
| WH-11 | Pacific NW | 13:00 | Ridgeway Ground | retiring 2027 |
| WH-12 | Northern CA | 14:30 | Tidewater Express | general stock |
| WH-13 | Mountain | 15:00 | Cedar Freight | general stock |
| WH-14 | Midwest | 16:30 | Lakeline Parcel | oversize items only |
| WH-15 | Great Lakes | 17:00 | Ridgeway Ground | general stock |
| WH-16 | Northeast | 13:30 | Tidewater Express | general stock |
| WH-17 | Mid-Atlantic | 14:00 | Cedar Freight | general stock |
| WH-18 | Southeast | 15:30 | Lakeline Parcel | general stock |
| WH-19 | Gulf | 16:00 | Ridgeway Ground | general stock |
| WH-20 | Southwest | 17:30 | Tidewater Express | general stock |
| WH-21 | Pacific NW | 13:00 | Cedar Freight | oversize items only |
| WH-22 | Northern CA | 14:30 | Lakeline Parcel | retiring 2027 |
| WH-23 | Mountain | 15:00 | Ridgeway Ground | general stock |
| WH-24 | Midwest | 16:30 | Tidewater Express | general stock |
| WH-25 | Great Lakes | 17:00 | Cedar Freight | general stock |
| WH-26 | Northeast | 13:30 | Lakeline Parcel | general stock |
| WH-27 | Mid-Atlantic | 14:00 | Ridgeway Ground | general stock |
| WH-28 | Southeast | 15:30 | Tidewater Express | oversize items only |
| WH-29 | Gulf | 16:00 | Cedar Freight | general stock |
| WH-30 | Southwest | 17:30 | Lakeline Parcel | general stock |
| WH-31 | Pacific NW | 13:00 | Ridgeway Ground | general stock |
| WH-32 | Northern CA | 14:30 | Tidewater Express | general stock |
| WH-33 | Mountain | 15:00 | Cedar Freight | retiring 2027 |
| WH-34 | Midwest | 16:30 | Lakeline Parcel | general stock |
| WH-35 | Great Lakes | 17:00 | Ridgeway Ground | oversize items only |
| WH-36 | Northeast | 13:30 | Tidewater Express | general stock |
| WH-37 | Mid-Atlantic | 14:00 | Cedar Freight | general stock |
| WH-38 | Southeast | 15:30 | Lakeline Parcel | general stock |
| WH-39 | Gulf | 16:00 | Ridgeway Ground | general stock |
| WH-40 | Southwest | 17:30 | Tidewater Express | general stock |
| WH-41 | Pacific NW | 13:00 | Cedar Freight | general stock |
| WH-42 | Northern CA | 14:30 | Lakeline Parcel | oversize items only |
| WH-43 | Mountain | 15:00 | Ridgeway Ground | general stock |
| WH-44 | Midwest | 16:30 | Tidewater Express | retiring 2027 |
| WH-45 | Great Lakes | 17:00 | Cedar Freight | general stock |
| WH-46 | Northeast | 13:30 | Lakeline Parcel | general stock |
| WH-47 | Mid-Atlantic | 14:00 | Ridgeway Ground | general stock |
| WH-48 | Southeast | 15:30 | Tidewater Express | general stock |
| WH-49 | Gulf | 16:00 | Cedar Freight | oversize items only |
| WH-50 | Southwest | 17:30 | Lakeline Parcel | general stock |
| WH-51 | Pacific NW | 13:00 | Ridgeway Ground | general stock |
| WH-52 | Northern CA | 14:30 | Tidewater Express | general stock |
| WH-53 | Mountain | 15:00 | Cedar Freight | general stock |
| WH-54 | Midwest | 16:30 | Lakeline Parcel | general stock |
| WH-55 | Great Lakes | 17:00 | Ridgeway Ground | retiring 2027 |
| WH-56 | Northeast | 13:30 | Tidewater Express | oversize items only |
| WH-57 | Mid-Atlantic | 14:00 | Cedar Freight | general stock |
| WH-58 | Southeast | 15:30 | Lakeline Parcel | general stock |
| WH-59 | Gulf | 16:00 | Ridgeway Ground | general stock |
| WH-60 | Southwest | 17:30 | Tidewater Express | general stock |

### Retired codes
WH-61 to WH-70 were retired in 2025. Orders that still name them must be rejected with error code W-RETIRED.

## API style guide

The orders API is JSON over HTTPS. These rules keep it predictable for the storefront and partners.

### Naming
1. Naming rule 1.1: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: orderLines, /order-lines.
2. Naming rule 1.2: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: ORDER_NOT_FOUND.
3. Naming rule 1.3: Use lowerCamelCase for JSON fields and kebab-case for paths. Default page size 50, maximum 200.
4. Naming rule 1.4: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: 2026-11-17T14:05:00Z.
5. Naming rule 1.5: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: { "amountCents": 1299, "currency": "USD" }.
6. Naming rule 1.6: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: /v2/orders.
7. Naming rule 1.7: Use lowerCamelCase for JSON fields and kebab-case for paths. Replay the stored response for a repeated key.
8. Naming rule 1.8: Use lowerCamelCase for JSON fields and kebab-case for paths. Mask card numbers to the last four digits.
9. Naming rule 1.9: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: orderLines, /order-lines.

### Errors
1. Errors rule 2.1: Return a problem+json body with a stable error code and a human-readable title. Example: ORDER_NOT_FOUND.
2. Errors rule 2.2: Return a problem+json body with a stable error code and a human-readable title. Default page size 50, maximum 200.
3. Errors rule 2.3: Return a problem+json body with a stable error code and a human-readable title. Example: 2026-11-17T14:05:00Z.
4. Errors rule 2.4: Return a problem+json body with a stable error code and a human-readable title. Example: { "amountCents": 1299, "currency": "USD" }.
5. Errors rule 2.5: Return a problem+json body with a stable error code and a human-readable title. Example: /v2/orders.
6. Errors rule 2.6: Return a problem+json body with a stable error code and a human-readable title. Replay the stored response for a repeated key.
7. Errors rule 2.7: Return a problem+json body with a stable error code and a human-readable title. Mask card numbers to the last four digits.
8. Errors rule 2.8: Return a problem+json body with a stable error code and a human-readable title. Example: orderLines, /order-lines.
9. Errors rule 2.9: Return a problem+json body with a stable error code and a human-readable title. Example: ORDER_NOT_FOUND.

### Pagination
1. Pagination rule 3.1: Use cursor pagination with a next link; never expose page numbers. Default page size 50, maximum 200.
2. Pagination rule 3.2: Use cursor pagination with a next link; never expose page numbers. Example: 2026-11-17T14:05:00Z.
3. Pagination rule 3.3: Use cursor pagination with a next link; never expose page numbers. Example: { "amountCents": 1299, "currency": "USD" }.
4. Pagination rule 3.4: Use cursor pagination with a next link; never expose page numbers. Example: /v2/orders.
5. Pagination rule 3.5: Use cursor pagination with a next link; never expose page numbers. Replay the stored response for a repeated key.
6. Pagination rule 3.6: Use cursor pagination with a next link; never expose page numbers. Mask card numbers to the last four digits.
7. Pagination rule 3.7: Use cursor pagination with a next link; never expose page numbers. Example: orderLines, /order-lines.
8. Pagination rule 3.8: Use cursor pagination with a next link; never expose page numbers. Example: ORDER_NOT_FOUND.
9. Pagination rule 3.9: Use cursor pagination with a next link; never expose page numbers. Default page size 50, maximum 200.

### Dates and times
1. Dates and times rule 4.1: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: 2026-11-17T14:05:00Z.
2. Dates and times rule 4.2: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: { "amountCents": 1299, "currency": "USD" }.
3. Dates and times rule 4.3: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: /v2/orders.
4. Dates and times rule 4.4: Send timestamps in UTC as ISO 8601 with a Z suffix. Replay the stored response for a repeated key.
5. Dates and times rule 4.5: Send timestamps in UTC as ISO 8601 with a Z suffix. Mask card numbers to the last four digits.
6. Dates and times rule 4.6: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: orderLines, /order-lines.
7. Dates and times rule 4.7: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: ORDER_NOT_FOUND.
8. Dates and times rule 4.8: Send timestamps in UTC as ISO 8601 with a Z suffix. Default page size 50, maximum 200.
9. Dates and times rule 4.9: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: 2026-11-17T14:05:00Z.

### Money fields
1. Money fields rule 5.1: Send money as an integer number of cents with a currency field. Example: { "amountCents": 1299, "currency": "USD" }.
2. Money fields rule 5.2: Send money as an integer number of cents with a currency field. Example: /v2/orders.
3. Money fields rule 5.3: Send money as an integer number of cents with a currency field. Replay the stored response for a repeated key.
4. Money fields rule 5.4: Send money as an integer number of cents with a currency field. Mask card numbers to the last four digits.
5. Money fields rule 5.5: Send money as an integer number of cents with a currency field. Example: orderLines, /order-lines.
6. Money fields rule 5.6: Send money as an integer number of cents with a currency field. Example: ORDER_NOT_FOUND.
7. Money fields rule 5.7: Send money as an integer number of cents with a currency field. Default page size 50, maximum 200.
8. Money fields rule 5.8: Send money as an integer number of cents with a currency field. Example: 2026-11-17T14:05:00Z.
9. Money fields rule 5.9: Send money as an integer number of cents with a currency field. Example: { "amountCents": 1299, "currency": "USD" }.

### Versioning
1. Versioning rule 6.1: Put the major version in the path and never break a published version. Example: /v2/orders.
2. Versioning rule 6.2: Put the major version in the path and never break a published version. Replay the stored response for a repeated key.
3. Versioning rule 6.3: Put the major version in the path and never break a published version. Mask card numbers to the last four digits.
4. Versioning rule 6.4: Put the major version in the path and never break a published version. Example: orderLines, /order-lines.
5. Versioning rule 6.5: Put the major version in the path and never break a published version. Example: ORDER_NOT_FOUND.
6. Versioning rule 6.6: Put the major version in the path and never break a published version. Default page size 50, maximum 200.
7. Versioning rule 6.7: Put the major version in the path and never break a published version. Example: 2026-11-17T14:05:00Z.
8. Versioning rule 6.8: Put the major version in the path and never break a published version. Example: { "amountCents": 1299, "currency": "USD" }.
9. Versioning rule 6.9: Put the major version in the path and never break a published version. Example: /v2/orders.

### Idempotency
1. Idempotency rule 7.1: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Replay the stored response for a repeated key.
2. Idempotency rule 7.2: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Mask card numbers to the last four digits.
3. Idempotency rule 7.3: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: orderLines, /order-lines.
4. Idempotency rule 7.4: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: ORDER_NOT_FOUND.
5. Idempotency rule 7.5: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Default page size 50, maximum 200.
6. Idempotency rule 7.6: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: 2026-11-17T14:05:00Z.
7. Idempotency rule 7.7: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: { "amountCents": 1299, "currency": "USD" }.
8. Idempotency rule 7.8: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: /v2/orders.
9. Idempotency rule 7.9: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Replay the stored response for a repeated key.

### Logging
1. Logging rule 8.1: Log the request ID, never the customer's name, email or address. Mask card numbers to the last four digits.
2. Logging rule 8.2: Log the request ID, never the customer's name, email or address. Example: orderLines, /order-lines.
3. Logging rule 8.3: Log the request ID, never the customer's name, email or address. Example: ORDER_NOT_FOUND.
4. Logging rule 8.4: Log the request ID, never the customer's name, email or address. Default page size 50, maximum 200.
5. Logging rule 8.5: Log the request ID, never the customer's name, email or address. Example: 2026-11-17T14:05:00Z.
6. Logging rule 8.6: Log the request ID, never the customer's name, email or address. Example: { "amountCents": 1299, "currency": "USD" }.
7. Logging rule 8.7: Log the request ID, never the customer's name, email or address. Example: /v2/orders.
8. Logging rule 8.8: Log the request ID, never the customer's name, email or address. Replay the stored response for a repeated key.
9. Logging rule 8.9: Log the request ID, never the customer's name, email or address. Mask card numbers to the last four digits.

## Release process

1. Every change goes through a pull request with green checks.
2. Tag the release on main as vYYYY.MM.DD-N.
3. Deploy to preview first and run the smoke tests against it.
4. Watch the error rate for 30 minutes before promoting to production.
5. Promote with the release workflow; never deploy from a laptop.
6. Write a one-paragraph release note: what changed, who it affects, how to roll back.
7. Rolling back means redeploying the previous tag, not reverting in production.
8. Freeze windows: no releases from Friday 14:00 to Monday 09:00 local time, or during the holiday peak (Nov 20 to Dec 31) without the on-call lead's approval.
9. Database migrations ship one release before the code that needs them.
10. Feature flags are removed within two releases of reaching 100%.

## Old session notes (kept "just in case")
- 2026-09-01: Looked into flaky receipt test; turned out to be the time zone.
- 2026-09-04: Discussed moving to a new test runner; decided not to.
- 2026-09-07: Tried a refactor of order.js and reverted it.
- 2026-09-10: Sales asked about bulk pricing again; see pricing table.
- 2026-09-13: Warehouse WH-27 was slow again overnight.
- 2026-09-16: Renamed a variable in the receipt code.
- 2026-09-19: Agent suggested floats for discounts; rejected (integer cents).
- 2026-09-22: Talked about adding currency support next quarter.
- 2026-09-25: Release was delayed by the freeze window.
- 2026-09-28: Updated the API style guide examples.
- 2026-10-01: Looked into flaky receipt test; turned out to be the time zone.
- 2026-10-04: Discussed moving to a new test runner; decided not to.
- 2026-10-07: Tried a refactor of order.js and reverted it.
- 2026-10-10: Sales asked about bulk pricing again; see pricing table.
- 2026-10-13: Warehouse WH-27 was slow again overnight.
- 2026-10-16: Renamed a variable in the receipt code.
- 2026-10-19: Agent suggested floats for discounts; rejected (integer cents).
- 2026-10-22: Talked about adding currency support next quarter.
- 2026-10-25: Release was delayed by the freeze window.
- 2026-10-28: Updated the API style guide examples.
- 2026-11-01: Looked into flaky receipt test; turned out to be the time zone.
- 2026-11-04: Discussed moving to a new test runner; decided not to.
- 2026-11-07: Tried a refactor of order.js and reverted it.
- 2026-11-10: Sales asked about bulk pricing again; see pricing table.
- 2026-11-13: Warehouse WH-27 was slow again overnight.
- 2026-11-16: Renamed a variable in the receipt code.
- 2026-11-19: Agent suggested floats for discounts; rejected (integer cents).
- 2026-11-22: Talked about adding currency support next quarter.
- 2026-11-25: Release was delayed by the freeze window.
- 2026-11-28: Updated the API style guide examples.
