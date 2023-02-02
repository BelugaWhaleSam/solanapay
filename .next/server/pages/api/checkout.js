"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ "bs58":
/*!***********************!*\
  !*** external "bs58" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),

/***/ "@metaplex-foundation/js":
/*!******************************************!*\
  !*** external "@metaplex-foundation/js" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@metaplex-foundation/js");;

/***/ }),

/***/ "@solana/spl-token":
/*!************************************!*\
  !*** external "@solana/spl-token" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@solana/spl-token");;

/***/ }),

/***/ "(api)/./pages/api/checkout.ts":
/*!*******************************!*\
  !*** ./pages/api/checkout.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/spl-token */ \"@solana/spl-token\");\n/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metaplex-foundation/js */ \"@metaplex-foundation/js\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs58 */ \"bs58\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__]);\n([_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Update these variables!\n// This is returned by nft-upload/upload.js\nconst METADATA_URI = \"https://arweave.net/BfKZgaKbzG9hg61-fMjCbZvfhrQjyDGnAEjY4mjsOso\";\n// Devnet 'fake' USDC, you can get these tokens from https://spl-token-faucet.com/\nconst USDC_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr\");\n// Mainnet USDC, uncomment if using mainnet\n// const USDC_ADDRESS = new PublicKey(\"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\")\n// Connection endpoint, switch to a mainnet RPC if using mainnet\nconst ENDPOINT = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.clusterApiUrl)('devnet');\n// This is the name your created NFT will have. Other metadata comes from METADATA_URI\nconst NFT_NAME = \"Video NFT\";\n// The amount to charge in USDC\nconst PRICE_USDC = 0.1;\nfunction get(res) {\n    res.status(200).json({\n        label: \"My Store\",\n        icon: \"https://solana.com/src/img/branding/solanaLogoMark.svg\"\n    });\n}\nasync function postImpl(account) {\n    const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Connection(ENDPOINT);\n    // Get the shop keypair from the environment variable\n    const shopPrivateKey = \"3rTqFycRK7URNXihwZheXG5i4byaY94fUXE9FdRCZsvjRzR7sGUGhGJsGQc3oV7nkJoHyTcA963qayq2dcvxtdsa\" /*process.env.SHOP_PRIVATE_KEY*/ ;\n    if (!shopPrivateKey) throw new Error('SHOP_PRIVATE_KEY not found');\n    const shopKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Keypair.fromSecretKey(bs58__WEBPACK_IMPORTED_MODULE_3___default().decode(shopPrivateKey));\n    // Initialise Metaplex with our shop keypair\n    const metaplex = _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__.Metaplex.make(connection).use((0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__.keypairIdentity)(shopKeypair));\n    const nfts = metaplex.nfts();\n    // The mint needs to sign the transaction, so we generate a new keypair for it\n    const mintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Keypair.generate();\n    // Create a transaction builder to create the NFT\n    const transactionBuilder = await nfts.builders().create({\n        uri: METADATA_URI,\n        name: NFT_NAME,\n        tokenOwner: account,\n        updateAuthority: shopKeypair,\n        sellerFeeBasisPoints: 100,\n        useNewMint: mintKeypair\n    });\n    // Next we create an instruction to transfer USDC from the buyer to the shop\n    // This will be added to the create NFT transaction\n    // Get the buyer's USDC address\n    const fromUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.getOrCreateAssociatedTokenAccount)(connection, shopKeypair, USDC_ADDRESS, account);\n    // Get the shop's USDC address\n    const toUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.getOrCreateAssociatedTokenAccount)(connection, shopKeypair, USDC_ADDRESS, shopKeypair.publicKey);\n    const usdcMint = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.getMint)(connection, USDC_ADDRESS);\n    const decimals = usdcMint.decimals;\n    const usdcTransferInstruction = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.createTransferCheckedInstruction)(fromUsdcAddress.address, USDC_ADDRESS, toUsdcAddress.address, account, PRICE_USDC * 10 ** decimals, decimals);\n    // Create a guest identity for buyer, so they will be a required signer for the transaction\n    const identitySigner = new _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_2__.GuestIdentityDriver(account);\n    // Add the USDC payment to the NFT transaction\n    transactionBuilder.prepend({\n        instruction: usdcTransferInstruction,\n        signers: [\n            identitySigner\n        ]\n    });\n    // transactionBuilder.setFeePayer(payerKeypair)\n    // Convert to transaction\n    const latestBlockhash = await connection.getLatestBlockhash();\n    const transaction = transactionBuilder.toTransaction(latestBlockhash);\n    // Partially sign the transaction, as the shop and the mint\n    // The account is also a required signer, but they'll sign it with their wallet after we return it\n    transaction.sign(shopKeypair, mintKeypair);\n    // Serialize the transaction and convert to base64 to return it\n    const serializedTransaction = transaction.serialize({\n        requireAllSignatures: false // account is a missing signature\n    });\n    const base64 = serializedTransaction.toString('base64');\n    const message = \"Mint your NFT Video!\";\n    // Return the serialized transaction\n    return {\n        transaction: base64,\n        message\n    };\n}\nasync function post(req, res) {\n    const { account  } = req.body;\n    console.log(req.body);\n    if (!account) {\n        res.status(400).json({\n            error: \"No account provided\"\n        });\n        return;\n    }\n    try {\n        const mintOutputData = await postImpl(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(account));\n        res.status(200).json(mintOutputData);\n        return;\n    } catch (error) {\n        account;\n        console.error(error);\n        res.status(500).json({\n            error: 'error creating transaction'\n        });\n        return;\n    }\n}\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        return get(res);\n    } else if (req.method === \"POST\") {\n        return await post(req, res);\n    } else {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFLLEVBQUUsQ0FBcUI7UUFBQyxDQUFDO1FBQ3JELE1BQU07SUFDUixDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLGNBQWMsR0FBRyxLQUFLLENBQUNuRCxRQUFRLENBQUMsR0FBRyxDQUFDbkIsc0RBQVMsQ0FBQ29CLE9BQU87UUFDM0ROLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDc0QsY0FBYztRQUNuQyxNQUFNO0lBQ1IsQ0FBQyxDQUFDLEtBQUssRUFBRUQsS0FBSyxFQUFFLENBQUNqRDtRQUFBQSxPQUFPO1FBQ3RCK0MsT0FBTyxDQUFDRSxLQUFLLENBQUNBLEtBQUs7UUFDbkJ2RCxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNxRCxLQUFLLEVBQUUsQ0FBNEI7UUFBQyxDQUFDO1FBQzVELE1BQU07SUFDUixDQUFDO0FBQ0gsQ0FBQztBQUVjLGVBQWVFLE9BQU8sQ0FDbkNOLEdBQW1CLEVBQ25CbkQsR0FBNEQsRUFDNUQsQ0FBQztJQUNELEVBQUUsRUFBRW1ELEdBQUcsQ0FBQ08sTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQzNELEdBQUcsQ0FBQ0MsR0FBRztJQUNoQixDQUFDLE1BQU0sRUFBRSxFQUFFbUQsR0FBRyxDQUFDTyxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQ1IsSUFBSSxDQUFDQyxHQUFHLEVBQUVuRCxHQUFHO0lBQzVCLENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxDQUFDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNxRCxLQUFLLEVBQUUsQ0FBb0I7UUFBQyxDQUFDO0lBQzdELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kY3NzLXR5cGVzY3JpcHQtc3RhcnRlci8uL3BhZ2VzL2FwaS9jaGVja291dC50cz8zMTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBLZXlwYWlyLCBQdWJsaWNLZXkgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCJcbmltcG9ydCB7IGdldE9yQ3JlYXRlQXNzb2NpYXRlZFRva2VuQWNjb3VudCwgY3JlYXRlVHJhbnNmZXJDaGVja2VkSW5zdHJ1Y3Rpb24sIGdldE1pbnQgfSBmcm9tIFwiQHNvbGFuYS9zcGwtdG9rZW5cIlxuaW1wb3J0IHsgR3Vlc3RJZGVudGl0eURyaXZlciwga2V5cGFpcklkZW50aXR5LCBNZXRhcGxleCB9IGZyb20gXCJAbWV0YXBsZXgtZm91bmRhdGlvbi9qc1wiXG5pbXBvcnQgYmFzZTU4IGZyb20gJ2JzNTgnXG5cbi8vIFVwZGF0ZSB0aGVzZSB2YXJpYWJsZXMhXG4vLyBUaGlzIGlzIHJldHVybmVkIGJ5IG5mdC11cGxvYWQvdXBsb2FkLmpzXG5jb25zdCBNRVRBREFUQV9VUkkgPSBcImh0dHBzOi8vYXJ3ZWF2ZS5uZXQvQmZLWmdhS2J6RzloZzYxLWZNakNiWnZmaHJRanlER25BRWpZNG1qc09zb1wiXG5cbi8vIERldm5ldCAnZmFrZScgVVNEQywgeW91IGNhbiBnZXQgdGhlc2UgdG9rZW5zIGZyb20gaHR0cHM6Ly9zcGwtdG9rZW4tZmF1Y2V0LmNvbS9cbmNvbnN0IFVTRENfQUREUkVTUyA9IG5ldyBQdWJsaWNLZXkoXCJHaDlad0VtZExKOERzY0tOVGtUcVBiTndMTk5CanVTemFHOVZwMktHdEtKclwiKVxuXG4vLyBNYWlubmV0IFVTREMsIHVuY29tbWVudCBpZiB1c2luZyBtYWlubmV0XG4vLyBjb25zdCBVU0RDX0FERFJFU1MgPSBuZXcgUHVibGljS2V5KFwiRVBqRldkZDVBdWZxU1NxZU0ycU4xeHp5YmFwQzhHNHdFR0drWnd5VER0MXZcIilcblxuLy8gQ29ubmVjdGlvbiBlbmRwb2ludCwgc3dpdGNoIHRvIGEgbWFpbm5ldCBSUEMgaWYgdXNpbmcgbWFpbm5ldFxuY29uc3QgRU5EUE9JTlQgPSBjbHVzdGVyQXBpVXJsKCdkZXZuZXQnKVxuXG4vLyBUaGlzIGlzIHRoZSBuYW1lIHlvdXIgY3JlYXRlZCBORlQgd2lsbCBoYXZlLiBPdGhlciBtZXRhZGF0YSBjb21lcyBmcm9tIE1FVEFEQVRBX1VSSVxuY29uc3QgTkZUX05BTUUgPSBcIlZpZGVvIE5GVFwiXG5cbi8vIFRoZSBhbW91bnQgdG8gY2hhcmdlIGluIFVTRENcbmNvbnN0IFBSSUNFX1VTREMgPSAwLjFcblxudHlwZSBJbnB1dERhdGEgPSB7XG4gIGFjY291bnQ6IHN0cmluZyxcbn1cblxudHlwZSBHZXRSZXNwb25zZSA9IHtcbiAgbGFiZWw6IHN0cmluZyxcbiAgaWNvbjogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBQb3N0UmVzcG9uc2UgPSB7XG4gIHRyYW5zYWN0aW9uOiBzdHJpbmcsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgUG9zdEVycm9yID0ge1xuICBlcnJvcjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIGdldChyZXM6IE5leHRBcGlSZXNwb25zZTxHZXRSZXNwb25zZT4pIHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIGxhYmVsOiBcIk15IFN0b3JlXCIsXG4gICAgaWNvbjogXCJodHRwczovL3NvbGFuYS5jb20vc3JjL2ltZy9icmFuZGluZy9zb2xhbmFMb2dvTWFyay5zdmdcIixcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdEltcGwoYWNjb3VudDogUHVibGljS2V5KTogUHJvbWlzZTxQb3N0UmVzcG9uc2U+IHtcbiAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKEVORFBPSU5UKVxuXG4gIC8vIEdldCB0aGUgc2hvcCBrZXlwYWlyIGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlXG4gIGNvbnN0IHNob3BQcml2YXRlS2V5ID0gXCIzclRxRnljUks3VVJOWGlod1poZVhHNWk0YnlhWTk0ZlVYRTlGZFJDWnN2alJ6UjdzR1VHaEdKc0dRYzNvVjdua0pvSHlUY0E5NjNxYXlxMmRjdnh0ZHNhXCIvKnByb2Nlc3MuZW52LlNIT1BfUFJJVkFURV9LRVkqL1xuICBpZiAoIXNob3BQcml2YXRlS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ1NIT1BfUFJJVkFURV9LRVkgbm90IGZvdW5kJylcbiAgY29uc3Qgc2hvcEtleXBhaXIgPSBLZXlwYWlyLmZyb21TZWNyZXRLZXkoYmFzZTU4LmRlY29kZShzaG9wUHJpdmF0ZUtleSkpXG5cbiAgLy8gSW5pdGlhbGlzZSBNZXRhcGxleCB3aXRoIG91ciBzaG9wIGtleXBhaXJcbiAgY29uc3QgbWV0YXBsZXggPSBNZXRhcGxleFxuICAgIC5tYWtlKGNvbm5lY3Rpb24pXG4gICAgLnVzZShrZXlwYWlySWRlbnRpdHkoc2hvcEtleXBhaXIpKVxuXG4gIGNvbnN0IG5mdHMgPSBtZXRhcGxleC5uZnRzKClcblxuICAvLyBUaGUgbWludCBuZWVkcyB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiwgc28gd2UgZ2VuZXJhdGUgYSBuZXcga2V5cGFpciBmb3IgaXRcbiAgY29uc3QgbWludEtleXBhaXIgPSBLZXlwYWlyLmdlbmVyYXRlKClcblxuICAvLyBDcmVhdGUgYSB0cmFuc2FjdGlvbiBidWlsZGVyIHRvIGNyZWF0ZSB0aGUgTkZUXG4gIGNvbnN0IHRyYW5zYWN0aW9uQnVpbGRlciA9IGF3YWl0IG5mdHMuYnVpbGRlcnMoKS5jcmVhdGUoe1xuICAgIHVyaTogTUVUQURBVEFfVVJJLCAvLyB1c2Ugb3VyIG1ldGFkYXRhXG4gICAgbmFtZTogTkZUX05BTUUsIC8vIG5hbWUgb2YgdGhlIE5GVFxuICAgIHRva2VuT3duZXI6IGFjY291bnQsIC8vIE5GVCBpcyBtaW50ZWQgdG8gdGhlIHdhbGxldCBzdWJtaXR0aW5nIHRoZSB0cmFuc2FjdGlvbiAoYnV5ZXIpXG4gICAgdXBkYXRlQXV0aG9yaXR5OiBzaG9wS2V5cGFpciwgLy8gd2UgcmV0YWluIHVwZGF0ZSBhdXRob3JpdHlcbiAgICBzZWxsZXJGZWVCYXNpc1BvaW50czogMTAwLCAvLyAxJSByb3lhbHR5XG4gICAgdXNlTmV3TWludDogbWludEtleXBhaXIsIC8vIHdlIHBhc3Mgb3VyIG1pbnQgaW4gYXMgdGhlIG5ldyBtaW50IHRvIHVzZVxuICB9KVxuXG4gIC8vIE5leHQgd2UgY3JlYXRlIGFuIGluc3RydWN0aW9uIHRvIHRyYW5zZmVyIFVTREMgZnJvbSB0aGUgYnV5ZXIgdG8gdGhlIHNob3BcbiAgLy8gVGhpcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjcmVhdGUgTkZUIHRyYW5zYWN0aW9uXG5cbiAgLy8gR2V0IHRoZSBidXllcidzIFVTREMgYWRkcmVzc1xuICBjb25zdCBmcm9tVXNkY0FkZHJlc3MgPSBhd2FpdCBnZXRPckNyZWF0ZUFzc29jaWF0ZWRUb2tlbkFjY291bnQoXG4gICAgY29ubmVjdGlvbixcbiAgICBzaG9wS2V5cGFpcixcbiAgICBVU0RDX0FERFJFU1MsXG4gICAgYWNjb3VudCxcbiAgKVxuXG4gIC8vIEdldCB0aGUgc2hvcCdzIFVTREMgYWRkcmVzc1xuICBjb25zdCB0b1VzZGNBZGRyZXNzID0gYXdhaXQgZ2V0T3JDcmVhdGVBc3NvY2lhdGVkVG9rZW5BY2NvdW50KFxuICAgIGNvbm5lY3Rpb24sXG4gICAgc2hvcEtleXBhaXIsXG4gICAgVVNEQ19BRERSRVNTLFxuICAgIHNob3BLZXlwYWlyLnB1YmxpY0tleSxcbiAgKVxuXG4gIGNvbnN0IHVzZGNNaW50ID0gYXdhaXQgZ2V0TWludChjb25uZWN0aW9uLCBVU0RDX0FERFJFU1MpXG4gIGNvbnN0IGRlY2ltYWxzID0gdXNkY01pbnQuZGVjaW1hbHNcblxuICBjb25zdCB1c2RjVHJhbnNmZXJJbnN0cnVjdGlvbiA9IGNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uKFxuICAgIGZyb21Vc2RjQWRkcmVzcy5hZGRyZXNzLCAvLyBmcm9tIFVTREMgYWRkcmVzc1xuICAgIFVTRENfQUREUkVTUywgLy8gVVNEQyBtaW50IGFkZHJlc3NcbiAgICB0b1VzZGNBZGRyZXNzLmFkZHJlc3MsIC8vIHRvIFVTREMgYWRkcmVzc1xuICAgIGFjY291bnQsIC8vIG93bmVyIG9mIHRoZSBmcm9tIFVTREMgYWRkcmVzcyAodGhlIGJ1eWVyKVxuICAgIFBSSUNFX1VTREMgKiAoMTAgKiogZGVjaW1hbHMpLCAvLyBtdWx0aXBseSBieSAxMF5kZWNpbWFsc1xuICAgIGRlY2ltYWxzXG4gIClcblxuICAvLyBDcmVhdGUgYSBndWVzdCBpZGVudGl0eSBmb3IgYnV5ZXIsIHNvIHRoZXkgd2lsbCBiZSBhIHJlcXVpcmVkIHNpZ25lciBmb3IgdGhlIHRyYW5zYWN0aW9uXG4gIGNvbnN0IGlkZW50aXR5U2lnbmVyID0gbmV3IEd1ZXN0SWRlbnRpdHlEcml2ZXIoYWNjb3VudClcblxuICAvLyBBZGQgdGhlIFVTREMgcGF5bWVudCB0byB0aGUgTkZUIHRyYW5zYWN0aW9uXG4gIHRyYW5zYWN0aW9uQnVpbGRlci5wcmVwZW5kKHtcbiAgICBpbnN0cnVjdGlvbjogdXNkY1RyYW5zZmVySW5zdHJ1Y3Rpb24sXG4gICAgc2lnbmVyczogW2lkZW50aXR5U2lnbmVyXVxuICB9KVxuXG4gIC8vIHRyYW5zYWN0aW9uQnVpbGRlci5zZXRGZWVQYXllcihwYXllcktleXBhaXIpXG5cbiAgLy8gQ29udmVydCB0byB0cmFuc2FjdGlvblxuICBjb25zdCBsYXRlc3RCbG9ja2hhc2ggPSBhd2FpdCBjb25uZWN0aW9uLmdldExhdGVzdEJsb2NraGFzaCgpXG4gIGNvbnN0IHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25CdWlsZGVyLnRvVHJhbnNhY3Rpb24obGF0ZXN0QmxvY2toYXNoKVxuXG4gIC8vIFBhcnRpYWxseSBzaWduIHRoZSB0cmFuc2FjdGlvbiwgYXMgdGhlIHNob3AgYW5kIHRoZSBtaW50XG4gIC8vIFRoZSBhY2NvdW50IGlzIGFsc28gYSByZXF1aXJlZCBzaWduZXIsIGJ1dCB0aGV5J2xsIHNpZ24gaXQgd2l0aCB0aGVpciB3YWxsZXQgYWZ0ZXIgd2UgcmV0dXJuIGl0XG4gIHRyYW5zYWN0aW9uLnNpZ24oc2hvcEtleXBhaXIsIG1pbnRLZXlwYWlyKVxuXG4gIC8vIFNlcmlhbGl6ZSB0aGUgdHJhbnNhY3Rpb24gYW5kIGNvbnZlcnQgdG8gYmFzZTY0IHRvIHJldHVybiBpdFxuICBjb25zdCBzZXJpYWxpemVkVHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbi5zZXJpYWxpemUoe1xuICAgIHJlcXVpcmVBbGxTaWduYXR1cmVzOiBmYWxzZSAvLyBhY2NvdW50IGlzIGEgbWlzc2luZyBzaWduYXR1cmVcbiAgfSlcbiAgY29uc3QgYmFzZTY0ID0gc2VyaWFsaXplZFRyYW5zYWN0aW9uLnRvU3RyaW5nKCdiYXNlNjQnKVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBcIk1pbnQgeW91ciBORlQgVmlkZW8hXCJcblxuICAvLyBSZXR1cm4gdGhlIHNlcmlhbGl6ZWQgdHJhbnNhY3Rpb25cbiAgcmV0dXJuIHtcbiAgICB0cmFuc2FjdGlvbjogYmFzZTY0LFxuICAgIG1lc3NhZ2UsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UG9zdFJlc3BvbnNlIHwgUG9zdEVycm9yPlxuKSB7XG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gcmVxLmJvZHkgYXMgSW5wdXREYXRhXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICBpZiAoIWFjY291bnQpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk5vIGFjY291bnQgcHJvdmlkZWRcIiB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtaW50T3V0cHV0RGF0YSA9IGF3YWl0IHBvc3RJbXBsKG5ldyBQdWJsaWNLZXkoYWNjb3VudCkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1pbnRPdXRwdXREYXRhKVxuICAgIHJldHVyblxuICB9IGNhdGNoIChlcnJvcikge2FjY291bnRcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnZXJyb3IgY3JlYXRpbmcgdHJhbnNhY3Rpb24nIH0pXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8R2V0UmVzcG9uc2UgfCBQb3N0UmVzcG9uc2UgfCBQb3N0RXJyb3I+XG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gZ2V0KHJlcylcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHJldHVybiBhd2FpdCBwb3N0KHJlcSwgcmVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjbHVzdGVyQXBpVXJsIiwiQ29ubmVjdGlvbiIsIktleXBhaXIiLCJQdWJsaWNLZXkiLCJnZXRPckNyZWF0ZUFzc29jaWF0ZWRUb2tlbkFjY291bnQiLCJjcmVhdGVUcmFuc2ZlckNoZWNrZWRJbnN0cnVjdGlvbiIsImdldE1pbnQiLCJHdWVzdElkZW50aXR5RHJpdmVyIiwia2V5cGFpcklkZW50aXR5IiwiTWV0YXBsZXgiLCJiYXNlNTgiLCJNRVRBREFUQV9VUkkiLCJVU0RDX0FERFJFU1MiLCJFTkRQT0lOVCIsIk5GVF9OQU1FIiwiUFJJQ0VfVVNEQyIsImdldCIsInJlcyIsInN0YXR1cyIsImpzb24iLCJsYWJlbCIsImljb24iLCJwb3N0SW1wbCIsImFjY291bnQiLCJjb25uZWN0aW9uIiwic2hvcFByaXZhdGVLZXkiLCJFcnJvciIsInNob3BLZXlwYWlyIiwiZnJvbVNlY3JldEtleSIsImRlY29kZSIsIm1ldGFwbGV4IiwibWFrZSIsInVzZSIsIm5mdHMiLCJtaW50S2V5cGFpciIsImdlbmVyYXRlIiwidHJhbnNhY3Rpb25CdWlsZGVyIiwiYnVpbGRlcnMiLCJjcmVhdGUiLCJ1cmkiLCJuYW1lIiwidG9rZW5Pd25lciIsInVwZGF0ZUF1dGhvcml0eSIsInNlbGxlckZlZUJhc2lzUG9pbnRzIiwidXNlTmV3TWludCIsImZyb21Vc2RjQWRkcmVzcyIsInRvVXNkY0FkZHJlc3MiLCJwdWJsaWNLZXkiLCJ1c2RjTWludCIsImRlY2ltYWxzIiwidXNkY1RyYW5zZmVySW5zdHJ1Y3Rpb24iLCJhZGRyZXNzIiwiaWRlbnRpdHlTaWduZXIiLCJwcmVwZW5kIiwiaW5zdHJ1Y3Rpb24iLCJzaWduZXJzIiwibGF0ZXN0QmxvY2toYXNoIiwiZ2V0TGF0ZXN0QmxvY2toYXNoIiwidHJhbnNhY3Rpb24iLCJ0b1RyYW5zYWN0aW9uIiwic2lnbiIsInNlcmlhbGl6ZWRUcmFuc2FjdGlvbiIsInNlcmlhbGl6ZSIsInJlcXVpcmVBbGxTaWduYXR1cmVzIiwiYmFzZTY0IiwidG9TdHJpbmciLCJtZXNzYWdlIiwicG9zdCIsInJlcSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtaW50T3V0cHV0RGF0YSIsImhhbmRsZXIiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();