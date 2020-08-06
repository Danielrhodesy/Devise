exports.seed = function (knex, Promise) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {id: 99901, name: 'Daniel Aardvark', email: 'aardvark@example.org'},
          {id: 99902, name: 'Seamus Baboon', email: 'baboon@example.org'},
          {id: 99903, name: 'Katie Capybara', email: 'capybara@example.org'}
         
        ])
      })
  }