# npm install
installed vueuse/core module

npm i @vueuse/core

# use for hashing letter content and use it in the key for comparison
npm i string-hash

# form validation
npm install @vuelidate/core @vuelidate/validators --legacy-peer-deps
Why --legacy-peer-deps should work here:
Vuelidate v2 is for Vue 3. The @vue/composition-api is listed as a peerOptional dependency by @vuelidate/core. This means it's not strictly required if the features it provides (Composition API for Vue 2) are already present, which they are in Vue 3. The --legacy-peer-deps flag allows npm to be less strict about this optional, conflicting branch of dependencies that you don't need.


# For api
npm install @azure/data-tables @azure/storage-blob

# For delivery date selection
npm install @vuepic/vue-datepicker

# managing date
npm install date-fns
npm install date-fns-tz

# Blob
Created order-receipts

# Table
### orders

### shippingRatesNcr
- Created shippingRatesNcr table to list out the rates

PartitionKey	RowKey	Timestamp	cityName	rate
NCR	133900000	2025-06-21T07:35:56.7365654Z	City of Manila	150
NCR	137602000	2025-06-21T07:35:17.7197521Z	City of Makati	120

# Nuxt 3 Basic Starter
Azure Static Web Apps allows you to easily build Nuxt 3 apps in minutes. Use this repo with the Nuxt 3 tutorial to build a new server-rendered site.

Check out the following to learn more:
1. [nuxt 3 documentation](https://v3.nuxtjs.org)
2. [server-rendered nuxt 3 app on Azure Static Web Apps documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nuxtjs)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start Nuxt.js app in development on http://localhost:3000: 

```bash
npm run dev -- -o 
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#deployment) for more information.


---

# Next steps
Pre-loaded to make it smoother