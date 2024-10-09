import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifGrid } from './Components/GifGrid'
import { GifItem } from './Components/GiftItem'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifGrid />
    <GifItem />
  </StrictMode>,
)
