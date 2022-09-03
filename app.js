const express = require(`express`);
const app = express(); // express funciton creates an Express application
const PORT = 3000;
// vars and decs at the top of file 

//first route - this and every other route we define in our app will accept a call back as the 2nd argument
//After `/home` below. the function will be called when someone makes a request to `/home` It will alwasy take the 3 params request, respons, next)
//in the future will

//express gets the folders?

// MIDDLEWARE ALWAYS COMES beftween declarations and routes
//===========MIDDLEWARE ================
app.use(express.static(`public`));
app.use(express.static(`views`));


//=========================================


//routes are the 2nd to last elements in your app.js


// ==========ROUTES ========================
//next() means go to the nexct process
// end point for url
app.get(`/`, (req, res, next) =>{
    res.sendFile(__dirname + `/views/home.html`);
  
});


app.get(`/about`, (req, res, next) =>{
    res.sendFile(__dirname + `/views/about.html`);

});

app.get(`/works`, (req, res, next) =>{
    res.sendFile(__dirname + `/views/works.html`);

});


app.get(`/gallery`, (req, res, next) =>{
    res.sendFile(__dirname + `/views/gallery.html`);

});




app.listen(PORT || 3000, () => console.log('listening on port 3000! '));

