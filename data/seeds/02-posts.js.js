exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  knex.raw('SET foreign_key_checks = 0')
  knex('posts').truncate()
  knex.raw('SET foreign_key_checks = 1')
  return knex('posts').then(function() {
    // Inserts seed entries
    return knex('posts').insert([
      {
        image:
          'https://scontent-dfw5-1.cdninstagram.com/vp/8a25434ef469e272a7684b0e3f3e0b8c/5D5BFC12/t51.2885-15/e35/21227544_1783060938659766_6759646888833581056_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com',
        description: `blue hair; don't care`,
        stylist_id: 1
      },
      {
        image:
          'https://scontent-dfw5-1.cdninstagram.com/vp/8a25434ef469e272a7684b0e3f3e0b8c/5D5BFC12/t51.2885-15/e35/21227544_1783060938659766_6759646888833581056_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com',
        description: `green hair; don't care`,
        stylist_id: 1
      },
      {
        image:
          'https://scontent-dfw5-1.cdninstagram.com/vp/8a25434ef469e272a7684b0e3f3e0b8c/5D5BFC12/t51.2885-15/e35/21227544_1783060938659766_6759646888833581056_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com',
        description: `red hair; don't care`,
        stylist_id: 2
      },
      {
        image:
          'https://images.unsplash.com/photo-1553148441-04cabe5b224b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1526493699191-53c58c5b8a0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Check out our website www.thoughtcatalog.com.',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1555087053-481751a74579?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1465829284245-fc3c780208d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Woman with a violet flower',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1475179593777-bd12fd56b85d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description:
          'Read more: https://shinyhoney.com/blog-outfits-oversize-bow-sweater.html',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1485580260374-e6483971b029?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'My friend Steph on a walk north of the city.',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1552311986-d7b9d6195e88?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1546190864-90ae97f5cd96?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1545105865-cf853062a2a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1520349411565-88588b8f27e0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1554493379-b47370c5dc82?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1544075573-1b33d7f9eb53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Tonya',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1466709270977-7b387d9d3471?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lalaria Beach woman',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1551908349-8dae1c2eac85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1465832556179-1e3fb70a3df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description:
          'If you like and use my photos, I would love a small donation (even just $2 would help) to my GoFundMe account to buy back my stolen gear (yes, I lost everything!) Thanks! \r\n\r\nhttps://www.gofundme.com/buy-back-stolen-gear',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1490754299894-79dd4c779fc2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Hair In Her Face',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1552847708-3da3e8a50885?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'A woman getting her blood pressure tested',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1513201426121-060147930331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1549301115-03611ac0566c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1551861746-0e9443ac39b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description:
          'According to a 2018 McKinsey report, China boasts 114 of the world’s 147 female, self-made billionaires (America has 14). And almost 50% more women hold professional or technical jobs for every 100 men in the Philippines. Asia is one of the most progressive regions for women, yet stereotypes of what Asian women are like and look like persist. BBH Singapore’s ‘See Different’ collection of images seeks to change that by showing the true diversity and personality of women across the Asian region. Photo by @jazzquek.',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1495396204756-76405166b5af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'sunlight on floral face',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1526989131648-469efdb6ca07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1457040931721-53ca161dab33?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1546903353-4649964874f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'credit:\r\nwww.instagram.com/szvmanski',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1551950591-54ac6a98f437?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1552319150-3eb4cb9116b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      },
      {
        image:
          'https://images.unsplash.com/photo-1541957881519-cf7c7821b0c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY4Nzc5fQ',
        description: 'Lorem Ipsum',
        stylist_id: Math.trunc(Math.random() * 29 + 1)
      }
    ])
  })
}
