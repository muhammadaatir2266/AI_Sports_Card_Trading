#!/usr/bin/env node

/**
 * Simple setup script to create .env.local file
 * Run with: node setup-env.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const envPath = path.join(__dirname, '.env.local');

console.log('\n🔐 AI Sports Card Trading Dashboard - Environment Setup\n');
console.log('This script will help you create your .env.local file with admin credentials.\n');

// Check if .env.local already exists
if (fs.existsSync(envPath)) {
  console.log('⚠️  Warning: .env.local file already exists!');
  rl.question('Do you want to overwrite it? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      createEnvFile();
    } else {
      console.log('\n✅ Setup cancelled. Existing .env.local file preserved.\n');
      rl.close();
    }
  });
} else {
  createEnvFile();
}

function createEnvFile() {
  rl.question('Enter admin username (default: admin): ', (username) => {
    const adminUsername = username.trim() || 'admin';
    
    rl.question('Enter admin password (default: sports_card_admin_2024): ', (password) => {
      const adminPassword = password.trim() || 'sports_card_admin_2024';
      
      const envContent = `# Admin Authentication Credentials
# Generated on ${new Date().toISOString()}
NEXT_PUBLIC_ADMIN_USERNAME=${adminUsername}
NEXT_PUBLIC_ADMIN_PASSWORD=${adminPassword}
`;

      fs.writeFileSync(envPath, envContent);
      
      console.log('\n✅ Success! .env.local file created with the following credentials:');
      console.log(`   Username: ${adminUsername}`);
      console.log(`   Password: ${'*'.repeat(adminPassword.length)}\n`);
      console.log('📝 You can edit .env.local file anytime to change your credentials.');
      console.log('⚠️  Remember: Never commit .env.local to version control!\n');
      
      rl.close();
    });
  });
}

