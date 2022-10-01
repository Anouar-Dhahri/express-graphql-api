const express = require('express')
const graphql = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv');

const mongoConnect = require('./connection');

const PORT = process.env.PORT || 5000;
const schema = require('./graphql')

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(cors());

mongoConnect();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Server Working On PORT ${PORT}!`))