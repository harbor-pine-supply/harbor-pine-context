# API style guide

The orders API is JSON over HTTPS. These rules keep it predictable for the storefront and partners.

## Naming
1. Naming rule 1.1: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: orderLines, /order-lines.
2. Naming rule 1.2: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: ORDER_NOT_FOUND.
3. Naming rule 1.3: Use lowerCamelCase for JSON fields and kebab-case for paths. Default page size 50, maximum 200.
4. Naming rule 1.4: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: 2026-11-17T14:05:00Z.
5. Naming rule 1.5: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: { "amountCents": 1299, "currency": "USD" }.
6. Naming rule 1.6: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: /v2/orders.
7. Naming rule 1.7: Use lowerCamelCase for JSON fields and kebab-case for paths. Replay the stored response for a repeated key.
8. Naming rule 1.8: Use lowerCamelCase for JSON fields and kebab-case for paths. Mask card numbers to the last four digits.
9. Naming rule 1.9: Use lowerCamelCase for JSON fields and kebab-case for paths. Example: orderLines, /order-lines.

## Errors
1. Errors rule 2.1: Return a problem+json body with a stable error code and a human-readable title. Example: ORDER_NOT_FOUND.
2. Errors rule 2.2: Return a problem+json body with a stable error code and a human-readable title. Default page size 50, maximum 200.
3. Errors rule 2.3: Return a problem+json body with a stable error code and a human-readable title. Example: 2026-11-17T14:05:00Z.
4. Errors rule 2.4: Return a problem+json body with a stable error code and a human-readable title. Example: { "amountCents": 1299, "currency": "USD" }.
5. Errors rule 2.5: Return a problem+json body with a stable error code and a human-readable title. Example: /v2/orders.
6. Errors rule 2.6: Return a problem+json body with a stable error code and a human-readable title. Replay the stored response for a repeated key.
7. Errors rule 2.7: Return a problem+json body with a stable error code and a human-readable title. Mask card numbers to the last four digits.
8. Errors rule 2.8: Return a problem+json body with a stable error code and a human-readable title. Example: orderLines, /order-lines.
9. Errors rule 2.9: Return a problem+json body with a stable error code and a human-readable title. Example: ORDER_NOT_FOUND.

## Pagination
1. Pagination rule 3.1: Use cursor pagination with a next link; never expose page numbers. Default page size 50, maximum 200.
2. Pagination rule 3.2: Use cursor pagination with a next link; never expose page numbers. Example: 2026-11-17T14:05:00Z.
3. Pagination rule 3.3: Use cursor pagination with a next link; never expose page numbers. Example: { "amountCents": 1299, "currency": "USD" }.
4. Pagination rule 3.4: Use cursor pagination with a next link; never expose page numbers. Example: /v2/orders.
5. Pagination rule 3.5: Use cursor pagination with a next link; never expose page numbers. Replay the stored response for a repeated key.
6. Pagination rule 3.6: Use cursor pagination with a next link; never expose page numbers. Mask card numbers to the last four digits.
7. Pagination rule 3.7: Use cursor pagination with a next link; never expose page numbers. Example: orderLines, /order-lines.
8. Pagination rule 3.8: Use cursor pagination with a next link; never expose page numbers. Example: ORDER_NOT_FOUND.
9. Pagination rule 3.9: Use cursor pagination with a next link; never expose page numbers. Default page size 50, maximum 200.

## Dates and times
1. Dates and times rule 4.1: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: 2026-11-17T14:05:00Z.
2. Dates and times rule 4.2: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: { "amountCents": 1299, "currency": "USD" }.
3. Dates and times rule 4.3: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: /v2/orders.
4. Dates and times rule 4.4: Send timestamps in UTC as ISO 8601 with a Z suffix. Replay the stored response for a repeated key.
5. Dates and times rule 4.5: Send timestamps in UTC as ISO 8601 with a Z suffix. Mask card numbers to the last four digits.
6. Dates and times rule 4.6: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: orderLines, /order-lines.
7. Dates and times rule 4.7: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: ORDER_NOT_FOUND.
8. Dates and times rule 4.8: Send timestamps in UTC as ISO 8601 with a Z suffix. Default page size 50, maximum 200.
9. Dates and times rule 4.9: Send timestamps in UTC as ISO 8601 with a Z suffix. Example: 2026-11-17T14:05:00Z.

## Money fields
1. Money fields rule 5.1: Send money as an integer number of cents with a currency field. Example: { "amountCents": 1299, "currency": "USD" }.
2. Money fields rule 5.2: Send money as an integer number of cents with a currency field. Example: /v2/orders.
3. Money fields rule 5.3: Send money as an integer number of cents with a currency field. Replay the stored response for a repeated key.
4. Money fields rule 5.4: Send money as an integer number of cents with a currency field. Mask card numbers to the last four digits.
5. Money fields rule 5.5: Send money as an integer number of cents with a currency field. Example: orderLines, /order-lines.
6. Money fields rule 5.6: Send money as an integer number of cents with a currency field. Example: ORDER_NOT_FOUND.
7. Money fields rule 5.7: Send money as an integer number of cents with a currency field. Default page size 50, maximum 200.
8. Money fields rule 5.8: Send money as an integer number of cents with a currency field. Example: 2026-11-17T14:05:00Z.
9. Money fields rule 5.9: Send money as an integer number of cents with a currency field. Example: { "amountCents": 1299, "currency": "USD" }.

## Versioning
1. Versioning rule 6.1: Put the major version in the path and never break a published version. Example: /v2/orders.
2. Versioning rule 6.2: Put the major version in the path and never break a published version. Replay the stored response for a repeated key.
3. Versioning rule 6.3: Put the major version in the path and never break a published version. Mask card numbers to the last four digits.
4. Versioning rule 6.4: Put the major version in the path and never break a published version. Example: orderLines, /order-lines.
5. Versioning rule 6.5: Put the major version in the path and never break a published version. Example: ORDER_NOT_FOUND.
6. Versioning rule 6.6: Put the major version in the path and never break a published version. Default page size 50, maximum 200.
7. Versioning rule 6.7: Put the major version in the path and never break a published version. Example: 2026-11-17T14:05:00Z.
8. Versioning rule 6.8: Put the major version in the path and never break a published version. Example: { "amountCents": 1299, "currency": "USD" }.
9. Versioning rule 6.9: Put the major version in the path and never break a published version. Example: /v2/orders.

## Idempotency
1. Idempotency rule 7.1: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Replay the stored response for a repeated key.
2. Idempotency rule 7.2: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Mask card numbers to the last four digits.
3. Idempotency rule 7.3: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: orderLines, /order-lines.
4. Idempotency rule 7.4: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: ORDER_NOT_FOUND.
5. Idempotency rule 7.5: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Default page size 50, maximum 200.
6. Idempotency rule 7.6: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: 2026-11-17T14:05:00Z.
7. Idempotency rule 7.7: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: { "amountCents": 1299, "currency": "USD" }.
8. Idempotency rule 7.8: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Example: /v2/orders.
9. Idempotency rule 7.9: Accept an Idempotency-Key header on every POST and keep keys for 24 hours. Replay the stored response for a repeated key.

## Logging
1. Logging rule 8.1: Log the request ID, never the customer's name, email or address. Mask card numbers to the last four digits.
2. Logging rule 8.2: Log the request ID, never the customer's name, email or address. Example: orderLines, /order-lines.
3. Logging rule 8.3: Log the request ID, never the customer's name, email or address. Example: ORDER_NOT_FOUND.
4. Logging rule 8.4: Log the request ID, never the customer's name, email or address. Default page size 50, maximum 200.
5. Logging rule 8.5: Log the request ID, never the customer's name, email or address. Example: 2026-11-17T14:05:00Z.
6. Logging rule 8.6: Log the request ID, never the customer's name, email or address. Example: { "amountCents": 1299, "currency": "USD" }.
7. Logging rule 8.7: Log the request ID, never the customer's name, email or address. Example: /v2/orders.
8. Logging rule 8.8: Log the request ID, never the customer's name, email or address. Replay the stored response for a repeated key.
9. Logging rule 8.9: Log the request ID, never the customer's name, email or address. Mask card numbers to the last four digits.
