async function generateHash(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const password = process.argv[2];
if (!password) {
  console.error('Please provide a password as an argument');
  process.exit(1);
}

generateHash(password).then(hash => {
  console.log('Password hash:', hash);
});