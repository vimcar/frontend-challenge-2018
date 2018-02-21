# Vimcar Coding Challenge

Welcome to the Vimcar Coding Challenge!

The challenge is here to get a basic understanding of your current knowledge and skills. We want to see how you think and solve common problems.

Feel free to use any frameworks/libs of your liking to achieve this.

## Rationale

Notice that this challenge has nothing to do with what we do, it's rather an experiment to see how you structure your application and how you solve typical problems.

## What should be done

We want to have the best shop! Each team provided their requirements for the new shop system. Everybody agrees that users must buy as much as possible. Of course we'll need a virtual shopping cart. They can add items. According to Accounting removing items hurts the bottom line. The user must not remove items from the cart. Marketing says filling out forms and spending money hurts the conversion rate. So NO FORMS! Stock is limited. That's why the Backend decided to create a stock management. It's a bit glitchy, but we'll need to believe what ever the backend service tells us.

We need the following features:

- When a user clicks on an item it should be added to their cart
- The user should see the number of items they are buying.
- Stick to the [design](https://github.com/vimcar/frontend-challenge/tree/master/design)

## Implementation details

To validate that there are enough items in stock, you should use the backend. We implemented a mock for `fetch`. You may use it in your implementation. It's located in [the `/api/mock.js` module](https://github.com/vimcar/frontend-challenge/tree/master/api/mock.js).

The API specification can be found [here](https://github.com/vimcar/frontend-challenge/tree/master/api.swagger.yml). You can use the online [Swagger editor](http://editor.swagger.io/) to view it.

## Rules

- You are allowed to use a quickstarter repo to get started quickly, e.g. [create-react-app](https://github.com/facebookincubator/create-react-app).
- Have fun!
