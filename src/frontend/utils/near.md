# NEAR

![Banner](https://user-images.githubusercontent.com/64161383/133971770-4e8d4526-3175-4ad5-8265-fe5fc58389ab.png)

### function `init()`

> This function initializes the `near` module.

Tasks performed by this function:

- Initialize the `near` module.
- Adds the near object to the window object.
- Creates the `jobUnicornWalletConnection` object and adds the `jobUnicornWalletConnection` object to the window object.
- Gets the `accountId` from the `jobUnicornWalletConnection` object.
- Adds the `accountId` to the window object.

### function `getWalletConnection()`

> This function returns the `jobUnicornWalletConnection` object.

Tasks performed by this function:

- Gets the `jobUnicornWalletConnection` object from the window object and returns it.

### function `login()`

> This function logs in to the `jobUnicornWalletConnection` object.

Tasks performed by this function:

- Requests Sign In in to the `jobUnicornWalletConnection` object.

### function `logout()`

> This function logs out of the `jobUnicornWalletConnection` object.

Tasks performed by this function:

- Signs out of the `jobUnicornWalletConnection` object.
- Reloads the page.

### function `getAddress()`

> This function gets the address of the `jobUnicornWalletConnection` object.

Tasks performed by this function:

- Gets the address of the `jobUnicornWalletConnection` object.
- Returns the address.
