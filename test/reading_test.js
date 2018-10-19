const User = require('./user');

it('finds all users with a name of joe', (done) => {
  User.find({ name: 'Joe' })
  .then((users) => {
    // assert(users[0]._id.toString() === joe._id.toString());
    console.log(users[0].name.toString());
    done();
  });
});
