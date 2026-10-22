// Main entry point for the application
console.log('Hello, World!');
console.log('MCPMark CI/CD project running...');

// Basic health check endpoint simulation
if (require.main === module) {
  console.log('Server is running on port 3000');
}

module.exports = {
  name: 'mcpmark-cicd',
  version: '1.0.0',
  healthy: true
};
