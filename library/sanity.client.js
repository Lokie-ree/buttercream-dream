// lib/sanity.client.js
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '9twmhni2',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false
})