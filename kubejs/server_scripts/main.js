// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
  event.remove({ output: 'createdeco:copper_coin', type: 'create:pressing' })
  event.remove({ output: 'createdeco:zinc_coin', type: 'create:pressing' })
  event.remove({ output: 'createdeco:brass_coin', type: 'create:pressing' })
  event.remove({ output: 'createdeco:gold_coin', type: 'create:pressing' })

  event.shapeless(Item.of('createdeco:copper_coin', 8), ['createdeco:zinc_coin'])
  event.shapeless(Item.of('createdeco:zinc_coin', 8), ['createdeco:brass_coin'])
  event.shapeless(Item.of('createdeco:brass_coin', 8), ['createdeco:gold_coin'])

  event.shapeless(Item.of('createdeco:zinc_coin'), ['8x createdeco:copper_coin'])
  event.shapeless(Item.of('createdeco:brass_coin'), ['8x createdeco:zinc_coin'])
  event.shapeless(Item.of('createdeco:gold_coin'), ['8x createdeco:brass_coin'])
})
