/* All constants (potentially) used by the background script. */
"use strict";

/* Web APIs */

// Catalog
const BUNDLE_INFO = "https://catalog.roblox.com/v1/bundles/%s/details";
const PRODUCT_INFO = "https://api.roblox.com/Marketplace/ProductInfo?assetId=";
const GAMEPASS_INFO = "https://api.roblox.com/marketplace/game-pass-product-info?gamePassId=";
const PLACE_GAME_PASS_DATA = "https://www.roblox.com/games/getgamepassesinnerpartial?startIndex=0&maxRows=50&placeId=";

// Message
const SENT = "https://www.roblox.com/messages/api/get-messages?messageTab=1&pageNumber=%s&pageSize=20";
const INBOX = "https://www.roblox.com/messages/api/get-messages?messageTab=0&pageNumber=%s&pageSize=20";
const ARCHIVED = "https://www.roblox.com/messages/api/get-messages?messageTab=3&pageNumber=%s&pageSize=20";
