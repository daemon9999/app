export const base64ToFile = (base64String: string, fileName: string) => {
  // Split the Base64 string into metadata and data
  const [metadata, base64Data] = base64String.split(",");

  // Extract MIME type from metadata
  const mimeMatch = metadata.match(/:(.*?);/);
  const mimeType = mimeMatch ? mimeMatch[1] : "application/octet-stream";

  // Decode Base64 string to binary string
  const binaryString = atob(base64Data);

  // Create a Uint8Array to hold the binary data
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create and return the File object
  return new File([bytes], fileName, { type: mimeType });
};
