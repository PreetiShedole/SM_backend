import express from 'expres';
const app = express();

app.get('/' (req,res) => {
    res.send('server is ready');
  });

  const PORT = process.env.PORT|| 4000;

  app.listen(PORT,() => {
    console.log('Server at http://localhost: ${PORT}');
  }
);