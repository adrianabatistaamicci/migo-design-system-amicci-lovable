
const fs = require('fs');
const path = require('path');

// Função para criar diretórios recursivamente
function createDirectoryRecursive(targetDir) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  const baseDir = '.';

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      if (!fs.existsSync(curDir)) {
        fs.mkdirSync(curDir);
      }
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }

    return curDir;
  }, initDir);
}

// Diretórios de origem e destino
const sourceDir = path.resolve(__dirname, '../src/components/ui');
const sourceLibDir = path.resolve(__dirname, '../src/lib');
const customComponentsSourcePaths = [
  path.resolve(__dirname, '../src/components/CodeBlock.tsx'),
  path.resolve(__dirname, '../src/components/ComponentCard.tsx'),
  path.resolve(__dirname, '../src/components/ComponentPreview.tsx')
];

const libraryComponentsSourceDir = path.resolve(__dirname, '../src/components/library-components');

const targetUiDir = path.resolve(__dirname, './src/components/ui');
const targetLibDir = path.resolve(__dirname, './src/lib');
const targetComponentsDir = path.resolve(__dirname, './src/components');
const targetLibraryComponentsDir = path.resolve(__dirname, './src/components/library-components');

// Criar diretórios de destino
createDirectoryRecursive(targetUiDir);
createDirectoryRecursive(targetLibDir);
createDirectoryRecursive(targetComponentsDir);
createDirectoryRecursive(targetLibraryComponentsDir);

// Copiar componentes UI
fs.readdirSync(sourceDir).forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetUiDir, file);
  
  if (fs.statSync(sourcePath).isFile()) {
    // Ler o conteúdo do arquivo
    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Adaptar importações para funcionarem no pacote
    content = content.replace(/from "@\/components\//g, 'from "../');
    content = content.replace(/from "@\/lib\//g, 'from "../../lib/');
    content = content.replace(/from "@\/hooks\//g, 'from "../../hooks/');
    content = content.replace(/from "@\/contexts\//g, 'from "../../contexts/');
    
    // Escrever arquivo com conteúdo adaptado
    fs.writeFileSync(targetPath, content);
    console.log(`Copiado e adaptado: ${file}`);
  }
});

// Copiar utilitários
fs.readdirSync(sourceLibDir).forEach(file => {
  const sourcePath = path.join(sourceLibDir, file);
  const targetPath = path.join(targetLibDir, file);
  
  if (fs.statSync(sourcePath).isFile()) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copiado: ${file}`);
  }
});

// Copiar componentes personalizados
customComponentsSourcePaths.forEach(sourcePath => {
  const fileName = path.basename(sourcePath);
  const targetPath = path.join(targetComponentsDir, fileName);
  
  if (fs.existsSync(sourcePath)) {
    // Ler o conteúdo do arquivo
    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Adaptar importações para funcionarem no pacote
    content = content.replace(/from '@\/components\//g, 'from \'./');
    content = content.replace(/from "@\/components\//g, 'from "./');
    content = content.replace(/from '@\/lib\//g, 'from \'../lib/');
    content = content.replace(/from "@\/lib\//g, 'from "../lib/');
    content = content.replace(/from '@\/hooks\//g, 'from \'../hooks/');
    content = content.replace(/from "@\/hooks\//g, 'from "../hooks/');
    content = content.replace(/from '@\/contexts\//g, 'from \'../contexts/');
    content = content.replace(/from "@\/contexts\//g, 'from "../contexts/');
    
    // Escrever arquivo com conteúdo adaptado
    fs.writeFileSync(targetPath, content);
    console.log(`Copiado e adaptado: ${fileName}`);
  } else {
    console.warn(`Arquivo não encontrado: ${fileName}`);
  }
});

// Copiar componentes de biblioteca (library-components)
if (fs.existsSync(libraryComponentsSourceDir)) {
  fs.readdirSync(libraryComponentsSourceDir).forEach(file => {
    const sourcePath = path.join(libraryComponentsSourceDir, file);
    const targetPath = path.join(targetLibraryComponentsDir, file);
    
    if (fs.statSync(sourcePath).isFile()) {
      // Ler o conteúdo do arquivo
      let content = fs.readFileSync(sourcePath, 'utf8');
      
      // Adaptar importações para funcionarem no pacote
      content = content.replace(/from '@\/components\//g, 'from \'../');
      content = content.replace(/from "@\/components\//g, 'from "../');
      content = content.replace(/from '@\/lib\//g, 'from \'../../lib/');
      content = content.replace(/from "@\/lib\//g, 'from "../../lib/');
      content = content.replace(/from '@\/hooks\//g, 'from \'../../hooks/');
      content = content.replace(/from "@\/hooks\//g, 'from "../../hooks/');
      content = content.replace(/from '@\/contexts\//g, 'from \'../../contexts/');
      content = content.replace(/from "@\/contexts\//g, 'from "../../contexts/');
      
      // Escrever arquivo com conteúdo adaptado
      fs.writeFileSync(targetPath, content);
      console.log(`Copiado e adaptado: ${file}`);
    }
  });
} else {
  console.warn('Diretório library-components não encontrado');
}

console.log('Todos os componentes foram copiados e adaptados.');
