import Stripe from 'stripe'

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripeSecret, { apiVersion: '2023-08-16' })

export default stripe
