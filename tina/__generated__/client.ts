import { createClient } from 'tinacms/dist/client'
import { queries } from './types'
export const client = createClient({
	url: 'http://localhost:4001/graphql',
	token: '34fe22547cbbafa8b8d995fe440a4a3dda72e2bc',
	queries
})
export default client
