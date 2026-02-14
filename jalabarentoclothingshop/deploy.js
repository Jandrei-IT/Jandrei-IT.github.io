
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, 'dist');

if (!fs.existsSync(buildDir)) {
  console.error('Build directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

console.log('Deploying to gh-pages...');

try {
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  console.log('Deployment to gh-pages successful!');
} catch (err) {
  console.error('Deployment failed:', err);
  process.exit(1);
}
