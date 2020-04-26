module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if(node.internal)

  console.log(node)
  console.log(JSON.stringify(node, undefined, 4))
}
