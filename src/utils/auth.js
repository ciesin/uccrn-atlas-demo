import { createHash } from 'crypto';

// Get password from environment variable
const rawPassword = import.meta.env.VITE_APP_PASSWORD;
const storedHash = import.meta.env.VITE_APP_PASSWORD_HASH;

// Hash the raw password if provided, otherwise use stored hash
const CORRECT_HASH = rawPassword 
  ? createHash('sha256').update(rawPassword).digest('hex')
  : storedHash;

if (!CORRECT_HASH) {
  console.error('No password or hash configured!');
}

export async function verifyPassword(input) {
  if (!input) return false;
  const inputHash = createHash('sha256').update(input).digest('hex');
  return inputHash === CORRECT_HASH;
}