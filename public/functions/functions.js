export function typingOnlyNumber(e) {
  const value = e.target.value;
  const onlyNumber = value.replace(/[^0-9]/g, '');
  if (value !== onlyNumber) {
    e.target.value = onlyNumber;
  }
}
