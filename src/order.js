// Order totals for Harbor & Pine Supply (fictional). All money is integer cents.

export function subtotalCents(lines) {
  return lines.reduce((sum, line) => sum + line.unitCents * line.qty, 0);
}

export function orderTotalCents(order) {
  return subtotalCents(order.lines);
}
