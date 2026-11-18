import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotalCents, orderTotalCents } from "../src/order.js";

test("subtotal adds every line in cents", () => {
  assert.equal(subtotalCents([{ unitCents: 1299, qty: 2 }, { unitCents: 450, qty: 1 }]), 3048);
});

test("order total is the subtotal for now", () => {
  assert.equal(orderTotalCents({ lines: [{ unitCents: 2500, qty: 1 }] }), 2500);
});
