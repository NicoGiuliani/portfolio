import { type SchemaTypeDefinition } from 'sanity'
import pageInfo from './schemas/pageInfo'
import experience from './schemas/experience'
import projects from './schemas/projects'
import skill from './schemas/skill'
import social from './schemas/social'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, projects, skill, social],
}
