const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distDir = path.join(__dirname, 'dist');
const targetDir = path.join(__dirname);

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

console.log('Copying dist files to jalabarentoclothingshop folder...');
copyRecursiveSync(distDir, targetDir);
console.log('✅ Files copied successfully');

console.log('Committing and pushing to main...');
try {
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Build: Deploy React app to jalabarentoclothingshop"', { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });
  console.log('Deployment to main branch successful!');
} catch (err) {
  console.error('Deploy failed:', err.message);
}
