const fs = require('fs');
const path = require('path');

// 源文件目录
const sourceDir = path.join(__dirname, '../dist');

// 目标目录 
const targetDir = path.join(__dirname, '../node_modules/vue3-scrolling-number');

// 如果目标目录不存在则创建
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// 递归拷贝目录
function copyDir(source, target) {
  const files = fs.readdirSync(source);

  files.forEach(fileName => {
    const file = path.join(source, fileName);
    const targetFile = path.join(target, fileName);

    // 递归目录
    if (fs.lstatSync(file).isDirectory()) {
      if (!fs.existsSync(targetFile)) {
        fs.mkdirSync(targetFile);
      }
      copyDir(file, targetFile);
    } else {
      // 拷贝文件
      fs.copyFileSync(file, targetFile);
    }
  });
}

// 拷贝操作
copyDir(sourceDir, targetDir);


const sourcePackage = '../package.json';
fs.copyFileSync(sourcePackage, targetDir);
