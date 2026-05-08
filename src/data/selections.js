const b = import.meta.env.BASE_URL

export const characters = [
  { id: 'chase',    sheetPath: `${b}images/sheets/chase.png`,    imagePath: `${b}images/characters/chase.png`,    placeholderColor: '#35a1ea', placeholderShape: 'star',      accentColor: '#1D4ED8' },
  { id: 'skye',     sheetPath: `${b}images/sheets/skye.png`,     imagePath: `${b}images/characters/skye.png`,     placeholderColor: '#cd5ba7', placeholderShape: 'heart',     accentColor: '#BE185D' },
  { id: 'marshall', sheetPath: `${b}images/sheets/marshall.png`, imagePath: `${b}images/characters/marshall.png`, placeholderColor: '#d7524e', placeholderShape: 'cross',     accentColor: '#B91C1C' },
  { id: 'rubble',   sheetPath: `${b}images/sheets/rubble.png`,   imagePath: `${b}images/characters/rubble.png`,   placeholderColor: '#f8b919', placeholderShape: 'diamond',   accentColor: '#B45309' },
  { id: 'zuma',     sheetPath: `${b}images/sheets/zuma.png`,     imagePath: `${b}images/characters/zuma.png`,     placeholderColor: '#F97316', placeholderShape: 'wave',      accentColor: '#EA580C' },
  { id: 'everest',  sheetPath: `${b}images/sheets/everest.png`,  imagePath: `${b}images/characters/everest.png`,  placeholderColor: '#8281d8', placeholderShape: 'triangle',  accentColor: '#6D28D9' },
]

export const locations = [
  { id: 'seal-island',        imagePath: `${b}images/locations/seal-island.png`,        placeholderColor: 'transparent', placeholderShape: 'circle',     accentColor: '#075985' },
  { id: 'the-beach',          imagePath: `${b}images/locations/the-beach.png`,          placeholderColor: 'transparent', placeholderShape: 'semicircle', accentColor: '#A16207' },
  { id: 'the-lookout',        imagePath: `${b}images/locations/the-lookout.png`,        placeholderColor: 'transparent', placeholderShape: 'pentagon',   accentColor: '#0284C7' },
  { id: 'city-hall',          imagePath: `${b}images/locations/city-hall.png`,          placeholderColor: 'transparent', placeholderShape: 'rectangle',  accentColor: '#57534E' },
  { id: 'train-station',      imagePath: `${b}images/locations/train-station.png`,      placeholderColor: 'transparent', placeholderShape: 'cross',      accentColor: '#78350F' },
  { id: 'farmer-yumis-farm',  imagePath: `${b}images/locations/farmer-yumis-farm.png`,  placeholderColor: 'transparent', placeholderShape: 'leaf',       accentColor: '#15803D' },
]

export const activities = [
  { id: 'picnic',    imagePath: `${b}images/activities/picnic.png`,    placeholderColor: 'transparent', placeholderShape: 'diamond',   accentColor: '#D97706' },
  { id: 'running',   imagePath: `${b}images/activities/running.png`,   placeholderColor: 'transparent', placeholderShape: 'zigzag',    accentColor: '#DC2626' },
  { id: 'standing',  imagePath: `${b}images/activities/standing.png`,  placeholderColor: 'transparent', placeholderShape: 'rectangle', accentColor: '#7C3AED' },
  { id: 'playing',   imagePath: `${b}images/activities/playing.png`,   placeholderColor: 'transparent', placeholderShape: 'star',      accentColor: '#DB2777' },
  { id: 'eating',    imagePath: `${b}images/activities/eating.png`,    placeholderColor: 'transparent', placeholderShape: 'circle',    accentColor: '#EA580C' },
  { id: 'laughing',  imagePath: `${b}images/activities/laughing.png`,  placeholderColor: 'transparent', placeholderShape: 'burst',     accentColor: '#F59E0B' },
]

export const ALL_STEPS = [characters, locations, activities]
