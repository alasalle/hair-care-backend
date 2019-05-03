exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  knex.raw('SET foreign_key_checks = 0')
  knex('stylists').truncate()
  knex.raw('SET foreign_key_checks = 1')
  return knex('stylists').then(function() {
    // Inserts seed entries
    return knex('stylists').insert([
      {
        google_id: '107419806416882998583',
        profile_picture:
          'https://lh4.googleusercontent.com/-1ySoZYJfqlY/AAAAAAAAAAI/AAAAAAAAN0M/LYiojDv84UA/photo.jpg',
        stylist_name: 'Joshua Gonzalez',
        first_name: 'Joshua',
        last_name: 'Gonzalez',
        bio: 'shrimp',
        location: 'San Antonio, TX',
        stylist: true
      },
      {
        google_id: '103157180982144344794',
        profile_picture:
          'https://lh3.googleusercontent.com/-md_I4afizO4/AAAAAAAAAAI/AAAAAAAAAQA/egtlYqloMZE/photo.jpg',
        stylist_name: 'shrimp',
        first_name: 'shrimp',
        last_name: '',
        bio: 'cats',
        location: 'San Antonio, TX',
        stylist: false
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1555087053-481751a74579?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'dascal',
        first_name: 'dascal',
        last_name: '',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1465829284245-fc3c780208d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'dtopkin1',
        first_name: 'd',
        last_name: 'topkin',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1475179593777-bd12fd56b85d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'tamarabellis',
        first_name: 'tamara',
        last_name: 'bellis',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1485580260374-e6483971b029?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'seanpollock',
        first_name: 'sean',
        last_name: 'pollock',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'gift',
        first_name: 'gift',
        last_name: '',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1552311986-d7b9d6195e88?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: '_blahblake',
        first_name: 'blah',
        last_name: 'blake',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1546190864-90ae97f5cd96?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'mrmcbuckets',
        first_name: 'mrmc',
        last_name: 'buckets',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1545105865-cf853062a2a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'trmathis',
        first_name: 'tr',
        last_name: 'mathis',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1520349411565-88588b8f27e0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'neko_tamo',
        first_name: 'neko',
        last_name: 'tamo',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1554493379-b47370c5dc82?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'nayonjan',
        first_name: 'nayon',
        last_name: 'jan',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1544075573-1b33d7f9eb53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'zvandrei',
        first_name: 'z',
        last_name: 'vandrei',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1466709270977-7b387d9d3471?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'alexb',
        first_name: 'alex',
        last_name: 'b',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1551908349-8dae1c2eac85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'jamiegoesoutside',
        first_name: 'jamie',
        last_name: 'goesoutside',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1465832556179-1e3fb70a3df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'guusbaggermans',
        first_name: 'guus',
        last_name: 'baggermans',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'josephgardnerphotography',
        first_name: 'joseph',
        last_name: 'gardner',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1490754299894-79dd4c779fc2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'chadmadden',
        first_name: 'chad',
        last_name: 'madden',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1552847708-3da3e8a50885?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'madridveganservices',
        first_name: 'madrid',
        last_name: 'vegan',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'hush52',
        first_name: 'hush52',
        last_name: '',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1513201426121-060147930331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'kalljet',
        first_name: 'kall',
        last_name: 'jet',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1549301115-03611ac0566c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'vbchr',
        first_name: 'vbchr',
        last_name: '',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1551861746-0e9443ac39b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'bbh_singapore',
        first_name: 'bbh',
        last_name: 'singapore',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1495396204756-76405166b5af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'domenika',
        first_name: 'domenika',
        last_name: '',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1526989131648-469efdb6ca07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'dollargill',
        first_name: 'dollar',
        last_name: 'gill',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1457040931721-53ca161dab33?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'brookecagle',
        first_name: 'brooke',
        last_name: 'cagle',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1546903353-4649964874f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'szvmanski',
        first_name: 'szv',
        last_name: 'manski',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1551950591-54ac6a98f437?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'zyrex',
        first_name: 'zyrex',
        last_name: '',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1552319150-3eb4cb9116b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'anafrancisconi',
        first_name: 'ana',
        last_name: 'francisconi',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      },
      {
        google_id: (
          '10' +
          Math.trunc(Math.random() * 100000000000000000) +
          Math.trunc(Math.random() * 10)
        ).split`.`.join``,
        profile_picture:
          'https://images.unsplash.com/photo-1541957881519-cf7c7821b0c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        stylist_name: 'katryuk',
        first_name: 'katryuk',
        last_name: '',
        bio: '',
        location: 'Austin, TX',
        stylist: true
      }
    ])
  })
}
