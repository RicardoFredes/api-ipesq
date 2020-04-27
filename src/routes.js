module.exports = (router) => router
  .get('/users', 'UsersController@list')
  .get('/users/:id', 'UsersController@show')
  .post('/users', 'UsersController@save')
  .put('/users/:id', 'UsersController@update')
  .delete('/users/:id', 'UsersController@remove')
