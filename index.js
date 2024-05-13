function mergeKLists(lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    const first = lists.shift();
    const second = lists.shift();
    const merged = mergeTwoLists(first, second);
    lists.push(merged);
  }
  return lists[0];
}
