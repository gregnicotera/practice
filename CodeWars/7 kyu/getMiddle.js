function getMiddle(s)
{
  return s.length % 2 === 1 ? s.charAt(Math.ceil(s.length / 2 - 1)) : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}