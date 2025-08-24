const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "index.js");
const distDir = path.join(__dirname, "dist");
const dest = path.join(distDir, "index.js");

// Log paths for debugging
console.log("Source file:", src);
console.log("Destination folder:", distDir);

try {
  // Make sure dist folder exists
  fs.mkdirSync(distDir, { recursive: true });

  // Copy index.js to dist/
  fs.copyFileSync(src, dest);

  console.log("✅ Built to dist/index.js");
} catch (err) {
  console.error("Build failed:", err);
  process.exit(1); // Fail CI if build fails
}

// List dist folder contents to verify
const files = fs.readdirSync(distDir);
console.log("Contents of dist folder:", files);
