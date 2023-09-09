export default function useGenerateUuid() {
  function randomHex(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
  }

  const timePart = randomHex(8);
  const clockSeqPart = randomHex(4);
  const nodePart = randomHex(12);

  const version = "4";

  const variant = "8";
  const uuid = `${timePart}-${clockSeqPart}-${version}${nodePart.substr(
    0,
    3
  )}-${variant}${nodePart.substr(3)}`;

  return uuid;
}
