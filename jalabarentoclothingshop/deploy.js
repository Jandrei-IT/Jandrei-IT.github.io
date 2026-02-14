
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const deployDir = path.join(__dirname, 'jalabarentoclothingshop-build');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(child => {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Copying dist files to jalabarentoclothingshop-build folder...');
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true, force: true });
}
copyRecursiveSync(distDir, deployDir);
console.log('✅ Files copied successfully');

console.log('Committing and pushing to main...');
try {
  execSync('git add .', { stdio: 'inherit' });
  // Always create a commit, even if nothing changed
  execSync('git commit --allow-empty -m "Build: Deploy React app to jalabarentoclothingshop"', { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });
  console.log('Deployment to main branch successful!');
} catch (err) {
  console.error('Deploy failed:', err.message);
}
