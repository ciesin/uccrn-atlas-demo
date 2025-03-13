import { createHash } from 'crypto';

// Get password from environment variable
const rawPassword = import.meta.env.VITE_APP_PASSWORD;
const storedHash = import.meta.env.VITE_APP_PASSWORD_HASH;

async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Initialize the correct hash
let CORRECT_HASH;

async function initializeHash() {
  if (rawPassword) {
    CORRECT_HASH = await hashString(rawPassword);
  } else {
    CORRECT_HASH = storedHash;
  }
  
  if (!CORRECT_HASH) {
    console.error('No password or hash configured!');
  }
}

// Initialize hash when module loads
initializeHash();

export async function verifyPassword(input) {
  if (!input) return false;
  const inputHash = await hashString(input);
  return inputHash === CORRECT_HASH;
}