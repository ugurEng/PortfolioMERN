const express = require('express');
const mongoose=require('mongoose')
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const mentoringRouter = require('./routes/mentoring');
const mernstackRouter = require('./routes/mernstack');
const shopifyRouter = require('./routes/shopify');
const projectsRouter = require('./routes/projects');


//route dosyasindan import edilen users dosyasi burada islenerek DB ye gonderiliyor


app.use('/mentoring', mentoringRouter);
app.use('/mernstack', mernstackRouter);
app.use('/shopify', shopifyRouter);
app.use('/projects', projectsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
