const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

// Import Routes
const authRoutes = require('./routes/auth_routes');
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
