const fs = require("fs");
const path = require("path");

const FILE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (FILE_EXTENSIONS.includes(path.extname(file))) {
      callback(fullPath);
    }
  });
}

function transformFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const originalContent = content;

  // 1. Remove Twind import
  content = content.replace(
    /import\s+\{\s*tw\s*\}\s+from\s+['"]twind['"];?\n?/g,
    ""
  );

  // 2. Replace tw`...` with "..."
  content = content.replace(/tw`([^`]*)`/g, '"$1"');

  // 3. Replace single-line AND multi-line tw("...") or tw('...') or tw(`...`)
  content = content.replace(/tw\(\s*[`"']([\s\S]*?)["'`]\s*\)/g, (_, match) => {
    return `"${match.replace(/\s+/g, " ").trim()}"`;
  });

  // 4. Optional cleanup: className={"..."} → className="..."
  content = content.replace(/className=\{"([^"]+)"\}/g, 'className="$1"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Cleaned: ${filePath}`);
  }
}

const targetDir = path.resolve(__dirname, "./src");

if (!fs.existsSync(targetDir)) {
  console.error(`❌ Folder not found: ${targetDir}`);
  process.exit(1);
}

walkDir(targetDir, transformFile);
