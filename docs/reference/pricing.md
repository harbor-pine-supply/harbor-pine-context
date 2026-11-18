# Pricing rules

These rules apply to every order total. All amounts are integer cents.

## Money
- Store and calculate every amount as an integer number of cents.
- Format for display only at the edge (receipts, emails, the storefront).
- Never round in the middle of a calculation; round once, at the step that says so.

## Shipping
- Orders with a subtotal of 7500 cents ($75.00) or more ship free.
- Below that, shipping is a flat 895 cents ($8.95).
- Shipping is added after discounts and before tax.
- Oversize items (tents over 4 people, kayaks) add 1500 cents each, even when shipping is free.

## Discounts
- Discounts are stored in basis points (100 bp = 1%).
- A discount applies to the subtotal, not to shipping.
- Round a discount down to the whole cent: Math.floor((subtotalCents * bp) / 10000).
- Only one discount code per order. Staff discounts don't stack with codes.

## Bulk pricing
| Quantity of one SKU | Price break |
|---|---|
| 1-9 | list price |
| 10-24 | 5% off that line |
| 25-49 | 8% off that line |
| 50+ | 12% off that line (needs a sales approval code) |

## Gift cards
- Gift cards pay for the total after tax.
- A gift card can't be used to buy another gift card.
- Remaining balance stays on the card; never refund it as cash.

## Returns
- Refund the line price actually paid, after its share of any discount.
- Shipping is refunded only when the return is our mistake.
- Oversize surcharges are never refunded after 30 days.

## Tax
- Tax is calculated by the tax service, never in this repo.
- Send the taxable amount (subtotal - discount + shipping) in cents.
