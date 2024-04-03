const express = require('express');
const app = express();

// Import database connection
const db = require('./db');

// Import routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(express.json());

// Mount routes
app.use('/admin', adminRoutes);
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));