const app = require('./utils/app')
const getUsers = require('./routes/getUsers')

const PORT = process.env.PORT || 8080;
app.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
