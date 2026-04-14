import equal from 'fast-deep-equal'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { mdxConfig } from '../theme.config'

const getMdxOptions = (options = {}) => {
  const { slug = [] } = options

  if (!mdxConfig) {
    throw Error('mdxConfig is missing from theme.config.js')
  }

  const { collections = [], publicDir, remarkPlugins = [], rehypePlugins = [] } = mdxConfig

  // Common plugins - minimal set for compatibility with next-mdx-remote v5
  const allRemarkPlugins = [
    remarkGfm,
    ...remarkPlugins,
  ]

  const allRehypePlugins = [
    ...rehypePlugins,
  ]

  // Collection page plugins
  const collectionSlugs = collections.map((path) => path.split('/').filter(Boolean))
  const isCollectionPage =
    // Check if slug is a sub-directory & parent directory matches a collection
    slug.length > 1 && collectionSlugs.find((s) => equal(s, slug.slice(0, -1)))
  if (isCollectionPage) {
    allRehypePlugins.push(rehypeSlug)
  }

  return {
    ...mdxConfig,
    collections: collectionSlugs,
    options: {
      remarkPlugins: allRemarkPlugins,
      rehypePlugins: allRehypePlugins,
    },
  }
}

export default getMdxOptions
